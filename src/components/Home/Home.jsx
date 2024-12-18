import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto space-y-10">
                <Banner></Banner>
                <Books></Books>
            </div>
        </div>
    );
};

export default Home;