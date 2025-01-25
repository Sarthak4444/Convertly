import React, { useState, useEffect } from "react";
import Login from "./../Modals/Login";

function Hero() {
  // State to store the list of available currencies
  const [currencies, setCurrencies] = useState([]);

    // State to control Login modal visibility
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); 

  // State to store the exchange rates for the selected base currency
  const [rates, setRates] = useState({});

  // State to manage the selected base and target currencies
  const [baseCurrency, setBaseCurrency] = useState("eur");
  const [targetCurrency, setTargetCurrency] = useState("usd");

  // State to manage the amount entered by the user
  const [amount, setAmount] = useState(0);

  // State to store the converted amount
  const [convertedAmount, setConvertedAmount] = useState(null);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);  // Toggle Login modal visibility
  };

  // Fetch the list of currencies from the API when the component mounts
  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
    )
      .then((response) => response.json())
      .then((data) => setCurrencies(data));
  }, []);

  // Fetch the exchange rates for the selected base currency whenever it changes
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`
    )
      .then((response) => response.json())
      .then((data) => setRates(data[baseCurrency]));
  }, [baseCurrency]);

  // Automatically calculate the converted amount whenever relevant inputs change
  useEffect(() => {
    if (amount > 0 && rates[targetCurrency]) {
      // Deduct 5% from the amount before conversion
      const adjustedAmount = amount * 0.95; 
      // Calculate the converted amount based on the selected target currency's rate
      setConvertedAmount((adjustedAmount * rates[targetCurrency]).toFixed(2));
    } else {
      // Reset the converted amount if inputs are invalid
      setConvertedAmount(null);
    }
  }, [amount, baseCurrency, targetCurrency, rates]);

  // Handle swapping the base and target currencies
  const handleSwapCurrencies = () => {
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency);
    setConvertedAmount(null); // Clear the converted amount after swapping
  };

  // Handle the form submission for currency conversion
  const handleConvert = (e) => {
    e.preventDefault();
    toggleLoginModal();
  };

  return (
    <div className="max-w-[1400px] mx-auto relative">
      {/* Background design */}
      <div className="bg-[#121421] absolute inset-0 -z-10">
        <div className="relative w-full h-full">
          <div className="bg-[#6F2341] p-28 rounded-full absolute top-1/3 left-20 md:left-60"></div>
        </div>
      </div>
      {/* Main container */}
      <div className="backdrop-blur-3xl min-h-[86vh] flex flex-col md:flex-row items-center justify-center">
        {/* Left Section: Text and CTA */}
        <div className="flex flex-col items-start justify-center gap-6 md:gap-10 text-white w-full md:w-1/2 p-10">
          <p className="text-4xl md:text-7xl font-bold">
            Your Ultimate Online Currency Converter
          </p>
          <p className="text-lg md:text-xl -mt-5">
            One-stop solution for all your currency needs
          </p>
          <button className="bg-[#91ec59] rounded-full hover:scale-105 transition-all duration-500 text-black px-6 md:px-8 text-lg font-extrabold tracking-wider py-3 md:py-4">
            GET STARTED
          </button>
        </div>
        {/* Right Section: Currency Converter Form */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="p-3 md:p-5 converter bg-white rounded-xl shadow-lg w-full m-3 max-w-md">
            <form onSubmit={handleConvert}>
              {/* Input fields for amount and base currency */}
              <div className="flex gap-1 md:gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-gray-700 mb-2" htmlFor="amount">
                    You Send
                  </label>
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="0"
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="baseCurrency"
                  >
                    From
                  </label>
                  <select
                    id="baseCurrency"
                    value={baseCurrency}
                    onChange={(e) => setBaseCurrency(e.target.value)}
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {/* Generate options for base currencies */}
                    {Object.entries(currencies).map(([key, name]) => (
                      <option key={key} value={key}>
                        {name} ({key})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Button to swap currencies */}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={handleSwapCurrencies}
                  className="bg-[#91ec59] p-2 px-3 my-1 transform rotate-90 rounded-full hover:scale-105 transition-all duration-300"
                  aria-label="Swap currencies"
                >
                  <i className="fa-solid fa-right-left"></i>
                </button>
              </div>
              {/* Output for converted amount and target currency */}
              <div className="flex gap-1 md:gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-gray-700 mb-2">
                    They Receive
                  </label>
                  <div className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700">
                    {convertedAmount !== null
                      ? `${convertedAmount} ${targetCurrency.toUpperCase()}`
                      : "0.00"}
                  </div>
                </div>
                <div className="flex-1">
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="targetCurrency"
                  >
                    To
                  </label>
                  <select
                    id="targetCurrency"
                    value={targetCurrency}
                    onChange={(e) => setTargetCurrency(e.target.value)}
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {/* Generate options for target currencies */}
                    {Object.entries(currencies).map(([key, name]) => (
                      <option key={key} value={key}>
                        {name} ({key})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Submit button for conversion */}
              <input
                type="submit"
                value="Exchange"
                className="bg-[#91ec59] w-full py-2 text-black font-bold rounded hover:scale-105 transition-all duration-300 cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
      
      <Login isOpen={isLoginModalOpen} onClose={toggleLoginModal} />
    </div>
  );
}

export default Hero;
