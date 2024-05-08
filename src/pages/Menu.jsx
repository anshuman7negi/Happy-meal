import egg from '../assets/egg.svg'

const Menu = () => {
    return (
        <section className="flex flex-col gap-12">
            <div className="flex flex-col pt-24 gap-4 items-center">
                <h3 className="text-6xl font-semibold tracking-[5px]">Our Menu</h3>
                <p className="w-1/3 text-center">
                    We consider all the drivers of change gives you the components you need to change to create a truly happens.
                </p>
                <div className="flex gap-6 pt-12">
                    <p className="bg-[#AD343E] text-white font-semibold py-2 px-8 rounded-full">All</p>
                    <p className="bg-[#AD343E] text-white font-semibold py-2 px-8 rounded-full">Breakfast</p>
                    <p className="bg-[#AD343E] text-white font-semibold py-2 px-8 rounded-full">Main Dishes</p>
                    <p className="bg-[#AD343E] text-white font-semibold py-2 px-8 rounded-full">Drinks</p>
                    <p className="bg-[#AD343E] text-white font-semibold py-2 px-8 rounded-full">Desserts</p>
                </div>
            </div>

            <div className="grid grid-cols-4 px-12 py-12 gap-6">
                <div className="flex flex-col items-center border-2 rounded-2xl gap-4">
                    <img src={egg} alt="egg" className="w-full" />
                    <p className="text-[#AD343E] font-bold text-lg">$9.99</p>
                    <p className="font-bold text-xl">Fried Eggs</p>
                    <p className="text-center pb-4">
                        Made with eggs, lettuce, salt, oil and other ingredients.
                    </p>
                </div>

                <div className="flex flex-col items-center border-2 rounded-2xl gap-4">
                    <img src={egg} alt="egg" className="w-full" />
                    <p className="text-[#AD343E] font-bold text-lg">$9.99</p>
                    <p className="font-bold text-xl">Fried Eggs</p>
                    <p className="text-center pb-4">
                        Made with eggs, lettuce, salt, oil and other ingredients.
                    </p>
                </div>

                <div className="flex flex-col items-center border-2 rounded-2xl gap-4">
                    <img src={egg} alt="egg" className="w-full" />
                    <p className="text-[#AD343E] font-bold text-lg">$9.99</p>
                    <p className="font-bold text-xl">Fried Eggs</p>
                    <p className="text-center pb-4">
                        Made with eggs, lettuce, salt, oil and other ingredients.
                    </p>
                </div>

                <div className="flex flex-col items-center border-2 rounded-2xl gap-4">
                    <img src={egg} alt="egg" className="w-full" />
                    <p className="text-[#AD343E] font-bold text-lg">$9.99</p>
                    <p className="font-bold text-xl">Fried Eggs</p>
                    <p className="text-center pb-4">
                        Made with eggs, lettuce, salt, oil and other ingredients.
                    </p>
                </div>


                <div className="flex flex-col items-center border-2 rounded-2xl gap-4">
                    <img src={egg} alt="egg" className="w-full" />
                    <p className="text-[#AD343E] font-bold text-lg">$9.99</p>
                    <p className="font-bold text-xl">Fried Eggs</p>
                    <p className="text-center pb-4">
                        Made with eggs, lettuce, salt, oil and other ingredients.
                    </p>
                </div>


                <div className="flex flex-col items-center border-2 rounded-2xl gap-4">
                    <img src={egg} alt="egg" className="w-full" />
                    <p className="text-[#AD343E] font-bold text-lg">$9.99</p>
                    <p className="font-bold text-xl">Fried Eggs</p>
                    <p className="text-center pb-4">
                        Made with eggs, lettuce, salt, oil and other ingredients.
                    </p>
                </div>
            </div>

            <div className="menu h-[80vh] flex justify-center items-center">
                <p className="text-white font-bold text-4xl">
                    "Feel the authentic & original taste from us"
                </p>
            </div>
        </section>
    )
}

export default Menu;