import CategoryPageComponent from '@/components/CategoryPageComponent';
import { ICategory, IProduct } from '@/type';
import { notFound } from 'next/navigation';
import React from 'react'

const getCategoryData = async (catId: string): Promise<ICategory> => {
    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/categories/${catId}`);
    const data = await res.json();
    return data;
}

const getCategoryProducts = async (catId: string): Promise<IProduct[]> => {
    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${catId}`);
    const data = await res.json();
    return data;
}


const CategoryPage = async ({params}: {params: Promise<{catId: string}>}) => {

    const {catId} = await params;
    const catData = await getCategoryData(catId);
    if(catData.error) {
        notFound();
    }
    const products = await getCategoryProducts(catId);

    
  return (
    <CategoryPageComponent catData={catData} products={products}/>
  )
}

export default CategoryPage