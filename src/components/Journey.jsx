import cart from '../assets/cart.svg'
import gift from '../assets/gift.svg'
import delivery from '../assets/delivery.svg'
import catering from '../assets/catering.svg'

const Journey = () => {
    return (
        <section className="grid grid-cols-2 px-8 py-8 mt-12">
            <div className="flex flex-col">
                <p className="text-[#FF6868] font-semibold tracking-widest">Our Story & Services</p>
                <h3 className="font-bold text-4xl  mt-10 mb-6">Our Culinary Journey And Services</h3>
                <p className="w-4/5 mb-12">
                    Rooted in passion, we curate unforgettable dining experiences and offer exceptional services,
                    blending culinary artistry with warm hospitality.
                </p>
                <button className="self-center font-semibold bg-[#39DB4A] text-white px-6 py-3 rounded-full">Explore</button>
            </div>

            <div className="flex items-center justify-center gap-8 px-4 flex-wrap">

                <div className="flex flex-col items-center justify-center p-4 gap-2 border-2 rounded-2xl shadow-lg w-1/3">
                    <img src={catering} alt="catering" className="w-[50px]" />
                    <p className="text-[#5FE26C] font-bold">CATERING</p>
                    <p className="text-center ">Delight your guests with our flavors and  presentation</p>
                </div>

                <div className="flex flex-col items-center justify-center p-4 gap-2 border-2 rounded-2xl shadow-lg w-1/3">
                    <img src={delivery} alt="delivery" className="w-[50px]"  />
                    <p className="text-[#5FE26C] font-bold">Fast delivery</p>
                    <p className="text-center ">We deliver your order promptly to your door</p>
                </div>

                <div className="flex flex-col items-center justify-center p-4 gap-2 border-2 rounded-2xl shadow-lg w-1/3">
                    <img src={cart} alt="catering" className="w-[50px]"  />
                    <p className="text-[#5FE26C] font-bold">Online Ordering</p>
                    <p className="text-center ">Explore menu & order with ease using our Online Ordering </p>
                </div>

                <div className="flex flex-col items-center justify-center p-4 gap-2 border-2 rounded-2xl shadow-lg w-1/3">
                    <img src={gift} alt="catering" className="w-[50px]"  />
                    <p className="text-[#5FE26C] font-bold">Gift Cards</p>
                    <p className="text-center ">Give the gift of exceptional dining with Foodi Gift Cards</p>
                </div>
            </div>
        </section>
    )
}

export default Journey;