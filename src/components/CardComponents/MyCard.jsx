import testImg from '../../assets/01.jpg'

function MyCard() {
    return (
        <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
            <div>
                <img src={testImg} alt="Image" />
            </div>
            <div className='flex justify-between items-center px-2 pt-3'>
                <p className='text-xl font-semibold'>Tour</p>
                <button className=' bg-pink-600 text-white font-bold px-4 py-1 rounded-lg'>Click Me</button>
            </div>
            <div className='flex justify-between px-2 py-3 text-gray-700'>
                <h1>3 Hours | Kind of Tour</h1>
                <div className='flex gap-5'>
                    <h1>Price:</h1>
                    <h1>$300</h1>
                </div>
            </div>
        </div>
    )
}

export default MyCard