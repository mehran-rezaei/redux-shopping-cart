import React from 'react';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';
// icons
import cart from "../icons/cart.svg"

const Navbar = () => {
    const  state  = useSelector(state => state.cartState)
    return (
        <div className='flex justify-between items-center px-10 sm:px-20 py-4 sm:py-4 shadow-xl mb-16 '>
            <div className='text-cartcolor  font-bold text-xl sm:text-2xl hover:text-blue-800  transition ease-in duration-100'>
                <Link to="/products">Products</Link>
            </div>
            <Link to='/cart' className='relative'>
                 <img src={cart} className='w-8 sm:w-10 cartcolor' alt="cart"/>
                 <span className='absolute top-0 right-0 bg-[#0b499b] text-white rounded-full text-xs font-bold h-4 w-4 sm:h-5 sm:w-5  flex items-center justify-center'>{state.itemsCounter}</span>
            </Link>
        </div>
    );
};
export default Navbar;