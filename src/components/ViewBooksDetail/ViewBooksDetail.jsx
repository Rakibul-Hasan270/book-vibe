import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ReadBook from "../ReadBook/ReadBook";
import DetailsBook from "../DetailsBook/DetailsBook";

const ViewBooksDetail = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId);

    const [book, setBook] = useState([]);

    useEffect(() => {
        if (books.length > 0) {
            const existBook = books.filter(book => book.bookId === idInt);
            setBook(existBook);
        }
    }, [books]);

    return (
        <div>
            {
                book.map(book => <DetailsBook key={book.bookId} book={book}></DetailsBook>)
            }
        </div>
    );
};

export default ViewBooksDetail;
