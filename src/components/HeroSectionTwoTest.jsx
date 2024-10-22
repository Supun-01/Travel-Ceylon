import { HeroSectionContext2 } from "../assets/text/textContent"
import HortonPlain from '../assets/HortonPlain/Horton-Plains-Trek-Activities-in-Nuwara-Eliya.jpg'
import HortonPlainDeer from '../assets/HortonPlain/horton11-min.jpg'

function HeroSectionTwoTest() {
    return (
        <div>
            <div>
                <h1 className="text-center text-pink-800 text-3xl lg:text-5xl mb-5">Why you want to sekect Us?</h1>
            </div>

            <div className="flex flex-wrap">

                <div className="flex flex-wrap w-full lg:w-1/2 mb-5">
                    <div className="w-1/3">
                        <img className="rounded-2xl h-full pr-2" src={HortonPlain} alt="Horton Plain" />
                    </div>
                    <div className="w-2/3">
                        <img className="rounded-2xl h-full pl-2" src={HortonPlainDeer} alt="HortonPlainDeer" />
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <p className="pl-4 text-gray-700 text-2xl lg:text-3xl">
                        {HeroSectionContext2}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSectionTwoTest