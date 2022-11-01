import React from 'react';
import {  useDispatch } from 'react-redux';
// actions
import { decrease , increase , removeItem } from '../redux/cart/cartAction';
// function
import { shorten } from '../helpers/functions';
//icons
import trash from "../icons/trash.svg"

const CartProducts = (props) => {
    const {title , image , price , quantity  } = props.data
    const  dispatch  = useDispatch()
    return (
        <div className='flex justify-between items-center px-4 py-4 mb-8 shadow-lg rounded-md'>
            <div><img src={image} alt="" className='w-12 sm:w-24' /></div>
            <h4 className='font-bold text-xs sm:text-lg'>{shorten(title)}</h4>
            <h3 className='font-bold text-xs sm:text-lg'>{price}</h3>
            <div className='flex'>
            <button className='hoverbutton text-white bg-cartcolor text-xs sm:text-base h-5 w-5 sm:h-7 sm:w-7 font-bold rounded-md pb-1 mr-1' onClick={() => dispatch(increase(props.data))}>+</button>
            {quantity > 1 ? <button className='hoverbutton text-white bg-cartcolor text-xs sm:text-base h-5 w-5 sm:h-7 sm:w-7 font-bold rounded-md pb-1 mr-1' onClick={() =>  dispatch(decrease(props.data))}>-</button>  
            : <button className='bg-cartcolor text-white text-xs sm:text-base h-5 w-5 sm:h-7 sm:w-7 p-1 font-bold rounded-md flex justify-center items-center hoverbutton' onClick={() =>dispatch(removeItem(props.data))}><img src={trash} alt="" /></button>
            }       
            <h4
             className='ml-1 sm:ml-2 text-[11px] sm:text-base h-5 w-5 sm:h-7 sm:w-7 bg-cartcolor text-white rounded-md text-center  sm:font-bold' >
            {quantity}
            </h4>
            </div>
        </div>
    );
};
export default CartProducts;