import mainDish from '../assets/homemeal.svg'
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="absolute bg bg-red-600 w-1/5 top-0 left-0 bottom-0">
                <p className="absolute tracking-widest top-[10%] left-[25%] text-white font-bold text-2xl">Happy Meal</p>
                <img src={mainDish} alt="" className="absolute right-[-50%] top-1/3" />
            </div>
            <form className="flex flex-col gap-4 items-center justify-center border-2 w-2/5 h-2/5 rounded-lg ml-[18rem] shadow-lg">
                
                <input type="text"  placeholder="Email*" className="min-w-64 border-2 px-3 py-2 rounded-lg shadow-lg w-2/4 border-gray-400" />

                <input type="password" placeholder='Password*' className="min-w-64 border-2 px-3 py-2 rounded-lg shadow-lg w-2/4 border-gray-400" />

                <button className="text-red-600 font-bold border-red-600 hover:text-white hover:bg-red-600 border-2 px-6 py-1 rounded-full shadow-lg">Login</button>

                <NavLink to="/signup" className="underline font-bold">
                    Sign Up
                </NavLink>

            </form>
        </div>
    )
}

export default Login;