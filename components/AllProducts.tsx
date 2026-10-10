import React from 'react'
import ProductCard from './ProductCard';
import { IProduct } from '@/type';
import { toBanglaNumber } from '@/lib/toBanglaNumber';

const fetchProducts = async (): Promise<IProduct[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data = await res.json();
  return data;
};

const AllProducts = async () => {

    const products = await fetchProducts();
    
  return (
    <div className='container mx-auto mb-10' id='সব-পণ্য'>
        <div className="flex flex-col gap-4">
            <h1 className='font-bold text-[20px]'>সব পণ্য</h1>
            <p className='text-[14px]'>মোট {toBanglaNumber(products.length)}টি পণ্য দেখানো হচ্ছে</p>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4'>
                {
                    products.map(product => <ProductCard product={product} key={product.id}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default AllProducts