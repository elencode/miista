import React, { useEffect, useState } from "react";
import Loader from '../components/Loader';
import Products from "../components/Products";
import { data } from '../services/miista-export.json';


const DashboardPage = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    const fetchData = () => {
        setLoading(true);
        const products = data.allContentfulProductPage.edges.filter(product => !product.node.categoryTags?.includes('Bags'));
        setItems(products)
        setLoading(false);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="container mx-auto">
            {loading ?
                <Loader /> :
                <Products
                    items={items}
                />
            }
        </div>
    );
}

export default DashboardPage;