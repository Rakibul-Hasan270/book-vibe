import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from 'react-router';
import { getStoredCardRead, getStoredCardWish } from '../../Utility/LocalStorage';
import ReadBook from '../ReadBook/ReadBook';
import WishBook from '../WishBook/WishBook';


const ListedBook = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const books = useLoaderData();

    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        if (books.length) {
            const readLocalStg = getStoredCardRead();
            const wishLocalStg = getStoredCardWish();
            const readBookList = books.filter(book => readLocalStg.includes(book.bookId));
            const WishBookList = books.filter(book => wishLocalStg.includes(book.bookId));

            setReadList(readBookList);
            setWishList(WishBookList);
        }
    }, [books]);


    return (
        <div className='max-w-7xl mx-auto mt-20'>
            <h3 className='text-center text-4xl font-bold mb-10'>Books</h3>
            <div className='flex justify-center items-center gap-3 bg-gradient-to-r from-green-500 to-lime-400 cursor-pointer mb-8 md:w-1/12 mx-auto py-1 rounded-md'>
                <p className=''>sort by</p>
                <IoIosArrowDown className='mt-1' />
            </div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>
                    <h3>read</h3>
                    {
                        readList.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                    }
                </TabPanel>
                <TabPanel>
                    <h3>wish</h3>
                    {
                        wishList.map(book => <WishBook key={book.bookId} book={book}></WishBook>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBook;