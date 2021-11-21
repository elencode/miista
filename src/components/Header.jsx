import React from 'react';
import { CATEGORIES } from '../constants/constants';

const Header = ({ showFilter, setShowFilter }) => {
    return (
        <div className="flex justify-between items-center my-6">
            <ul className="mx-auto grid grid-cols-3 md:grid-cols-12 gap-3">
                {CATEGORIES.map(item => (
                    <li key={item.id}>
                        <a href="#" className="text-xs font-sans uppercase"
                            onClick={() => { }}>{item.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div>
                <button className="text-xs font-sans uppercase"
                    onClick={() => setShowFilter(!showFilter)}>Filters</button>
            </div>
        </div>
    )
}

export default Header;