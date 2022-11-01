import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { increase , decrease , addItem , removeItem  } from '../redux/cart/cartAction'; 
// functions
import { shorten , quantityCount , isInCart } from '../helpers/functions';
// icons
import trash from "../icons/trash.svg"

const Product = ({productData}) => {
    const {title , price , image , id } = productData
    const state = useSelector(state => state.cartState)
    const dispatch = useDispatch()
    return (
        <div className='sm:mb-12 mb-4  py-2 sm:py-4 px-2 sm:px-6 shadow-xl border-white rounded-md bg-white'>
            <div ><img src={image} alt="product" className=' h-36 w-32 sm:w-52 sm:h-56'/></div>
            <h3 className='text-xs sm:text-base lg:text-lg font-bold my-3 sm:my-6 h-6 overflow-hidden'>{shorten(title)}</h3>
            <p className='font-medium text-xs sm:text-base'>{price} $</p>
            <div className='flex justify-between mt-8 items-center'>
              <div className='flex '>
              {isInCart(state,id) ?
                   <button className='bg-cartcolor text-white text-xs sm:text-base h-5 w-5 sm:h-7 sm:w-7 font-bold rounded-md pb-1 mr-1 hoverbutton ' onClick={() => dispatch(increase(productData))}>+</button> :
                   <button className='bg-cartcolor text-white text-[10px]  sm:text-sm rounded-md px-2 sm:px-4 py-1 font-medium hoverbutton' onClick={() => dispatch(addItem(productData))}>Add to cart</button>
                 }
                 {quantityCount(state , id) > 1 &&
                 <button className='bg-cartcolor text-white text-xs sm:text-base h-5 w-5 sm:h-7 sm:w-7 font-bold rounded-md  pb-1 hoverbutton' onClick={() => dispatch(decrease(productData))}>-</button> }
                 {quantityCount(state , id) === 1 && 
                 <button className='bg-cartcolor text-white text-xs sm:text-base h-5 w-5 sm:h-7 sm:w-7 p-1 font-bold rounded-md flex justify-center items-center hoverbutton' onClick={() => dispatch(removeItem(productData))}><img src={trash} className='' alt="" /></button>}
                  {quantityCount(state , id) > 0 ? <span className='ml-2 text-[11px] sm:text-base h-5 w-5 sm:h-7 sm:w-7 bg-cartcolor text-white rounded-md text-center  sm:font-bold'>{quantityCount(state , id)}</span> : ""}
              </div>
              <div>
                <Link to={`/products/${id}`}><button className='text-cartcolor text-[10px] sm:text-base font-bold hover:shadow-md transition ease-in duration-200'>Deatails</button></Link>
              </div>
            </div>
        </div>
    );
};
export default Product;