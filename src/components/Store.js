import React, {  useEffect } from 'react';
import { useSelector , useDispatch} from "react-redux"
import { fetchProducts } from '../redux/products/productsAction';
// components
import Product from './Product';
import Louder from './Louder';

const Store = () => {
    
    const productState = useSelector(state => state.productsState)
    const dispatch= useDispatch()
    useEffect(() => {
        if(!productState.products.length) dispatch(fetchProducts())
    } ,[])

    return (
                <div>
                { productState.Loading ? 
                  <Louder /> :
                   productState.error ?
                    <h2 className='text-center font-bold text-xl'>something went wrong</h2> :
                    <div  className='sm:grid flex flex-wrap justify-evenly sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-items-center px-4 lg:px-8 xl:px-20 gap-x-2'>
                    {productState.products.map(product =>
                         <Product 
                         key={product.id}
                          productData={product}
                         />)}
                         </div>
                }
            </div>
    );
};
export default Store;