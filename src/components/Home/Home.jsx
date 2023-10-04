import { useEffect, useState } from "react";
import CarCard from "../CarCard/CarCard";
import { BiSearch } from "react-icons/bi";
import Pagination from "../Pagination/Pagination";
import { useParams } from "react-router-dom";


const Home = () => {
    const [cars, setCars] = useState([]);
    const { id } = useParams();
    const [currentPage, setCurrentPage] = useState(parseInt(id));
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch('/cars.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])


    // pagination process
    const itemsPerPage = 6;
    const totalItems = cars.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        setSearchQuery("");
    };

    // Simulate fetching data for the current page
    const fetchItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        // filter by search query
        const filteredCars = cars.filter(car =>
            (car.brand || car.model).toLowerCase().includes(searchQuery.toLowerCase())
        );
        const items = filteredCars.slice(startIndex, endIndex);
        return items;

    };

    const currentPageItems = fetchItems();

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredCarCards = currentPageItems.map((car) => (
        <CarCard key={car.id} car={car} />
    ));

    const noResultsFound = filteredCarCards.length === 0;

    return (
        <div className="relative">
            <div className="p-5 bg-base-200 shadow-lg mx-12 rounded-xl ">
                <input type="text" placeholder="Search..."
                    className="p-2 rounded-xl w-72 pr-10"
                    onChange={handleSearchInputChange} />
                <div className="absolute top-[32px] left-[327px] text-lg">
                    <BiSearch />
                </div>
                <select name="" id="" className="ml-5 bg-transparent">
                    <option value="">Relevance</option>
                </select>
                <select name="" id="" className="ml-5 bg-transparent">
                    <option value="">All Brands</option>
                </select>
            </div>

            <div className="grid grid-cols-3 gap-5 p-12">
                {/* {
                    currentPageItems.map(car => <CarCard key={car.id} car={car} />)
                } */}
                {noResultsFound ? (
                    <p className=" text-red-500">No results found</p>
                ) : (
                    filteredCarCards
                )}
            </div>
            <div className={`p-12 ${noResultsFound ? "hidden" : "block"}`}>
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    onPageChange={onPageChange} />
            </div>
        </div>
    );
};

export default Home;