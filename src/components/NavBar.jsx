import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div className="py-5 px-5 lg:px-20 lg:py-4 bg-white sm:text-lg">
            <nav className="flex flex-wrap justify-between">
                <div className=" md:text-3xl lg:text-4xl text-pink-600">
                    <Link to="/">TravelCeylon</Link>
                </div>

                <div className="flex gap-4 md:text-2xl lg:text-3xl text-pink-800">
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/BookingPage">About</Link>
                    </div>
                    <div>
                        <Link to="/BookingComp">Booking</Link>
                    </div>
                    <div>
                        <Link to="PaymentForm">Payments</Link>
                    </div>
                    <div>
                        <Link to="/ContactUs">Contact Us</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar