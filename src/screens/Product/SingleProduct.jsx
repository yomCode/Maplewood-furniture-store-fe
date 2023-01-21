import { 
    FacebookFilled,
    TwitterCircleFilled, 
    InstagramFilled
 } from '@ant-design/icons'

 import { useLocation } from 'react-router-dom'
 import { useState } from 'react'
import './singleProduct.css'

const imageUrlLocal = `https://templatekit.jegtheme.com/funiture/wp-content/uploads/sites/18/2020/11/Group-1@2x.jpg`
const SingleProduct = () => {
    const { state } = useLocation();
    const{ imageUrl, description, price, name, availableQty } = state;
    console.log(state);

    const[numOfItems, setNumOfItems] = useState(1)

  return (
    <section className="single-product-section">
        <div className="product-preview">
            <div className="img-div">
                <img src={imageUrlLocal} alt="" />
            </div>
            <div className="info-div">

            </div>
        </div>

        <div className="description-tab">
            <div className="head">
                <h1 className="title">{ name }</h1>
                <p className="price-tag">#{ price }</p>
            </div>
        
            <p className="short-info">This is a sample product</p>

            <p className="description">{ description } </p>

            <div className="btn-div">
                <input type="number" max={availableQty} value={numOfItems} 
                    className="item-count-btn qty-input" />
                <button className="btn home-btn">
                    ADD TO CART
                </button>
                <h4>Category: <span>Table, Wooden</span></h4>
            </div>
            <hr />
            <div className="links-div">
                <p>Share This Item: </p>
                <FacebookFilled />
                <TwitterCircleFilled />
                <InstagramFilled />
            </div>
        </div>

        <div className="related-products-div">

        </div>
    </section>
  )
}

export default SingleProduct