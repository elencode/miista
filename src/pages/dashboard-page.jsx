import React, { useEffect, useState } from "react";
import { useMiistaService as MiistaService } from '../services/miista-service';
import Loader from '../components/Loader';
import Products from "../components/Products";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Filter from "../components/Filter";

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

    // show filter
    const [showFilter, setShowFilter] = useState(false);
    const [filter, setFilter] = useState({
        category: 'All',
        color: '',
        priceFrom: '',
        priceTo: ''
    })

    const fetchData = async () => {
        setLoading(true);
        const { data } = await miistaService.loadOptions();
        if (filter.category !== 'All') {
            setCurrentPage(1);
            let array = data.allContentfulProductPage.edges.filter(product => {
                return (product.node?.name?.includes(filter.category))
            })
            if (filter.color !== '') {
                setItems(array.filter(item => item.node?.colorFamily?.map(item => item.name)?.includes(filter.color)));
            } else setItems(array)
        }
        else if (filter.color !== '') {
            setItems(data.allContentfulProductPage.edges.filter(product => {
                return (!product.node.categoryTags?.includes('Bags')
                    && !product.node.name?.includes('Phone Consultation') && (filter.color !== '' && product.node?.colorFamily?.map(item => item.name)?.includes(filter.color)))
            }))
        }
        else setItems(data.allContentfulProductPage.edges.filter(product => {
            return (!product.node.categoryTags?.includes('Bags')
                && !product.node.name?.includes('Phone Consultation'))
        }))
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [filter.category]);

    //change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const applyFilter = () => {
        setItems(items.filter(product => {
            return product.node?.colorFamily?.map(item => item.name)?.includes(filter.color)
        }))
        // setItems(items.filter(product => {
        //     return (product.node?.shopifyProductEu.variants.edges[0].node.price >= filter.priceFrom
        //         && product.node?.shopifyProductEu.variants.edges[0].node.price <= filter.priceTo)
        // }))
        setShowFilter(!showFilter);
    }

    const clearFilter = () => {
        setFilter({ ...filter, color: '', priceFrom: '', priceTo: '' });
        setShowFilter(!showFilter);
    }

    return (
        <div className="container mx-auto">
            <Header
                showFilter={showFilter}
                setShowFilter={setShowFilter}
                filter={filter}
                setFilter={setFilter}
                items={items}
                setItems={setItems}
            />

            {showFilter &&
                <Filter
                    items={items}
                    setItems={setItems}
                    showFilter={showFilter}
                    setShowFilter={setShowFilter}
                    filter={filter}
                    setFilter={setFilter}
                    applyFilter={applyFilter}
                    clearFilter={clearFilter}
                />}

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