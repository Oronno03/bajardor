import { ICategory } from '@/type';
import Link from 'next/link';

const fetchCategories = async (): Promise<ICategory[]> => {
  const res  = await fetch("https://api.abcz.workers.dev/api/bazardor/categories");
  const data = await res.json();
  return data;
}

const Navlinks = async () => {

  const categories = await fetchCategories();
  
  
  return (
    <div className='px-4 py-2 gap-5 flex'>
      {
        categories.map(cat => (
          <Link href={`/category/${cat.slug}`} key={cat.id}>
            {cat.icon} {cat.nameBn}
          </Link>
        ))
      }
    </div>
  )
}

export default Navlinks