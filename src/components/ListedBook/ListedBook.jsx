import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IoIosArrowDown } from "react-icons/io";


const ListedBook = () => {
    const [tabIndex, setTabIndex] = useState(0);
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
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBook;