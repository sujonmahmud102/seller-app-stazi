import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";


const Pagination = ({ currentPage, setCurrentPage, totalPages, onPageChange, totalItems }) => {
    const pageNumbers = [];
    const navigate = useNavigate();
    const { id } = useParams();


    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }


    const handlePageChange = (page) => {
        onPageChange(page);
        navigate(`/page/${page}`);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            navigate(`/page/${currentPage - 1}`);
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            navigate(`/page/${currentPage + 1}`);
        }
    }


    return (
        <div className=" bg-blue-100 shadow-lg rounded-xl w-full flex items-center justify-between p-5">
            <div>
                <p>({(currentPage - 1) * 6 + 1}-{Math.min(currentPage * 6, totalItems)} from {totalItems})</p>
            </div>
            <div className="flex gap-4">
                <button
                    onClick={() => handlePrevPage()}
                    className={`bg-white px-2 hover:bg-red-200 shadow-md rounded-lg ${currentPage == 1 ? "hidden" : ""}`}> <BsArrowLeft /> </button>

                {
                    pageNumbers.map((number) => (
                        <button
                            key={number}
                            onClick={() => handlePageChange(number)}
                            className={`hover:bg-red-200 px-2 shadow-md rounded-lg ${id == number ? "bg-red-400 text-white" : "bg-white"}`}
                        >
                            {number}
                        </button>
                    ))
                }

                <button
                    onClick={() => handleNextPage()}
                    className={`bg-white hover:bg-red-200 px-2 shadow-md rounded-lg ${currentPage === pageNumbers.at(-1) ? "hidden" : ""}`}> <BsArrowRight /> </button>
            </div>
        </div>
    );
};

export default Pagination;
