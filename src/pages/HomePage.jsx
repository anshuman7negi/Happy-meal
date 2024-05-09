import meal from '../assets/homemeal.svg'
import '../index.css'
import leave1 from '../assets/leave1.svg'
import leave2 from '../assets/leave2.svg'
import leave3 from '../assets/leave3.svg'
import leave4 from '../assets/leave4.svg'
import PopularMeal from '../components/PopularMeal'
import SpecialDishes from '../components/SpecialDishes'
import Journey from '../components/Journey'

const HomePage = () => {
    return (
        <>
            <div className="grid md:grid-cols-2 py-6 bg-gradient-to-r from-[#fff3de] to-[#fff8ee] relative">
                <div className="flex flex-col items-center justify-center pl-6 gap-12">
                    <p className="text-3xl lg:text-6xl font-bold sm:text-4xl">
                        it’s not just
                        <span className="bg-[#e18904] text-white rounded-full ml-2 px-4"> food</span><br />it’s an
                        experience
                    </p>
                    <button className="font-semibold bg-red-600 text-white px-6 py-3 rounded-full">Order Now</button>
                </div>
                <div className="relative flex items-center justify-center z-50">
                    <img src={meal} alt="jeera rice" className="w-4/5 h-4/5 pt-6 z-50" />
                    <img src={leave1} alt="leaves" className="absolute leave1 z-20" />
                    <img src={leave2} alt="leaves" className="absolute z-20 leave2" />
                    <img src={leave4} alt="leaves" className="absolute z-20 leave4" />
                </div>
                <img src={leave3} alt="leaves" className="absolute z-20 leave3 w-1/2 md:w-1/4" />
            </div>
            <PopularMeal />
            <SpecialDishes />
            <Journey />
        </>
    )
}


export default HomePage;