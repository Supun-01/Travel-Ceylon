import { HeroSectionContent } from "../assets/text/textContent"

function SupunHeroSection() {
    return (
        <div>
            <div className="flex flex-wrap">

                <div className="w-full lg:w-1/2 bg-yellow-300 ">
                    <h1>Welcome To <span className=" text-pink-600">TravelCeylon</span></h1>
                    <p>{HeroSectionContent}</p>
                </div>

                <div className="w-full lg:w-1/2 flex flex-wrap ">
                    <div className="w-1/3 bg-red-500 ">
                        text
                    </div>
                    <div className="w-2/3 ">
                        <div className="w-full bg-purple-500 ">
                            text
                        </div>
                        <div className="w-full bg-orange-400 ">
                            text
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SupunHeroSection