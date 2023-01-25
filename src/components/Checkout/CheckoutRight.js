const CheckoutRight = ({itemsInCart}) => {
    return ( 
        <div className="right">
            <div className="checkout-right">
                    <div className="checkout-pickup-text">
                        <h3>Pickup States</h3>
                        <div className="checkout-pickup">
                            <form>
                            <label for="pickup-stations" >Select a pickup station near you: </label>
                            <select name="pickup" id="">
                                <option value="Abia">Abia</option>
                                <option value="Adamawa">Adamawa</option>
                                <option value="Akwa Ibom">Akwa Ibom</option>
                                <option value="Anambra">Anambra</option>
                                <option value="Bauchi">Bauchi</option>
                                <option value="Bayelsa">Bayelsa</option>
                                <option value="Benue">Benue</option>
                                <option value="Borno">Borno</option>
                                <option value="Cross River">Cross River</option>
                                <option value="Delta">Delta</option>
                                <option value="Ebonyi">Ebonyi</option>
                                <option value="Edo">Edo</option>
                                <option value="Ekiti">Ekiti</option>
                                <option value="Enugu">Enugu</option>
                                <option value="Gombe">Gombe</option>
                                <option value="Imo">Imo</option>
                                <option value="Jigawa">Jigawa</option>
                                <option value="Kaduna">Kaduna</option>
                                <option value="Kano">Kano</option>
                                <option value="Katsina">Katsina</option>
                                <option value="Kebbi">Kebbi</option>
                                <option value="Kogi">Kogi</option>
                                <option value="Kwara">Kwara</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Nasarawa">Nasarawa</option>
                                <option value="Niger">Niger</option>
                                <option value="Ogun">Ogun</option>
                                <option value="Ondo">Ondo</option>
                                <option value="Osun">Osun</option>
                                <option value="Oyo">Oyo</option>
                                <option value="Plateau">Plateau</option>
                                <option value="Rivers">Rivers</option>
                                <option value="Sokoto">Sokoto</option>
                                <option value="Taraba">Taraba</option>
                                <option value="Yobe">Yobe</option>
                                <option value="Zamfara">Zamfara</option>
                            </select>
                            <input type="submit" value="Submit"/>
                            </form>
                            <div className="location">
                                <h3>Select your Pickup Centers here </h3>
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h4>Payment Method</h4>
                    <div className="payment-method">
                        

                        <form action="/">
                        <label for="payment-option" >Select a payment method: </label>
                            <input type="radio" id="" name="payment-method" value="payment-method" />
                            <label for="card-payment">Pay with Wallet</label>
                            <input type="submit" value="Submit" />
                        </form>

                    </div>
                </div>
        </div>
     );
}
 
export default CheckoutRight;