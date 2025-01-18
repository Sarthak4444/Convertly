import React, { useState } from "react";

function Hero() {
  const [sendAmount, setSendAmount] = useState();
  const [receiveAmount, setReceiveAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const conversionRate = 1.1; // Example rate from USD to EUR

  const countries = [
    { code: "", name: "Select One" },
    { code: "USD", name: "United States Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound" },
    { code: "INR", name: "Indian Rupee" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "AUD", name: "Australian Dollar" },
  ];

  const handleSendAmountChange = (e) => {
    const amount = parseFloat(e.target.value) || 0;
    setSendAmount(amount);
    setReceiveAmount((amount * conversionRate).toFixed(2));
  };

  const handleReceiveAmountChange = (e) => {
    const amount = parseFloat(e.target.value) || 0;
    setReceiveAmount(e.target.value);
    setSendAmount((amount / conversionRate).toFixed(2));
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);

    const newSendAmount = parseFloat(receiveAmount) || 0;
    const newReceiveAmount = parseFloat(sendAmount) || 0;
    setSendAmount((newReceiveAmount / conversionRate).toFixed(2));
    setReceiveAmount((newSendAmount * conversionRate).toFixed(2));
  };

  const handleConvert = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-[1400px] mx-auto relative">
      <div className="bg-[#121421] absolute inset-0 -z-10">
        <div className="relative w-full h-full">
          <div className="bg-[#6F2341] p-28 rounded-full absolute top-1/3 left-20 md:left-60"></div>
        </div>
      </div>
      <div className="backdrop-blur-3xl min-h-[86vh] flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col items-start justify-center gap-6 md:gap-10 text-white w-full md:w-1/2 p-10">
          <p className="text-4xl md:text-7xl font-bold">
            Your Ultimate Online Currency Converter
          </p>
          <p className="text-lg md:text-xl -mt-5">
            One stop solution for all your currency needs
          </p>
          <button className="bg-[#91ec59] rounded-full hover:scale-105 transition-all duration-500 text-black px-6 md:px-8 text-lgtext-xl font-extrabold tracking-wider py-3 md:py-4">
            GET STARTED
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="p-3 md:p-5 converter bg-white rounded-xl shadow-lg w-full m-3~ max-w-md">
            <form onSubmit={handleConvert}>
              <div className="flex gap-1 md:gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-gray-700 mb-2">You Send</label>
                  <input
                    type="number"
                    min="450"
                    max="10000"
                    value={sendAmount}
                    onChange={handleSendAmountChange}
                    className="w-full p-2 border rounded"
                    placeholder="Enter amount"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 mb-2">From</label>
                  <select
                    value={fromCurrency}
                    required
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="w-full p-2 border rounded"
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={handleSwapCurrencies}
                  className="bg-[#91ec59] p-2 px-3 my-1 transform rotate-90 rounded-full hover:scale-105 transition-all duration-300"
                >
                  <i className="fa-solid fa-right-left"></i>
                </button>
              </div>
              <div className="flex gap-1 md:gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-gray-700 mb-2">
                    They Receive
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={receiveAmount}
                    onChange={handleReceiveAmountChange}
                    className="w-full p-2 border rounded"
                    placeholder="Converted amount"
                    step="any"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 mb-2">To</label>
                  <select
                    value={toCurrency}
                    required
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="w-full p-2 border rounded"
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <input
                type="submit"
                value="Exchange"
                className="bg-[#91ec59] w-full py-2 text-black font-bold rounded hover:scale-105 transition-all duration-300 cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
