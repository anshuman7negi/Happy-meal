import { useState } from 'react';
import mainDish from '../assets/homemeal.svg'

const Signup = () => {

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block absolute bg bg-red-600 w-1/5 top-0 left-0 bottom-0">
                <p className="absolute tracking-widest top-[10%] left-[25%] text-white font-bold text-2xl">Happy Meal</p>
                <img src={mainDish} alt="" className="absolute right-[-50%] top-1/3" />
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center border-2 w-4/5 h-[60%] md:w-2/5 md:h-3/5 rounded-lg md:ml-[18rem] shadow-lg">

                <input type="text" name='userName' value={formData.userName} onChange={handleChange} placeholder="UserName*" className="min-w-64 border-2 px-3 py-2 rounded-lg shadow-lg w-2/4 border-gray-400" />

                <input type="email" name='email' placeholder="Email*" value={formData.email} onChange={handleChange} className="min-w-64 border-2 px-3 py-2 rounded-lg shadow-lg w-2/4 border-gray-400" />

                <input type="password" name='password' placeholder='Password*' value={formData.password} onChange={handleChange} className="min-w-64 border-2 px-3 py-2 rounded-lg shadow-lg w-2/4 border-gray-400" />

                <button type="submit" className="text-red-600 font-bold border-red-600 mt-8 hover:text-white hover:bg-red-600 border-2 px-6 py-1 rounded-full shadow-lg">Join Us Now !</button>

            </form>
        </div>
    )
}

export default Signup;