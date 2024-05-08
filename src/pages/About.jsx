import aboutFood from '../assets/aboutFood.svg'

const About = () => {
    return (
        <section>
            <div className="about h-screen flex flex-col justify-center items-center gap-4">
                <p className="font-bold text-6xl">
                    Best food for
                    your taste
                </p>
                <p className="font-semiBold text-center w-1/3 text-xl">
                    Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
                </p>
                <div className="flex gap-4 mt-4">
                    <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded-full">Book A Table</button>
                    <button className="hover:bg-red-600 hover:text-white border-2  font-semibold px-4 py-2 rounded-full">Explore Menu</button>
                </div>
            </div>

            <div className="grid grid-cols-2 p-8">
                <div className="relative flex items-center">
                    <img src={aboutFood} alt="food" className="h-3/4 z-0" />
                    <div className="absolute right-1/4 top-[55%] shadow-xl z-20 bg-[#474747] text-white flex flex-col gap-8 px-12 py-6 rounded-lg">
                        <p className="font-semiBold text-2xl">Come and visit us</p>

                        <div className="flex flex-col gap-3">
                            <p>(414) 857 - 0107</p>
                            <p>happytummy@restaurant.com</p>
                            <p>837 W. Marshall Lane Marshalltown, <br /> IA 50158, Los Angeles</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 justify-center">
                    <h3 className="font-bold text-5xl">
                        We provide healthy food for your family.
                    </h3>
                    <p className="w-3/4">
                        Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance.
                        Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
                    </p>
                </div>
            </div>

            <div className="flex items-center flex-col gap-12 pb-8">
                <h3 className="font-semibold text-4xl ">
                    What Our Customers Say
                </h3>

                <div className="flex gap-4">

                    <div className="flex flex-col gap-4 py-4 px-6 bg-[#F9F9F7] rounded-lg">
                        <h4 className="text-[#AD343E] font-semibold">“The best restaurant”</h4>
                        <p className="w-[16rem]">
                            Last night, we dined at place and were simply blown away.
                            From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 py-4 px-6 bg-[#F9F9F7] rounded-lg">
                        <h4 className="text-[#AD343E] font-semibold">“Simply delicious”</h4>
                        <p className="w-[16rem]">
                            Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner.
                            Each dish was prepared and beautifully presented.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 py-4 px-6 bg-[#F9F9F7] rounded-lg">
                        <h4 className="text-[#AD343E] font-semibold">“One of a kind restaurant”</h4>
                        <p className="w-[16rem]">
                            The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary.
                            The food was the highlight of our evening. Highly recommended.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;