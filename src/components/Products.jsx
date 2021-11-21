import React from "react";

const Products = ({ items }) => {

    return (
        items.length === 0 ?
            <div className="mx-auto mt-6">
                <p className="text-sm text-center text-xs md:text-sm font-sans uppercase"> No items to show</p>
            </div> :
            <div className="grid gap-5 grid-cols-3 mt-5">
                {
                    items.map((item, index) => (
                        <div key={index} className="mx-auto">
                            <img src={item.node.thumbnailImage.file.url} width="w-1/2" height="h-1/2" alt="item" />
                            <div className="flex justify-between mt-3">
                                <p className="flex-shrink w-1/2 text-left text-xs md:text-sm break-normal font-sans uppercase justify-self-start">{item.node.name}</p>
                                <p className="text-right text-xs md:text-sm font-sans uppercase">€ {item.node.shopifyProductEu.variants?.edges[0].node.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
    );
};

export default Products;