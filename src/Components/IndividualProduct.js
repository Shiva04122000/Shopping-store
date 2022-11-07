import React,{useState} from 'react'

const IndividualProduct = ({individualProduct, addToCart}) => {

    const [added,setAdded]=useState(false)

    // console.log(individualProduct);
    const handleAddToCart=()=>{
        addToCart(individualProduct);
        setAdded(true)
    } 

    return (
        <div className='product'>
            <div className='product-img'>
                <img src={individualProduct.url} alt="product-img"/>
            </div>
            <div className='product-text title'>{individualProduct.title}</div>
            <div className='product-text description'>{individualProduct.description}</div>
            <div className='product-text price'>$ {individualProduct.price}</div>
            <div className={'btn btn-md cart-btn' + (added? " bg-primary ":" btn-danger")} onClick={handleAddToCart}>{!added ? "Add To Cart" : "Added to Cart"}</div>
        </div> 
    )
}

export default IndividualProduct;