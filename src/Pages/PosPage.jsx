import React, { useEffect, useState } from "react";
import MainLayout from "../Layout/MainLayout";
import axios from "axios";
import './../../src/main.css';
import './../../src/Sale.css';
import PayNowMoadl from "../Modal/PayNowModal";

function PosPage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading0] = useState(false)
    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        fetchProducts();
    },[]);

    useEffect(() => {
        console.log(products);
        products.map((product, key) => { console.log(product.title) });
    }, [products]);

    useEffect(() => {
    let newTotalAmount = 0;
    cart.forEach(icart => {
      newTotalAmount = newTotalAmount + parseInt(icart.totalAmount);
    })
    setTotalAmount(newTotalAmount);
  },[cart])

    const fetchProducts = async () => {
        setIsLoading0(true);
        const result = await axios.get('https://fakestoreapi.com/products');
        setProducts(await result.data);
        setTimeout(() => {
           setIsLoading0(false);
        }, 2000);
        setIsLoading0(false);
        
    }

    const addProductToCart = async (product) => {
        // check if the adding product exist
    let findProductInCart = await cart.find(i=>{
      return i.id === product.id
    });

        if (findProductInCart) {
             let newCart = [];
            let newItem;

            cart.forEach(cartItem => {
                if(cartItem.id === product.id){
                    newItem = {
                        ...cartItem,
                        quantity: cartItem.quantity + 1,
                        totalAmount: cartItem.price * (cartItem.quantity + 1)
                    }
                    newCart.push(newItem);
                }else{
                        newCart.push(cartItem);
                    }
            });
            setCart(newCart);
         }
        else {
            let addingProduct = {
            ...product,
            'quantity': 1,
            'totalAmount': product.price,
            }
            setCart([...cart, addingProduct]);
        }
    }

    const removeProduct = async(product) =>{
    const newCart =cart.filter(cartItem => cartItem.id !== product.id);
    setCart(newCart);
  }
    return (
        <MainLayout>
            <div className='row'>
                <div className='col-lg-8'>
                    {isLoading ? <div class="loading">
                                    <div class="spinner"></div>
                                </div>
                        : <div className='row'>
                                {products.map((product, key) =>
                                    <div key={key} className='col-lg-4 mb-4'>
                                        <div className='border product-card' onClick={() => addProductToCart(product)}>
                                            <p className='product-title'>{product.title}</p>
                                            <img src={product.image} className="img-fluid product-image" alt={product.name} />
                                            <p className='product-price'>${product.price}</p>
                                        </div>
                                    </div>
                                )}
                          </div>}     
                </div>
                <div className='col-lg-4'>
                    <div className='table-responsive cart-table'>
                        <table className='table table-responsive table-dark table-hover'>
                            <thead>
                                <tr>
                                <td>#</td>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Qty</td>
                                <td>Total</td>
                                <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                { cart ? cart.map((cartProduct, key) => <tr key={key}>
                                    <td>{cartProduct.id}</td>
                                    <td>{cartProduct.name}</td>
                                    <td>{cartProduct.price}</td>
                                    <td>{cartProduct.quantity}</td>
                                    <td>{cartProduct.totalAmount}</td>
                                    <td>
                                        <button className='btn btn-danger btn-sm' onClick={() => removeProduct(cartProduct)}>Remove</button>
                                    </td>
                                </tr>)

                                : (
                                    <tr>
                                    <td colSpan="6" className='empty-cart'>No Items in Cart</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <h2 className='px-2 text-white'>Total Amount: ${totalAmount}</h2>
                    </div>

                    <div className='mt-3'>
                        { totalAmount !== 0 ? <div>
                        <button className='btn btn-primary pay-now-btn' onClick={() => setIsModalOpen(true)}>
                            Pay Now
                        </button>
                        </div> : (
                                <div className='empty-cart-msg'>Please add a product to the cart</div>
                            )}
                    </div> 
                </div>
                {isModalOpen &&
                    <PayNowMoadl
                    totalAmount={totalAmount}
                    setCart={setCart}
                    setTotalAmount={setTotalAmount}
                    ModalHandler={setIsModalOpen}/>
                }
            </div>
        </MainLayout>
    )
}

export default PosPage