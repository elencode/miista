import React from 'react';
import { COLORS } from '../constants/constants';

const Filter = ({ filter, setFilter, applyFilter, clearFilter }) => {

    return (
        <div className="bg-gray-100 w-1/3 absolute right-5 p-4 rounded">
            <div className="flex gap-3 items-center justify-end mt-1 mb-3">
                <p className="text-xs md:text-sm font-sans uppercase">Clear Filter</p>
                <button onClick={clearFilter}>x</button>
            </div>
            <div className="flex gap-3 mt-5">
                <p className="text-xs md:text-sm font-sans uppercase">Colour</p>
                <ul className="flex space-x-2">
                    {COLORS.map(item => (
                        <button key={item.idColor} className={`rounded-full border w-5 h-5 ${item.value === 'black' || item.value === 'white' ? `bg-${item.value}` : `bg-${item.value}-500`}`}
                            onClick={() => setFilter({ ...filter, color: item.label })}>
                        </button>
                    ))}
                </ul>
            </div>
            <div className="flex gap-3 mt-5 items-center">
                <p className="text-xs md:text-sm font-sans uppercase">Price</p>
                <div className="flex space-x-3">
                    <input type="text" name='priceFrom' id='priceFrom' className="form-input w-32 border-0 p-2 rounded" placeholder="Price from" value={filter.priceFrom} onChange={(e) => { if (e.target.value >= 0) setFilter({ ...filter, priceFrom: e.target.value }) }} />
                    <input type="text" name='priceTo' id='priceTo' className="form-input w-32 border-0 p-2 rounded" placeholder="Price to" value={filter.priceTo} onChange={(e) => { if (e.target.value >= 0) setFilter({ ...filter, priceTo: e.target.value }) }} />
                </div>
            </div>
            <div className="flex items-start justify-end mb-3 mt-6">
                <button className="bg-gray-500 rounded text-white px-6 py-1"
                    onClick={applyFilter}>Apply</button>
            </div>
        </div>
    )
}

export default Filter;