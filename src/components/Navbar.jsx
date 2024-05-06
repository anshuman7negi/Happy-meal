

const Navbar = () =>{
    return(
        <nav className="flex justify-between items-center px-10 py-3 font-semibold bg-gradient-to-r from-[#fff3de] via-[#fff8ee] to-[#f8e2bb]">
            <p>Happy Meal</p>
            <ul className="flex items-center gap-6">
                <li>Home</li>
                <li>OurMenu</li>
                <li>Foods</li>
                <li>About Us</li>
            </ul>

            <button className="text-red-600 border-red-600 border-2 hover:bg-red-600 hover:text-white px-4 font-bold py-2 rounded-full">Login</button>
        </nav>
    )
}

export default Navbar;