import dp from '../../assets/01.jpg';

function TouristCard() {
    return (
        <div
            className="w-64 h-80 rounded-lg overflow-hidden flex flex-col justify-between items-center shadow-lg text-center"
            style={{
                backgroundImage: `url(${dp})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="mt-auto bg-black bg-opacity-50 w-full py-2">
                <h1 className="text-white font-bold text-lg">Name of Guide</h1>
            </div>
            <button className="bg-pink-400 text-gray-800 font-semibold text-md px-4 py-2 rounded-lg mb-4">
                See More
            </button>
        </div>
    );
}

export default TouristCard;
