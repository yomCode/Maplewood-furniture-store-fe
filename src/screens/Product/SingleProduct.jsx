import { 
    FacebookFilled,
    TwitterCircleFilled, 
    InstagramFilled
 } from '@ant-design/icons'

import './singleProduct.css'

const imageUrl = "https://templatekit.jegtheme.com/funiture/wp-content/uploads/sites/18/2020/11/J7ZW2XK@2x.jpg"
const SingleProduct = ({ product }) => {
  return (
    <section className="single-product-section">
        <div className="product-preview">
            <div className="img-div">
                <img src={imageUrl} alt="" />
            </div>
            <div className="info-div">

            </div>
        </div>

        <div className="description-tab">
            <div className="head">
                <h1 className="title">COFFEE TABLE</h1>
                <p className="price-tag">$126.90</p>
            </div>
        
            <p className="short-info">This is a sample product</p>

            <p className="description">
            Far far away, behind the word mountains, far from the
             countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right 
              at the coast of the Semantics, a large language ocean. 
              A small river named Duden flows by their place 
              and supplies it
            </p>

            <div className="btn-div">
                <input type="number" min="1" value={1} 
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