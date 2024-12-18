import { NavLink } from "react-router";

const Navbar = () => {
    const links = <div className="md:flex gap-5 font-semibold">
        <NavLink to='/'><li><a>Home</a></li></NavLink>
        <NavLink to='/listed'><li><a>Listed Books</a></li></NavLink>
        <NavLink to='/read'><li><a>Page To Read</a></li></NavLink>
    </div>

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
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-5">
                <a className="btn bg-gradient-to-r from-green-500 to-lime-400">Sing In</a>
                <a className="btn border-green-500">Sing Up</a>
            </div>
        </div>
    );
};

export default Navbar;