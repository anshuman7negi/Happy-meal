import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom"

const Navbar = () => {

    const [isHamburgerClose, setIsHamburgerClose] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setIsHamburgerClose(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toogleHamburger = () => {
        setIsHamburgerClose(!isHamburgerClose);
    }

    return (
        <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 lg:px-10 md:px-8 py-3 font-semibold bg-gradient-to-r from-[#fff3de] via-[#fff8ee] to-[#f8e2bb] z-[99]">
            <h1 className="font-bold text-xl">
                <NavLink to="/">
                    Happy Meal
                </NavLink>
            </h1>

            <ul className={`sm:flex items-center gap-6 ${isHamburgerClose ? "bg-[#f8e2bb] rounded-md shadow-lg border-2 border-[#fff8ee] flex flex-col gap-8 pt-16 pl-8 w-3/5 fixed top-[9%] bottom-0 left-0 z-[99]" : "hidden"}`}>
                <li>
                    <NavLink to="/" className={({ isActive }) =>
                        `${isActive ? "text-white bg-green-500 " : "text-black"} px-6 py-2 rounded-tl-full rounded-br-full hover:bg-green-500`
                    }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/menu" className={({ isActive }) =>
                        `${isActive ? "text-white bg-green-500 " : "text-black"} px-6 py-2 rounded-tl-full rounded-br-full hover:bg-green-500`
                    }>
                        Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/recipes" className={({ isActive }) =>
                        `${isActive ? "text-white bg-green-500 " : "text-black"} px-6 py-2 rounded-tl-full rounded-br-full hover:bg-green-500`
                    }>
                        Recipes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) =>
                        `${isActive ? "text-white bg-green-500 " : "text-black"} px-6 py-2 rounded-tl-full rounded-br-full hover:bg-green-500`
                    }>
                        About
                    </NavLink>
                </li>
            </ul>

            <div className={`flex flex-col sm:hidden ${isHamburgerClose ? "gap-0" : "gap-2 "}`} onClick={toogleHamburger}>
                <div className={` h-1 w-10 rounded-full ${isHamburgerClose ? "rotate-[55deg] bg-red-600" : "bg-black"} `}></div>
                <div className={` h-1 w-10 rounded-full ${isHamburgerClose ? "rotate-[-45deg] bg-red-600" : "bg-black"} `}></div>
            </div>


            <button className="hidden sm:block ">
                <NavLink to="/login" className={({ isActive }) =>
                    `${isActive ? " bg-red-600 text-white px-6 py-2 rounded-tl-full rounded-br-full" : " border-red-600 border-2 hover:bg-red-600 hover:text-white  px-4 font-bold py-2 rounded-full"}  `
                }>
                    Login
                </NavLink>
            </button>
        </nav>
    )
}

export default Navbar;