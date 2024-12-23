import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineGroupAdd, MdInsertPageBreak } from "react-icons/md";

const ReadBook = ({ book }) => {
    const { image, bookName, author, tags, publisher, totalPages, category, rating, yearOfPublishing } = book;

    return (
        <div className="flex flex-col md:flex-row gap-6 bg-white shadow-lg rounded-lg overflow-hidden border mb-3">
            <div className="p-6 bg-gray-100 flex items-center justify-center md:w-1/3">
                <img src={image} alt={bookName} className="max-w-full h-auto rounded-md" />
            </div>

            <div className="p-6 flex flex-col justify-between md:w-2/3">
                <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-gray-800 font-serif">{bookName}</h3>
                    <p className="text-lg text-gray-600 font-medium">By: <span className="font-semibold">{author}</span></p>
                </div>

                <div className="flex flex-wrap gap-4 mt-4 text-gray-700">
                    <div className="flex items-center">
                        <span className="font-semibold">Tags:</span>
                        <div className="ml-2 space-x-2">
                            {tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="text-green-600 bg-green-100 px-2 py-1 text-sm rounded-md"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoLocationOutline className="text-gray-500" />
                        <span>Year of Publishing: <span className="font-semibold">{yearOfPublishing}</span></span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-4 text-gray-700 border-b pb-4">
                    <div className="flex items-center gap-2">
                        <MdOutlineGroupAdd className="text-gray-500" />
                        <span>Publisher: <span className="font-semibold">{publisher}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdInsertPageBreak className="text-gray-500" />
                        <span>Pages: <span className="font-semibold">{totalPages}</span></span>
                    </div>
                </div>

                <div className="mt-4 text-gray-700">
                    <p className="text-lg">
                        Category: <span className="font-semibold text-gray-600">{category}</span>
                    </p>
                    <p className="text-lg">
                        Rating: <span className="font-semibold text-yellow-500">{rating}</span>
                    </p>
                </div>

                <div className="mt-6">
                    <button className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

ReadBook.propTypes = {
    book: PropTypes.shape({
        image: PropTypes.string.isRequired,
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        publisher: PropTypes.string.isRequired,
        totalPages: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        yearOfPublishing: PropTypes.number.isRequired,
    }).isRequired,
};

export default ReadBook;
