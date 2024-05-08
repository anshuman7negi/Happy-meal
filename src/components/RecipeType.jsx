

const RecipeType = () => {
    return (
        <div className="pt-16 flex flex-col items-center gap-12">
            <h3 className="text-4xl font-semibold tracking-[5px]">Our Recipe</h3>
            <div className="flex gap-6 items-center justify-center">
                <p className="bg-[#AD343E] text-white font-semibold py-2 px-8 rounded-full">All</p>
                <p className="bg-[#AD343E] text-white font-semibold py-2 px-8 rounded-full">Public</p>
                <p className="bg-[#AD343E] text-white font-semibold py-2 px-8 rounded-full">Private</p>
            </div>

            <div className="flex flex-col gap-6 w-full justify-center items-center">

                <div className="flex flex-col border-2 px-6 py-6 w-[60%] shadow-sm rounded-lg gap-1">
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-xl">Boiled Eggs</p>
                        <p className="font-semibold">Total item: <span className="font-bold text-[#AD343E]">4</span></p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>by: <span className="underline text-[#AD343E] font-bold">Anshuman</span></p>
                        <p className="font-semibold">Price: <span className="font-bold text-[#AD343E]">$23</span></p>
                    </div>
                </div>

                <div className="flex flex-col border-2 px-6 py-6 w-[60%] shadow-sm rounded-lg gap-1">
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-xl">Boiled Eggs</p>
                        <p className="font-semibold">Total item: <span className="font-bold text-[#AD343E]">4</span></p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>by: <span className="underline text-[#AD343E] font-bold">Anshuman</span></p>
                        <p className="font-semibold">Price: <span className="font-bold text-[#AD343E]">$23</span></p>
                    </div>
                </div>

                <div className="flex flex-col border-2 px-6 py-6 w-[60%] shadow-sm rounded-lg gap-1">
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-xl">Boiled Eggs</p>
                        <p className="font-semibold">Total item: <span className="font-bold text-[#AD343E]">4</span></p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>by: <span className="underline text-[#AD343E] font-bold">Anshuman</span></p>
                        <p className="font-semibold">Price: <span className="font-bold text-[#AD343E]">$23</span></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RecipeType;