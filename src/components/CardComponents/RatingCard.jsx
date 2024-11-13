function RatingCard() {
    return (
        <div style={{ background: "blanchedalmond" }} className=" min-w-64 max-w-64 p-3 rounded-lg shadow-lg">

            <div className="flex justify-between pb-2 font-semibold">
                <h1>5.0</h1>
                <h1>Sar</h1>
            </div>

            <div className="pb-2">
                <h1 className="font-semibold text-lg text-gray-900">"Beautiful and serene place!"</h1>
                <h1 className="text-sm text-gray-700">Visited this location during our trip, and it exceeded our expectations! The scenery was stunning, and the tour guide made the experience even better with insightful stories about the area's history. Highly recommend if you're looking for a peaceful getaway.</h1>
            </div>

            <div className="flex items-center gap-7">
                <div className="">
                    <h1 className="bg-gray-500 w-10 h-10 rounded-full flex items-center justify-center">d</h1>
                </div>
                <h1 className="">Profile Name</h1>
            </div>

        </div>
    )
}

export default RatingCard