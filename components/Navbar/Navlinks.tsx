import { ICategory } from '@/type';
import NavLinksDisplay from './NavLinksDisplay';

const fetchCategories = async (): Promise<ICategory[]> => {
  const res  = await fetch("https://api.abcz.workers.dev/api/bazardor/categories");
  const data = await res.json();
  return data;
}

const Navlinks = async () => {

  const categories = await fetchCategories();
  
  
  return (
    <NavLinksDisplay categories={categories} />
  )
}

export default Navlinks;