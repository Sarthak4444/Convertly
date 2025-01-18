import React, { useState } from 'react';

function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the subscription logic here (e.g., send to backend)
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <section className="bg-[#121421] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Stay Updated!</h2>
        <p className="text-lg mb-8 text-gray-400">
          Get the latest updates, tips, and offers directly to your inbox. Join our community!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-6 py-3 rounded-xl text-black w-80 md:w-96 focus:outline-none focus:ring-2 focus:ring-[#91ec59] transition-all duration-300"
            required
          />

          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-[#91ec59] text-black font-semibold shadow-lg hover:bg-[#72e146] transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
