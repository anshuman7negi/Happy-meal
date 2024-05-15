import {lazy, Suspense} from 'react'
import recipeFood from '../assets/recipeFood.svg'
import recipeLemon from '../assets/recipeLemon.svg'
import leaf1 from '../assets/recipeLeaf1.svg'
import leaf2 from '../assets/recipeLeaf2.svg'
import leaf3 from '../assets/recipeLeaf3.svg'
import leaf4 from '../assets/recipeLeaf4.svg'
const RecipeType = lazy(()=> import('../components/RecipeType'));


const Recipes = () => {
    return (
        <section>
            <div className="relative grid md:grid-cols-2 min-h-screen">
                <div className="flex flex-col item-center justify-center pl-4 py-16 md:pl-16">
                    <p className="font-bold text-[#CF1919] tracking-widest text-xl mb-4">
                        CHEF’S SPECIAL
                    </p>
                    <p className="font-bold text-4xl leading-10 mb-2">
                        Freshness
                        in every bite
                    </p>
                    <p className="text-lg text-black z-50">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Quo studio.
                    </p>
                    <img src={leaf3} alt="leaf" className="absolute bottom-[1%] left-[15%] rotate-45 " loading="lazy" />
                     <img src={leaf4} alt="leaf" className="absolute top-[18%] md:top-[5%] left-[15%] rotate-12 opacity-80 sm:opacity-0" loading="lazy"/>
                </div>

                <div className="recipeBg pt-48 relative z-20">
                    <img src={recipeFood} alt="food" className="relative h-3/4 z-50" />
                    <img src={recipeLemon} alt="lemon" className="lemon absolute top-[1%] sm:top-[-4%] left-[-32%] z-0" loading="lazy" />
                     <img src={leaf1} alt="leaf" className="absolute bottom-[5%] left-[25%] w-1/4" loading="lazy" />
                     <img src={leaf2} alt="leaf" className="absolute bottom-[15%] left-[55%] w-1/4" loading="lazy" />
                </div>
            </div>
            <Suspense fallback={<h1>Loadin...</h1>}> <RecipeType /> </Suspense>
        </section>
    )
}

export default Recipes;