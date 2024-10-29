import React, { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handling = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();

 
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const { firstName,lastName,username ,email, password } = user; 

    try {
        const actionResult = await dispatch(loginUser({ firstName,lastName,username,email, password })); // Dispatch the loginUser action
        if (loginUser.fulfilled.match(actionResult)) {
            console.log(actionResult,"payload")
            const { accessToken } = actionResult.payload;  
            console.log("token",accessToken)      // Get token from payload

            // Store token in local storage
            localStorage.setItem("token", accessToken); // Store token in local storage

            onLogin(); // Notify parent that login is successful
            navigate("/"); // Navigate to the homepage after successful login
        } else {
            // Handle the error case
            alert(actionResult.error.message || "Invalid credentials. Please try again.");
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred while logging in. Please try again.");
    }
};


  return (
    <div className="relative w-full h-[700px] flex items-center justify-center">
      <img
        src="https://www.synechron.com/sites/default/files/2024-08/Policy%20Governance%20and%20AI_Insights-Page%20banner-01.webp"
        className="w-full h-full object-cover"
        alt="Banner"
      />

      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 rounded-lg shadow-lg p-12 w-[600]">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Registration Form
        </h2>

        <form onSubmit={handleSubmit}>
          {/* First Name & Last Name */}
          <div className="flex flex-col md:flex-row mb-4">
            <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
              <label
                htmlFor="firstName"
                className="text-md font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                className="border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={user.firstName}
                onChange={handling}
              />
            </div>
            <div className="md:w-1/2">
              <label
                htmlFor="lastName"
                className="text-md font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                className="border border-gray-300  p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={user.lastName}
                onChange={handling}
              />
            </div>
          </div>

          {/* Username
          <div className="mb-4">
            <label
              htmlFor="username"
              className="text-md font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="border border-gray-300  p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.username}
              onChange={handling}
            />
          </div> */}

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-md font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border border-gray-300  p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.email}
              onChange={handling}
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="text-md font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.password}
              onChange={handling}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="border-2 border-neutral-800 hover:bg-zinc-900 hover:text-white font-bold py-2 px-4 w-full focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
