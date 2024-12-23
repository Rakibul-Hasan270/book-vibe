import { Link } from "react-router";

const Banner = () => {
    return (
        <section className="hero bg-base-200 rounded-xl py-10 px-6 shadow-lg">
            <div className="flex flex-col items-center lg:flex-row-reverse lg:items-center lg:gap-10">
                <figure className="max-w-sm">
                    <img
                        src="https://i.postimg.cc/mkgGswyT/pngwing-1-1.png"
                        alt="Bookshelf illustration"
                        className="w-full h-auto rounded-lg"
                    />
                </figure>
                <div className="text-center lg:text-left lg:max-w-lg">
                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                        Books to freshen up <br className="hidden lg:block" /> <span className="bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent">your bookshelf</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Discover a curated selection of books that will inspire, educate,
                        and entertain. Perfect for any readers taste.
                    </p>
                    <Link to='/listedBook'>
                        <button className="btn bg-gradient-to-r from-green-500 to-lime-400  px-8 py-3 text-lg font-medium shadow-md">
                            View The List
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;
