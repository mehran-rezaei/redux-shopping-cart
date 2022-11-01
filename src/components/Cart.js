import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { clear , checkout } from '../redux/cart/cartAction';
import { Link } from 'react-router-dom';
// component
import CartProducts from './CartProducts'; 
const Cart = () => {
    const state = useSelector(state =>state.cartState)
    const dispatch = useDispatch()
    return (
        <div >
            { state.itemsCounter > 0 && 
            <div className='grid grid-cols-1  lg:grid-cols-3 lg:px-14 px-2 sm:px-8 xl:px-24 lg:items-start    '>
                <div className='rounded-md  px-5 py-5 shadow-xl sm:max-h-56 sm:h-48 lg:h-56  lg:mr-6 lg:col-span-1'>
                        <h1 className='text-blue-700 text-sm sm:text-base font-medium mb-4 mt-2'> Total Products :<span  className='text-sm sm:text-base text-gray-900 ml-2'>{state.itemsCounter} </span></h1>
                        <h1 className='text-blue-700 text-sm sm:text-base font-medium'> Total Payments : <span className='text-sm sm:text-base text-gray-900 ml-2'>{state.total} $</span></h1>
                        <div className='flex justify-between items-center mt-6 sm:mt-12 lg:mt-20'>
                        <button className='text-cartcolor font-medium text-sm sm:text-base hover:font-bold transition ease-in duration-200'  onClick={() => dispatch(clear()) } >Clear</button>
                        <button className='bg-cartcolor text-white  text-sm font-bold sm:font-medium sm:text-base px-4 py-1 rounded-md hoverbutton'  onClick={() => dispatch(checkout())}>Checkout</button>
                        </div> 
                </div>
                <div className='lg:col-span-2 mt-4 sm:mt-12 py-4 lg:py-0 lg:mt-0'>
                    {state.selectedItem.map(item => <CartProducts key={item.id} data={item} /> )}
                </div>
            </div> }
              {state.checkout && <div className=' flex justify-center items-center flex-col sm:flex-row bg-white  ' >
                    <h3 className='mb-8 sm:mb-0 sm:mr-28 font-bold sm:text-xl'>Checkout Successfully</h3>
                    <Link className='bg-cartcolor text-white text-sm sm:text-base font-bold   py-2 rounded-md px-6 hoverbutton' to="/products">Buy more</Link>
                </div> 
              }
              {
                !state.checkout && state.itemsCounter === 0 &&   <div className='flex justify-center flex-col sm:flex-row items-center bg-white  '>
                    <h3  className='mb-8 sm:mb-0 sm:mr-28 font-bold sm:text-xl'>Want to Buy?</h3>
                    <Link className='bg-cartcolor text-white text-sm sm:text-base font-bold py-2 rounded-md px-6 hoverbutton' to="/products">Go to Shop</Link>
                </div>
              }
        </div>
    );
};
export default Cart;