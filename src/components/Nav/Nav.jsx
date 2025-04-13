import { FaRegUserCircle } from "react-icons/fa";

const Nav = () => {
    return (
        <div className="container mx-auto mt-2">
            <div className="navbar bg-base-100 font-lexend">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl ">Chef&apos;s Table</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <input type="text" placeholder={`🔍 Search`} className="input input-bordered w-full max-w-xs rounded-3xl hidden md:block" />
                    <input type="text" placeholder={`🔍`} className="input input-bordered w-4/12  rounded-3xl md:hidden" />
                    <a className="btn bg-green-400 btn-circle text-3xl"><FaRegUserCircle /></a>
                </div>
            </div>
        </div>
    );
};

export default Nav;