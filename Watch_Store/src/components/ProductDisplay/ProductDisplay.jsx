import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext'
const ProductDisplay = (props) => {
  const {product} =props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='product-display'>
      <div className='display-left'>
<div className='img-list'>
  <img src={product.image} alt="" />
    <img src={product.image} alt="" />
      <img src={product.image} alt="" />

</div>
<div className='main-img'>
  <img src={product.image} alt="" />
</div>
      </div>
      <div className='display-right'>
<h1>{product.name}</h1>
<div className="star-display">
  <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
      <img src={star_icon} alt="" />
        <img src={star_dull} alt="" />
          <img src={star_dull} alt="" />
          <p>(122)</p>
</div>
<div className='product-prices'>
  <div className='old-price'>
    ${product.old_price}
  </div>
  <div className='new-price'>
        ${product.new_price}
  </div>
  <div></div>
</div>
<div> 
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et maiores ipsam mollitia voluptatem quo amet assumenda, culpa iusto commodi, beatae, quos aspernatur accusantium.
</div>
<button onClick={() =>{addToCart(product.id)}}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductDisplay
