import PropTypes from "prop-types";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router";

const Book = ({ book }) => {
    const { bookId, bookName, author, image, rating, category } = book;

    return (
        <Link to={`/details/${bookId}`}>
            <div className="border-2 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <div className="bg-gray-100 p-10 rounded-lg">
                    <img className="mx-auto h-40 object-contain" src={image} alt={bookName} />
                </div>

                <div className="p-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                        {category}
                    </p>

                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {bookName}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4">
                        By: <span className="font-medium">{author}</span>
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-700">
                        <p className="flex items-center gap-1">
                            <FcRating /> {rating}
                        </p>
                        <button className="bg-gradient-to-r from-green-500 to-lime-800 bg-clip-text text-transparent hover:underline text-sm">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.shape({
        bookId: PropTypes.string.isRequired,
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
    }).isRequired,
};

export default Book;
