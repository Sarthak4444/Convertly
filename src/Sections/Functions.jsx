import React from 'react';

function Functions() {
  const functions = [
    {
      title: 'Travel',
      description: 'Convert currencies instantly while planning your trips or traveling abroad.',
      icon: 'fa-solid fa-plane',
    },
    {
      title: 'Online Shopping',
      description: 'Check prices in your local currency when shopping from international stores.',
      icon: 'fa-solid fa-cart-shopping',
    },
    {
      title: 'Investing',
      description: 'Monitor exchange rates for better investment decisions across global markets.',
      icon: 'fa-solid fa-chart-pie',
    },
    {
      title: 'Business Transactions',
      description: 'Seamless currency conversion for international trade and payments.',
      icon: 'fa-solid fa-briefcase',
    },
    {
      title: 'Accounting',
      description: 'Simplify currency conversions in financial records and accounting software.',
      icon: 'fa-solid fa-calculator',
    },
  ];

  return (
    <section className="bg-[#1b1e29] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-16">How Currency Conversion Helps You</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {functions.map((func, index) => (
            <div
              key={index}
              className="relative p-8 bg-[#121421] border border-[#2a2d38] rounded-2xl w-full max-w-xs shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#91ec59] p-4 rounded-full shadow-md">
                <i className={`text-3xl text-black ${func.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold mt-8">{func.title}</h3>
              <p className="mt-4 text-gray-400">{func.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Functions;
