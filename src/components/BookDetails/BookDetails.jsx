import { useLoaderData, useParams, useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { saveToLocalStgRead, saveToLocalStgWish } from "../../Utility/LocalStorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();
    const idInt = parseInt(id);

    const [readClicked, setReadClicked] = useState(false);
    const [wishlistClicked, setWishlistClicked] = useState(false);

    const book = books.find((book) => book.bookId === idInt);

    const { bookName, author, image, rating, category, review, totalPages, publisher, yearOfPublishing } = book;

    const handleReadClick = () => {
        if (wishlistClicked) {
            toast.warn('You have already added this book to Wishlist!');
        } else {
            saveToLocalStgRead(idInt);
            if (readClicked) {
                toast.warn('You already clicked the Read button!');
            } else {
                setReadClicked(true);
                toast.success('Book Added To Read List');
            }
        }
    };

    const handleWishlistClick = () => {
        saveToLocalStgWish(idInt);
        if (wishlistClicked) {
            toast.warn('You already clicked the Wishlist button!');
        } else {
            setWishlistClicked(true);
            toast.success('Book Added To Wishlist');
        }
    };

    return (
        <div className="max-w-7xl mx-auto mt-10 p-5">

            <div className="flex justify-end">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-lime-400 text-white px-4 py-2 rounded-lg shadow-md transition-all"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back
                </button>
            </div>

            <h3 className="text-center text-3xl font-bold text-gray-800 font-mono mb-6">
                Book Details: <span className="text-blue-600">{bookName}</span>
            </h3>

            <div className="md:grid md:grid-cols-2 gap-10 items-center bg-white shadow-lg rounded-lg p-6">
                <div className="flex justify-center h-full">
                    <img
                        src={image}
                        alt={bookName}
                        className="rounded-lg transition-transform transform hover:scale-105"
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-4xl font-bold text-gray-900">{bookName}</h3>

                    <p className="text-lg text-gray-600 border-b-2 pb-3">
                        By: <span className="font-semibold text-gray-800">{author}</span>
                    </p>

                    <p className="text-sm uppercase font-semibold text-blue-600 bg-blue-100 px-3 py-1 inline-block rounded-lg">
                        {category}
                    </p>

                    <p className="text-gray-700">
                        <span className="font-bold text-gray-900">Review:</span> {review}
                    </p>

                    <div className="text-gray-800 space-y-2">
                        <p>
                            <span className="font-bold">Total Pages:</span> {totalPages}
                        </p>
                        <p>
                            <span className="font-bold">Publisher:</span> {publisher}
                        </p>
                        <p>
                            <span className="font-bold">Year of Publishing:</span> {yearOfPublishing}
                        </p>
                        <p>
                            <span className="font-bold">Rating:</span>{" "}
                            <span className="text-yellow-500">{rating} / 5</span>
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={handleReadClick}
                                className="btn border-green-600"
                            >
                                Read
                            </button>
                            <button
                                onClick={handleWishlistClick}
                                className="btn bg-gradient-to-r from-green-500 to-lime-400"
                            >
                                Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;
