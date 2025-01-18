import React, { useState } from 'react';

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Convertly?',
      answer: 'Convertly is a currency converter app designed to make conversions easy and fast for travelers, businesses, and anyone dealing with foreign currencies.',
    },
    {
      question: 'How accurate are the conversions?',
      answer: 'We use real-time data from reliable sources to ensure our currency conversions are accurate and up-to-date.',
    },
    {
      question: 'Can I use Convertly offline?',
      answer: 'Unfortunately, you need an internet connection to get real-time exchange rates, but you can access the rates that were last updated when you were connected.',
    },
    {
      question: 'Is there a mobile app for Convertly?',
      answer: 'Yes! We offer a mobile app for both Android and iOS. Download it from the Google Play Store or Apple App Store.',
    },
    {
      question: 'How do I get started?',
      answer: 'Simply download the app or use our website to start converting currencies right away. No sign-up is required for basic usage.',
    },
  ];

  return (
    <section className="bg-[#1b1e29] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-600">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left py-4 px-6 font-semibold text-lg flex justify-between items-center focus:outline-none hover:bg-[#91ec59] hover:text-black transition-all duration-300"
              >
                <span>{faq.question}</span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <i className="fas fa-chevron-down"></i>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out transform ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="bg-[#161724] py-4 px-6 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
