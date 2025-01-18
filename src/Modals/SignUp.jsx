import React, { useState } from "react";

function SignUp({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && password === confirmPassword) {
      console.log("Signed up:", email);
      onClose(); 
    } else {
      setError("Please fill in all fields and ensure passwords match.");
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-96 relative">
         
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
            {error && (
              <div className="text-red-500 text-sm text-center mb-4">{error}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#91ec59]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#91ec59]"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#91ec59]"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <button
                  type="submit"
                  className="w-full bg-[#91ec59] text-black py-2 rounded-md font-semibold hover:bg-[#76d543] transition duration-200"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <div className="text-center my-2">OR</div>

        
            <div className="flex flex-col gap-2">
              <button className="bg-[#4285F4] text-white py-2 px-4 rounded-md flex items-center justify-center gap-2">
                <i className="fa-brands fa-google"></i>
                Sign Up with Google
              </button>
              <button className="bg-[#4267B2] text-white py-2 px-4 rounded-md flex items-center justify-center gap-2">
                <i className="fa-brands fa-facebook-f"></i>
                Sign Up with Facebook
              </button>
            </div>

          
            <div className="flex justify-center p-2 items-center w-full">
              <button
                onClick={() => alert("Redirecting to Login")}
                className="text-sm text-gray-600 hover:text-gray-900 transition duration-200"
              >
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUp;
