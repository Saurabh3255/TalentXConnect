import { useEffect } from "react";
import { RegisterUser } from "../redux-toolkit/authSlices";

const handleSubmit = async (e) => {

    
    e.preventDefault(); 

    const { firstName,lastName, email, password } = user; 

    try {
        const actionResult = await dispatch(RegisterUser({ firstName,lastName,email, password })); // Dispatch the loginUser action
        if (RegisterUser.fulfilled.match(actionResult)) {
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

    useEffect(()=>{
        handleSubmit();
    },[])
};