import { HeroSectionContent } from "../../assets/text/textContent"
import GalleImg from '../../assets/text/01.jpg'
import SigiriyaImg from '../../assets/02.jpg'
import EllaImg from '../../assets/text/03.jpg'
import MyButton from "../subComponents/MyButton"

function HeroSection() {
    return (
        <div className="my-5 lg:my-36">
            <div className="flex flex-wrap">

                <div className="w-full lg:w-1/2 lg:pr-5">

                    <h1 className="text-6xl tracking-wide w-full lg:w-1/2 my-5 text-pink-800">Welcome To <span className=" text-pink-600">TravelCeylon</span>!</h1>

                    <p className="text-2xl lg:text-3xl w-full flex flex-wrap mb-5 text-gray-700">{HeroSectionContent}</p>

                    <div className="flex flex-wrap mb-5">
                        <MyButton
                            buttonContent="Learn More"
                            buttonWidth="40"
                            buttonHeight=""
                            buttonColor="white"
                            buttonTextColor="#db2777"

                            buttonBoderColor="#db2777"
                            buttonBorderWidth="1px"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-wrap">

                    <div className="w-1/3">
                        <img className="h-full rounded-3xl" src={GalleImg} alt="Galle" />
                    </div>

                    <div className="w-2/3 ">

                        <div className="h-1/2 ml-4 pb-2">
                            <img className="h-full w-full rounded-3xl" src={SigiriyaImg} alt="Sigiriya" />
                        </div>

                        <div className="h-1/2 ml-4 pt-2">
                            <img className="h-full w-full rounded-3xl" src={EllaImg} alt="Ella" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection