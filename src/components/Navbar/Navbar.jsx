import { NavLink } from "react-router";

const Navbar = () => {
    const links = (
        <div className="md:flex gap-5 font-semibold">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-3 py-2 rounded-lg ${isActive ? "bg-gradient-to-r from-green-500 to-lime-400 text-white" : "hover:text-green-500"
                        }`
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/listedBook"
                    className={({ isActive }) =>
                        `px-3 py-2 rounded-lg ${isActive ? "bg-gradient-to-r from-green-500 to-lime-400 text-white" : "hover:text-green-500"
                        }`
                    }
                >
                    Listed Books
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/read"
                    className={({ isActive }) =>
                        `px-3 py-2 rounded-lg ${isActive ? "bg-gradient-to-r from-green-500 to-lime-400 text-white" : "hover:text-green-500"
                        }`
                    }
                >
                    Page To Read
                </NavLink>
            </li>
        </div>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end space-x-5">
                <a className="btn bg-gradient-to-r from-green-500 to-lime-400">Sign In</a>
                <a className="btn border-green-500">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;
