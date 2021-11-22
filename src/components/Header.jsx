import React from 'react';
import { CATEGORIES } from '../constants/constants';

const Header = ({ showFilter, setShowFilter, filter, setFilter }) => {

    return (
        <div className="flex justify-between sm:items-end md:items-center my-6">
            <div className="mx-auto grid grid-cols-3 md:grid-cols-9 gap-3">
                {CATEGORIES.map(item => (
                    <button key={item.id} className={`${filter.category === item.title  ? 'bg-blue-500 text-white px-2':'text-xs font-sans uppercase'}`}
                        onClick={() => setFilter({ ...filter, category: item.title })}>
                        {item.title}
                    </button>
                ))}
            </div>
            <div>
                <button className="text-xs font-sans uppercase"
                    onClick={() => setShowFilter(!showFilter)}>Filters</button>
            </div>
        </div >
    )
}

export default Header;