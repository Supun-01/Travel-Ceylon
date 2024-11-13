import NavBar from '../NavBar'
import Footer from '../Footer'

function ContactUs() {
    return (
        <div>
            <NavBar />

            <div className='py-5 px-5 lg:px-20 lg:py-4'>
                <div className="flex flex-wrap w-full items-center">

                    <div className="w-full md:w-1/2">
                        <h1 className="text-5xl text-pink-800">Contact  Us</h1>
                        <p className="text-xl text-gray-700">Whether you have a question, need assistance, or want to share your feedback, we're here to help. Reach out to us using the form below, or feel free to connect with us directly through our contact details. Our team is always ready to assist you!</p>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="border-b border-gray-500 py-5">
                            <h1 className="text-2xl text-pink-800">Give us call</h1>
                            <p className="text-lg text-gray-700">Got questions? We're just a phone call away! Reach out to us  and our team will be happy to assist you.</p>
                        </div>
                        <div className="border-b border-gray-500 py-5">
                            <h1 className="text-2xl text-pink-800">Send us an Email</h1>
                            <p className="text-lg text-gray-700">Prefer to reach out via email? No problem! Drop us a message  and we’ll get back to you as soon as possible. We look forward to helping you!</p>
                            <p className="text-lg mt-2 text-gray-700">help@travelceylon.lk</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-4 my-5 ">
                    <input
                        type="text"
                        name="name"
                        id=""
                        className="w-96 mx-auto px-3 py-1 rounded-lg shadow-md border focus:border-pink-600 outline-none" placeholder="Name" />
                    <input
                        type="text"
                        name="name"
                        id=""
                        className="w-96 mx-auto px-3 py-1 rounded-lg shadow-md border focus:border-pink-600 outline-none"
                        placeholder="Eamil" />
                    <input
                        type="text"
                        name="name"
                        id=""
                        className="w-96 mx-auto px-3 py-1 rounded-lg shadow-md border focus:border-pink-600 outline-none"
                        placeholder="Phone Number" />
                    <textarea
                        name=""
                        id=""
                        className="w-96 h-32 mx-auto px-3 py-1 rounded-lg shadow-md border focus:border-pink-600 outline-none"
                        placeholder="Message">
                    </textarea>

                    <div className="flex">
                        <button className="mx-auto bg-white text-pink-600 border-pink-600 font-bold shadow-lg border py-1 px-4 rounded-xl">Submit</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ContactUs