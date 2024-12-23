import PropTypes from "prop-types";
import { useNavigate } from "react-router";

const DetailsBook = ({ book }) => {
    const navigate = useNavigate();

    const { bookId, image, bookName, author, tags, publisher, totalPages, category, rating, yearOfPublishing } = book;

    return (
        <div className="max-w-4xl mx-auto my-8 p-6 border rounded-lg shadow-lg bg-white">

            <div className="flex flex-col md:flex-row items-start gap-6">
                <img
                    src={image}
                    alt={bookName}
                    className="w-full md:w-36 h-auto md:h-48 object-cover rounded-lg shadow-md"
                />
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800">{bookName}</h2>
                    <p className="text-lg text-gray-600 mt-1">by {author}</p>
                    <p className="text-sm text-gray-500 mt-2">
                        <span className="font-semibold">Category:</span> {category}
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold">Rating:</span> {rating} / 5
                    </p>
                </div>
            </div>

            <div className="mt-6 space-y-3 text-gray-700">
                <p>
                    <span className="font-semibold">Publisher:</span> {publisher}
                </p>
                <p>
                    <span className="font-semibold">Year of Publishing:</span> {yearOfPublishing}
                </p>
                <p>
                    <span className="font-semibold">Total Pages:</span> {totalPages}
                </p>
                <p>
                    <span className="font-semibold">Tags:</span>{" "}
                    {tags?.length > 0 ? tags.join(", ") : "No tags available"}
                </p>
                <p>
                    <span className="font-semibold">Book ID:</span> {bookId}
                </p>
            </div>
            <div className="mt-4 flex justify-center items-center">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                >
                    &larr; Back
                </button>
            </div>
        </div>
    );
};

DetailsBook.propTypes = {
    book: PropTypes.shape({
        bookId: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
        publisher: PropTypes.string.isRequired,
        totalPages: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        yearOfPublishing: PropTypes.number.isRequired,
    }).isRequired,
};

export default DetailsBook;
