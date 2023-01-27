import { Add, } from "@mui/icons-material";
import { Rate } from "antd";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useProduct from "../../hooks/useProduct";

const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];

const ProductItem = ({ product, isEditable, url }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname

  const{ name, price, imageUrl } = product
  const[value, setValue] = useState(3);
  const[isHover, setIsHover] = useState(false)
    
  const { products, setProducts } = useProduct()
  const handleHover = () => isEditable && setIsHover(true)
  const handleHoverLeave = () => isEditable && setIsHover(false)

  const addToFavorites = () => {
    alert("Added to favorites!")
    navigate(from, { replace: false })
  }

  const deleteProduct = (name) => 
    setProducts([...products.filter(x  => name !== x.name)])
  
  return ( 
    <div className="product-container bordered-cont" onMouseOver={handleHover} onMouseLeave={handleHoverLeave}>
        <div className="add-icon" onClick={ addToFavorites }>
          <Add className="item-icon"/>
        </div>
        <Link to={`${url}/${product.id}`} className="link-container">
          <img src={ imageUrl } alt={ name } />
          <h5 className="product-name">{ name }</h5>
          <span>
              <Rate tooltips={desc} onChange={setValue} value={value}  />
              <p className="product-price">${ price }</p>
          </span>
        </Link>
        <p className="add-tocart-btn btn">ADD TO CART</p>
        { isHover && <button className='delete-btn' 
            onClick={() => deleteProduct(name)}>X</button> }

    </div>
  );
};

export default ProductItem;
