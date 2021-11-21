import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center space-x-2 space-y-5 animate-pulse">
            <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
            <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
            <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
        </div>
    )
}

export default Loader;