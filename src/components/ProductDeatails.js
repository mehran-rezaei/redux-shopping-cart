import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch , useSelector } from 'react-redux';
// function
import { quantityCount , isInCart } from '../helpers/functions';
// icons
import trash from "../icons/trash.svg"

const ProductDeatails = (props) => {

    const id = props.match.params.id
    const state = useSelector(state => state.cartState)
    const dispatch = useDispatch()
    const [data , setData ] = useState({})
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(Response => {
            setData(Response.data)
        })
    } , [])
    
    return (
        <div>
          {data.title ? 
          <div className='px-5 sm:px-10 xl:px-20 py-5 sm:py-10   '>
               <div className='sm:flex justify-center items-center shadow-lg rounded-md px-5 sm:px-10 sm:py-5 lg:py-10  xl:px-32 '>

                <div className='flex justify-center items-center sm:block sm:w-1/4 md:w-1/3 mr-2'>
                    <img src={data.image} alt="product" className='h-30 w-36 sm:w-32 sm:h-40 md:w-60 md:h-64 lg:w-72 lg:h-80' />
                </div>
                <div className=' px-5 md:px-10 xl:px-24 py-10 sm:w-3/4 md:w-2/3'>
                    <div className=' mb-3 md:mb-5 lg:mb-8'>
                        <h1 className='text-blue-700 font-medium text-xs sm:text-sm md:text-lg mb-4 md:mb-6 lg:mb-8'>{data.title}</h1>
                        <h2 className='text-justify text-gray-700 font-semibold sm:font-medium md:font-bold text-[9px] sm:text-[10px]  md:text-xs lg:text-sm mb-4 lg:mb-6'>{data.description}</h2>
                        <h2 className='text-[10px] sm:text-xs md:text-sm lg:text-base font-medium  text-yellow-600'>Category : <span className='text-gray-700'>{data.category}</span></h2>
                    </div>

                <div className='flex justify-between items-center mt-6 md:mt-10 lg:mt-16'>
                    <div className='border-cartcolor text-cartcolor border-2 text-xs md:text-sm lg:text-base px-4 lg:px-5 py-1 font-bold rounded-md'><span>{data.price} $</span></div>
                     {data.title ?
                     <div className='flex '>
                      {isInCart(state,data.id) ?
                           <button className='bg-cartcolor text-white text-xs sm:text-base h-5 w-5 sm:h-7 sm:w-7 font-bold rounded-md pb-1 mr-1 hoverbutton ' onClick={() => dispatch({type : "INCREASE" , payload : data})}>+</button> :
                           <button className='bg-cartcolor text-white text-[10px]  sm:text-xs lg:text-sm rounded-md px-2 sm:px-4 py-2 font-medium hoverbutton' onClick={() => dispatch({type :"ADD_ITEM" , payload : data })}>Add to cart</button>
                         }
                         {quantityCount(state , data.id) > 1 &&
                         <button className='bg-cartcolor text-white text-xs sm:text-base h-5 w-5 sm:h-7 sm:w-7 font-bold rounded-md  pb-1 hoverbutton' onClick={() => dispatch({type : "DECREASE" , payload : data})}>-</button> }
                         {quantityCount(state , data.id) === 1 && 
                         <button className='bg-cartcolor text-white text-xs sm:text-base h-5 w-5 sm:h-7 sm:w-7 p-1 font-bold rounded-md flex justify-center items-center hoverbutton' onClick={() => dispatch({type : "REMOVE_ITEM" , payload : data})}><img src={trash} className='' alt="" /></button>}
                          {quantityCount(state , data.id) > 0 ? <span className='ml-2 text-[11px] sm:text-base h-5 w-5 sm:h-7 sm:w-7 bg-cartcolor text-white rounded-md text-center  sm:font-bold'>{quantityCount(state , data.id)}</span> : ""}
                     </div> : ""}
                     </div>
                </div>     
                </div>                
        </div> :  <h1 className='text-center font-bold text-lg'>Loading...</h1> }
        </div>
    );
};
export default ProductDeatails;