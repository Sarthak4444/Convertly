import React from 'react';

function Contact() {
  return (
    <section className="bg-[#121421] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-[#91ec59] mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're here to help! Whether you have questions, feedback, or need support, don't hesitate to reach out. 
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-extrabold text-[#91ec59] mb-12 text-center">Get in Touch</h2>
          <div className="max-w-4xl mx-auto">
            <form className="bg-[#1f2329] p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-lg text-gray-300">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full mt-2 p-3 bg-[#2a2f37] text-white rounded-lg focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-lg text-gray-300">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full mt-2 p-3 bg-[#2a2f37] text-white rounded-lg focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="text-lg text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows="6"
                  className="w-full mt-2 p-3 bg-[#2a2f37] text-white rounded-lg focus:outline-none"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="bg-[#91ec59] text-black py-4 px-10 rounded-full text-lg font-semibold hover:bg-[#7bc141] transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-extrabold text-[#91ec59] mb-8 text-center">Our Location</h2>
          <div className="relative w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279918248!2d-74.25986524731759!3d40.6976700632647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3203f9e1d7%3A0x12a4595f3fc4deec!2sNew%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1637903281119!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-[#91ec59] mb-12">Our Contact Information</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col gap-6 text-lg text-gray-300">
              <div className="flex items-center gap-4">
                <i className="fas fa-phone-alt text-2xl text-[#91ec59]"></i>
                <a href="tel:+11234567890" className="hover:underline">+1 123-456-7890</a>
              </div>
              <div className="flex items-center gap-4">
                <i className="fas fa-envelope text-2xl text-[#91ec59]"></i>
                <a href="mailto:support@convertly.com" className="hover:underline">support@convertly.com</a>
              </div>
              <div className="flex items-center gap-4">
                <i className="fas fa-map-marker-alt text-2xl text-[#91ec59]"></i>
                <a href="https://www.google.com/maps?q=1234+Convertly+Lane,+New+York,+NY,+10001" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  1234 Convertly Lane, New York, NY, 10001
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
