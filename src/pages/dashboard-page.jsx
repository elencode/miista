import React, { useEffect, useState } from "react";
import Loader from '../components/Loader';
import Products from "../components/Products";
import Pagination from "../components/Pagination";
import { useMiistaService as MiistaService } from '../services/miista-service';
import { data } from '../services/miista-export.json';

const DashboardPage = () => {
    const [miistaService] = MiistaService();

    //display items
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
   
    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(30)

    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentItems = items.slice(indexOfFirstPost, indexOfLastPost)

    const fetchData = async () => {
        setLoading(true);
        const { data } = await miistaService.loadOptions();
        setItems(data.allContentfulProductPage.edges.filter(product => {
            return !product.node.categoryTags?.includes('Bags')
                && !product.node.name?.includes('Phone Consultation')
        }))
        setLoading(false);
    }

    useEffect(() => {
        fetchData()
    }, []);

    //change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div className="container mx-auto">
            {loading ?
                <Loader /> :
                <Products
                    items={currentItems}
                />
            }
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={items.length}
                paginate={paginate}
                currentPage={currentPage}
                currentItems={currentItems}
            />
        </div>
    );
}

export default DashboardPage;