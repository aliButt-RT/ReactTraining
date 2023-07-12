import React from "react";

function PayNowMoadl({ totalAmount, setTotalAmount, setCart, ModalHandler }) {
    console.log("ENter in modal");

    const closeModal = (setTotalAmount, setCart,ModalHandler) => {
    setTotalAmount(0);
    setCart([]);
    ModalHandler(false)
}

  return (
        <div class="modal fade show" style={{display:"block"}} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Your Total Bill</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                        <p>Total Amount: { totalAmount }</p>
                </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => closeModal(setTotalAmount, setCart, ModalHandler)}>Close</button>
                        <button type="button" class="btn btn-primary" onClick={() => closeModal(setTotalAmount, setCart, ModalHandler)}>Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PayNowMoadl;