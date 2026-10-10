import CategoryPageComponent from '@/components/CategoryPageComponent';
import { ICategory, IProduct } from '@/type';
import React from 'react'

const getCategoryData = async (catSlug: string): Promise<ICategory> => {
    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/categories/${catSlug}`);
    const data = await res.json();
    return data;
}

const getCategoryProducts = async (catSlug: string): Promise<IProduct[]> => {
    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${catSlug}`);
    const data = await res.json();
    return data;
}


const CategoryPage = async ({params}: {params: Promise<{catSlug: string}>}) => {

    const {catSlug} = await params;
    const catData = await getCategoryData(catSlug);
    const products = await getCategoryProducts(catSlug);
    
  return (
    <CategoryPageComponent catData={catData} products={products}/>
  )
}

export default CategoryPage