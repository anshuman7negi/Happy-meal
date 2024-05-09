import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-4 lg:px-10 md:px-8 py-3 font-semibold bg-gradient-to-r from-[#fff3de] via-[#fff8ee] to-[#f8e2bb]">
            <p className="font-bold text-xl">Happy Meal</p>
            <ul className="hidden sm:flex items-center gap-6">
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

            <button className=" ">
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