import React, { useEffect } from 'react';
import Category from '../hooks/Category';

const Filter = () => {
    const { categories} = Category();
    console.log(categories)

    return (
        <div className='top-16 text-black left-0 absolute text-lg w-full mt-10 list-none flex gap-4 overflow-x-scroll no-scrollbar'>
            {categories.map((category) => (
                <div key={category.id} className='category-item hover:bg-gray-100 p-2 rounded-3xl ml-2'>
                    <button className='whitespace-nowrap overflow-hidden px-2'>
                        {category.cathegory}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Filter;
