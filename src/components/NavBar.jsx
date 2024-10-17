function NavBar() {
    return (
        <div className="border border-black px-8 py-5 lg:px-20 lg:py-10 bg-white">
            <nav className="flex flex-wrap justify-between">
                <div className=" md:text-3xl lg:text-4xl text-pink-600">
                    TravelCeylon
                </div>

                <div className="flex gap-4 md:text-2xl lg:text-3xl text-pink-800">
                    <div>
                        Home
                    </div>
                    <div>
                        Booking
                    </div>
                    <div>
                        About Us
                    </div>
                    <div>
                        Contacts
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default NavBar