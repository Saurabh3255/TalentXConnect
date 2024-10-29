import {  useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import {useLogin} from "../hooks/useLogin";



const Login = ({ onLogin }) => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();                                                                       // Initialize the dispatch function

    function handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user, [name]: value,
        });
    }
      useLogin();
    // const login = async (e) => {
    //     e.preventDefault(); 

    //     const { email, password } = user; 

    //     try {
    //         const actionResult = await dispatch(loginUser({ email, password })); // Dispatch the loginUser action
    //         if (loginUser.fulfilled.match(actionResult)) {
    //             console.log(actionResult,"payload")
    //             const { accessToken } = actionResult.payload;  
    //             console.log("token",accessToken)      // Get token from payload

    //             // Store token in local storage
    //             localStorage.setItem("token", accessToken); // Store token in local storage

    //             onLogin(); // Notify parent that login is successful
    //             navigate("/"); // Navigate to the homepage after successful login
    //         } else {
    //             // Handle the error case
    //             alert(actionResult.error.message || "Invalid credentials. Please try again.");
    //         }
    //     } catch (error) {
    //         console.error("Error during login:", error);
    //         alert("An error occurred while logging in. Please try again.");
    //     }
    // };

    const onRegister = (e) => {
        e.preventDefault();
        navigate("/register");
    };

  return (
    <div className="relative w-[2000px] h-[700px] flex items-center justify-center">
      <img
        src="https://www.synechron.com/sites/default/files/2024-01/compressed-hp-nexus-banner.webp_11.webp"
        className="w-full h-full object-cover"
        alt="Banner"
      />
      <form
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 rounded-lg shadow-lg p- w-96"
        onSubmit={login}
      >
        <div className="text-center text-2xl font-bold mb-6">Login Form</div>

        {/* Username Field */}
        <div className="flex items-center mb-4 pb-2">
          <FaUserAlt className="text-gray-500 mr-3" />
          <input
            type="text"
            name="email"
            placeholder="Email"
           className="gemini-login-input bg-transparent w-full focus:outline-none"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center mb-6 pb-2">
          <RiLockPasswordFill className="text-gray-500 mr-3" />
          <input
            type="password"
            name="password"
            placeholder="Password"
           className="gemini-login-input bg-transparent w-full focus:outline-none"
            autoComplete="off"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button
         className="border-2 border-neutral-800 hover:bg-zinc-900 hover:text-white font-bold py-2 px-4 w-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
        <br />
        <br />
        {/* Register Button */}
        <button
          className="border-2 border-neutral-800 hover:bg-zinc-900 hover:text-white font-bold py-2 px-4 w-full focus:outline-none focus:shadow-outline"
          onClick={onRegister}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
