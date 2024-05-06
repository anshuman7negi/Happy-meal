import mainDish from '../assets/mainDish.svg'
import breakfast from '../assets/breakfast.svg'
import dessert from '../assets/dessert.svg'
import juice from '../assets/juice.svg'

const PopularMeal = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-2 py-4">
            <p className="text-[#FF6868] font-semibold tracking-widest">CUSTOMER FAVORITES</p>
            <h3 className="text-3xl font-bold tracking-wider">Popular Catagories</h3>

            <div className="flex gap-12 py-8">
                <div className="flex flex-col items-center p-8 gap-4 mt-4 border-2 shadow-lg rounded-3xl">
                    <img src={mainDish} alt="" className="w-[150px] h-[150px] bg-[#C1F1C6] p-2 rounded-full"/>
                    <p className="font-bold">Main Dish <br /> <span className="font-light"> (86 dishes)</span></p>
                </div>

                <div className="flex flex-col items-center p-8 gap-4 mt-4 border-2 shadow-lg rounded-3xl">
                    <img src={breakfast} alt="" className="w-[150px] h-[150px] bg-[#C1F1C6] p-2 rounded-full" />
                    <p className="font-bold">Break Fast <br /> <span className="font-light"> (12 dishes)</span></p>
                </div>

                <div className="flex flex-col items-center p-8 gap-4 mt-4 border-2 shadow-lg rounded-3xl">
                    <img src={dessert} alt="" className="w-[150px] h-[150px] bg-[#C1F1C6] p-2 rounded-full" />
                    <p className="font-bold">Dessert <br /> <span className="font-light"> (44 dishes)</span></p>
                </div>

                <div className="flex flex-col items-center p-8 gap-4 mt-4 border-2 shadow-lg rounded-3xl">
                    <img src={juice} alt="" className="w-[150px] h-[150px] bg-[#C1F1C6] p-2 rounded-full" />
                    <p className="font-bold">Juice <br /> <span className="font-light"> (60 dishes)</span></p>
                </div>
            </div>
        </section>
    )
}

export default PopularMeal;