const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];

  export default function ProductFilter2() {
    return <FilterableProductTable products={PRODUCTS} />;
  }
  

  function FilterableProductTable({ products }) {
    return (
      <div>
        <SearchBar />
        <h1> my own - Fruits List</h1>
        <ProductTable products={products} />
      </div>
    );
  }

  function SearchBar() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <label>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }

  function ProductTable({products}){
    debugger
    const tableDataByCategory = products.reduce((acc, obj) => {
        const key = obj.category;
        if(!acc[key]){
            acc[key] = [];
        }

        acc[key].push(obj);
        return acc;
    }, {});

    
        return (

                <table>
                                      
                            <thead>
                                <th>Name</th>
                                <th>Price</th>
                            </thead>
                            <tbody>
                                
                             {tableDataByCategory.Fruits.map(lineProduct => {
                               return  <tr>
                                        <td>{lineProduct.name}</td>
                                        <td>{lineProduct.price}</td>
                                </tr>
                                    })};
                            </tbody>               
                    
                </table>

        );
            

  }
  