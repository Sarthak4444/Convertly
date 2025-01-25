import React, { useState } from "react"

function Login({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log("Logged in:", email);
      onClose(); 
    } else {
      setError("Please fill in all fields.");
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

            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
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
              <div className="relative w-full">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#91ec59]"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 bottom-2 transform text-xl text-gray-600 hover:text-black"
                >
                  {showPassword ? (
                    <i className="fa-regular fa-eye-slash"></i>
                  ) : (
                    <i className="fa-regular fa-eye"></i>
                  )}
                </button>
              </div>
              <div className="flex justify-between items-center mb-4">
                <button
                  type="submit"
                  className="w-full bg-[#91ec59] text-black py-2 rounded-md font-semibold hover:bg-[#76d543] transition duration-200"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="text-center my-2">OR</div>

            <div className="flex flex-col gap-2">
              <button className="bg-[#4285F4] text-white py-2 px-4 rounded-md flex items-center justify-center gap-2">
                <i className="fa-brands fa-google"></i>
                Login with Google
              </button>
              <button className="bg-[#4267B2] text-white py-2 px-4 rounded-md flex items-center justify-center gap-2">
                <i className="fa-brands fa-facebook"></i>
                Login with Facebook
              </button>
            </div>
 
              <button
                onClick={() => alert("Redirecting to Forgot Password")}
                className="text-sm text-gray-600 text-left p-1 hover:text-gray-900 transition duration-200"
              >
                Forgot Password?
              </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
