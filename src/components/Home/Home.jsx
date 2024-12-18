import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto space-y-10">
                <Banner></Banner>
                <Books></Books>
            </div>
        </div>
    );
};

export default Home;