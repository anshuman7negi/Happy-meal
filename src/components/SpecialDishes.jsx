import salad from '../assets/salad.svg'
import eggSalad from '../assets/Egg salad.svg'
import dishe1 from '../assets/dishe1.svg'

const SpecialDishes = () => {
    return(
        <section className="flex flex-col gap-5 px-8 py-8">
            <p className="text-[#FF6868] font-semibold tracking-widest">SPECIAL DISHES</p>
            <h3 className="text-lg sm:text-xl font-bold">Standout Dishes From Our Menu</h3>

            <div className="flex flex-col lg:flex-row gap-4 pt-8">
                <div className="p-8 flex flex-col shadow-lg border-2 rounded-3xl">
                    <img src={dishe1} alt="allo pata chat" className="w-full" />
                    <p className="font-bold mt-2 text-xl">Fattoush salad</p>
                    <p>Discription of the item</p>
                    <div className="flex justify-between items-center mt-3">
                        <p className="text-[#FF6868] font-bold">$ <span className="font-bold">24.00</span></p>
                        <p className="font-semibold">4.9</p>
                    </div>
                </div>

                <div className="p-8 flex flex-col shadow-lg border-2 rounded-3xl">
                    <img src={eggSalad} alt="allo pata chat" className="w-full" />
                    <p className="font-bold mt-2 text-xl">Fattoush salad</p>
                    <p>Discription of the item</p>
                    <div className="flex justify-between items-center mt-3">
                        <p className="text-[#FF6868] font-bold">$ <span className="font-bold">24.00</span></p>
                        <p className="font-semibold">4.9</p>
                    </div>
                </div>


                <div className="p-8 flex flex-col shadow-lg border-2 rounded-3xl">
                    <img src={salad} alt="allo pata chat" className="w-full" />
                    <p className="font-bold mt-2 text-xl">Fattoush salad</p>
                    <p>Discription of the item</p>
                    <div className="flex justify-between items-center mt-3">
                        <p className="text-[#FF6868] font-bold">$ <span className="font-bold">24.00</span></p>
                        <p className="font-semibold">4.9</p>
                    </div>
                </div>

                <div className="p-8 flex flex-col shadow-lg border-2 rounded-3xl">
                    <img src={eggSalad} alt="allo pata chat" className="w-full" />
                    <p className="font-bold mt-2 text-xl">Fattoush salad</p>
                    <p>Discription of the item</p>
                    <div className="flex justify-between items-center mt-3">
                        <p className="text-[#FF6868] font-bold">$ <span className="font-bold">24.00</span></p>
                        <p className="font-semibold">4.9</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialDishes;