import NavBar from "../NavBar"
import Footer from '../Footer'
import MyCard from "../CardComponents/MyCard"
import RatingCard from "../CardComponents/RatingCard"
import TouristCard from "../CardComponents/Touristcard"

function BookingPage() {
    return (
        <div>

            <div>
                <h1 className="text-4xl font-semibold text-pink-800 pb-5">Things do in <span className="text-pink-600">Down South.....</span></h1>
                <div className="flex flex-wrap gap-4 justify-center">
                    <MyCard />
                    <MyCard />
                    <MyCard />
                    <MyCard />
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <button className="text-pink-600 border border-pink-600 bg-white px-7 py-1 rounded-lg font-bold">Load More</button>
            </div>

            <div className="bg-white py-5 mt-5 px-1 rounded-lg">
                <div className="pb-2">
                    <h1 className="text-4xl font-semibold text-pink-800">Travelers our Guides</h1>
                    <p className="text-lg text-gray-500 font-semibold">What other locals say about our tours.</p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                    <RatingCard />
                    <RatingCard />
                    <RatingCard />
                </div>


                <div className="pt-2">
                    <h1 className="text-4xl font-semibold text-pink-800 mb-5">Travelers our Guides</h1>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <TouristCard />
                        <TouristCard />
                        <TouristCard />
                        <TouristCard />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BookingPage 