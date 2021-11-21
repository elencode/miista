import React from "react";

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate, currentItems }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-between items-center my-6">
            <div className="mx-auto flex justify-center gap-3">
                <a href="#" className="px-3 py-1 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white w-32"
                    onClick={() => {
                        if (currentPage > 1) {
                            paginate(currentPage - 1)
                        }
                    }}
                >
                    Previous
                </a>
                <ul className="flex pl-0 rounded list-none flex-wrap">
                    {pageNumbers?.map((number, index) => (
                        <li key={index} className="my-2">
                            <a href="#" className={currentPage === number
                                ? "px-3 py-2 mx-1 text-white bg-blue-400 rounded-md"
                                : "px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"}
                                onClick={() => paginate(number)}
                            >
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
                <a href="#" className="px-3 py-1 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white w-32"
                    onClick={() => {
                        if (currentPage <= pageNumbers.length - 1)
                            paginate(currentPage + 1)
                    }}
                >
                    Next
                </a>
            </div>
            <div>
                <p className="text-xs md:text-sm font-sans justify-self-start font-size-2 px-3">{currentPage === pageNumbers.length ? totalItems : itemsPerPage * currentPage} of {totalItems} items</p>
            </div>
        </div>
    );
};

export default Pagination;