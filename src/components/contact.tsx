import React from 'react'

const page = () => {
  return (
    <div>
        <div className=" p-8 rounded-lg shadow-md max-w-lg w-full mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-yellow-200 text-center">Contact Us</h2>
        <form>
          <div className="mb-6 hover:scale-105 transition">
            <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
          </div>
          <div className="mb-6 hover:scale-105 transition">
            <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
          </div>
          <div className="mb-6 hover:scale-105 transition">
            <label htmlFor="subject" className="block text-white font-semibold mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
          </div>
          <div className="mb-6 hover:scale-105 transition">
            <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Your Message"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    
  )
}

export default page