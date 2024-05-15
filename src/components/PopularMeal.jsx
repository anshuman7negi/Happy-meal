import mainDish from '../assets/mainDish.svg'
import breakfast from '../assets/breakfast.svg'
import dessert from '../assets/dessert.svg'
import juice from '../assets/juice.svg'

const PopularMeal = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-2 py-4 md:px-6">
            <p className="text-[#FF6868] font-semibold tracking-widest">CUSTOMER FAVORITES</p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-wider">Popular Catagories</h3>

            <div className="grid grid-cols-2 px-4 sm:px-0 md:flex gap-4 lg:gap-12 sm:gap-6 py-8">

                <div className="flex flex-col items-center justify-center p-4 lg:p-8 sm:p-6 gap-4 mt-4 border-2 shadow-lg rounded-3xl">
                    <img src={mainDish} alt="" className="min-w-[100px] min-h-[100px] sm:w-[150px] sm:h-[150px] bg-[#C1F1C6] p-1 sm:p-2 rounded-full" loading="lazy"/>
                    <p className="font-bold">Main Dish <br /> <span className="font-light"> (86 dishes)</span></p>
                </div>

                <div className="flex flex-col items-center justify-center p-4 lg:p-8 sm:p-6 gap-4 mt-4 border-2 shadow-lg rounded-3xl">
                    <img src={breakfast} alt="" className="min-w-[100px] min-h-[100px] sm:w-[150px] sm:h-[150px] bg-[#C1F1C6] p-1 sm:p-2 rounded-full" loading="lazy"/>
                    <p className="font-bold">Breakfast <br /> <span className="font-light"> (86 dishes)</span></p>
                </div>

                <div className="flex flex-col items-center justify-center p-4 lg:p-8 sm:p-6 gap-4 mt-4 border-2 shadow-lg rounded-3xl">
                    <img src={dessert} alt="" className="min-w-[100px] min-h-[100px] sm:w-[150px] sm:h-[150px] bg-[#C1F1C6] p-1 sm:p-2 rounded-full" loading="lazy"/>
                    <p className="font-bold">Dessert <br /> <span className="font-light"> (86 dishes)</span></p>
                </div>

                <div className="flex flex-col items-center justify-center p-4 lg:p-8 sm:p-6 gap-4 mt-4 border-2 shadow-lg rounded-3xl">
                    <img src={juice} alt="" className="min-w-[100px] min-h-[100px] sm:w-[150px] sm:h-[150px] bg-[#C1F1C6] p-1 sm:p-2 rounded-full" loading="lazy"/>
                    <p className="font-bold">Drinks <br /> <span className="font-light"> (86 dishes)</span></p>
                </div>
            </div>
        </section>
    )
}

export default PopularMeal;