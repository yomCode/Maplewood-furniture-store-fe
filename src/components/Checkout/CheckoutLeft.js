import './CheckoutLeft.css'


const CheckoutLeft = ({itemsInCart}) => {
    
    return ( 
        <div className="left">
            {itemsInCart.map((item,index)=> <div className="checkout-left">
                    {index===0 && (<div className="checkout-order-total">
                        <h3 className="">Order Summary</h3>
                        <h4>Total: $<span>{item.cart.total}</span></h4>
                    </div>)}
                    <div >
                        {index===0 && <h3>Order Details</h3>}
                        <div className="checkout-order">
                        <div key={item.id} className="checkout-order">
                            <div className="checkout-order-img">
                                <img src={item.imageUrl} alt="furniture-couch" />
                            </div>
                            <div className="checkout-order-details">
                                <p>{item.productName}</p>
                                 <p>Qty: {item.orderQty}</p>
                                <p>Sub-total: <span>{ item.subTotal }</span></p>
                                <p>Card Payment Discount(5%): <span></span></p>
                            </div>
                            </div>
                         </div>
                            
                    </div>
            </div>)}
                        
        </div>
     );
}
 
export default CheckoutLeft;