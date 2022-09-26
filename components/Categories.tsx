import React, { useEffect, useState } from 'react';
import { getCategories } from '../services';
import { Category } from '../services/dto';
import Link from 'next/link';

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
      getCategories().then(res => setCategories(res.categories));
    }, []);

    return (
        <div className="mb-16">
            <h3 className="text-white text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
            {categories.map(category => <Link key={category.name} href={`/category/${category.slug}`}>
              <div className="transition duration-200 hover:text-blue-500 text-white text-base pb-4 cursor-pointer">{category.name}</div>
            </Link>)}
        </div>
    );
};

export default Categories;
