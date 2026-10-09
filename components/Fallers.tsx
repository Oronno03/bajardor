import React from 'react'
import ProductCard from './ProductCard';
import { IProduct } from '@/type';

const fetchProducts = async (): Promise<IProduct[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data = await res.json();
  return data;
};

const Fallers = async () => {

    let products = await fetchProducts();
    products =  products.filter(p => p.change.dir === "down").sort((a, b) => b.change.pct - a.change.pct).slice(0, 6);
    
  return (
    <div className='container mx-auto mb-10'>
        <div className="flex flex-col gap-4">
            <h1 className='font-bold text-[20px]'><span className='text-success'>▼</span> আজ দাম কমেছে</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    products.map(product => <ProductCard product={product} key={product.id}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default Fallers