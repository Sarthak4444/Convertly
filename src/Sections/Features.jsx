import React from "react";

function Features() {
  const features = [
    {
      title: "Real-Time Currency Conversion",
      description:
        "Get up-to-date currency exchange rates with instant calculations.",
      icon: "fa-solid fa-clock",
    },
    {
      title: "Multi-Currency Support",
      description:
        "Convert between a wide range of currencies from all around the world.",
      icon: "fa-solid fa-wallet",
    },
    {
      title: "Historical Data Tracking",
      description:
        "View past exchange rates to track trends and make informed decisions.",
      icon: "fa-solid fa-chart-line",
    },
    {
      title: "User-Friendly Interface",
      description: "Intuitive design for quick and easy currency conversions.",
      icon: "fa-solid fa-mobile-screen",
    },
    {
      title: "Secure and Reliable",
      description:
        "Built with a focus on security and reliability for trusted usage.",
      icon: "fa-solid fa-shield-halved",
    },
    {
      title: "Offline Mode Support",
      description:
        "Perform conversions without an internet connection using cached rates.",
      icon: "fa-solid fa-globe",
    },
  ];
  
  return (
    <section className="bg-[#121421] text-white py-12 px-6 lg:px-16 pb-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Convertly?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1b1e29] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl text-[#91ec59] mb-4">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
