import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Import axios

// Create an async thunk for logging in
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }, { rejectWithValue }) => {  // Add rejectWithValue to handle errors
    try {
      const response = await axios.post(
        "http://localhost:8000/v1/api/auth/candidate/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data; // Return the response data
    } catch (error) {
      // Reject with error message in case of failure
      return rejectWithValue(error.response.data || 'Failed to login');
    }
  }
);

//Create an async thunk for Register
export const RegisterUser = createAsyncThunk(
  "user/RegisterUser",
  async ({ firstName, lastName,email,password }, { rejectWithValue }) => {  // Add rejectWithValue to handle errors
    try {
      const response = await axios.post(
        " http://localhost:8000/v1/api/auth/candidate/register",
        {firstName, lastName,email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data; // Return the response data
    } catch (error) {
      // Reject with error message in case of failure
      return rejectWithValue(error.response.data || 'Failed to Register');
    }
  }
);

export const authSlices = createSlice({
  name: "user",
  initialState: {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: "",
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload; // Set token from payload
      localStorage.setItem("token", action.payload); // Save token to localStorage
    },
    addUser: (state, action) => {
      state.user = action.payload; // Set user from payload
      localStorage.setItem("user", JSON.stringify(action.payload)); // Save user to localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.loading = true; // Set loading to true when the registration request is pending
        state.error = ""; // Clear previous errors
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when the registration is fulfilled
        const { msg, token, user } = action.payload; // Destructure the payload
        
        state.msg = msg; // Set the success message
        state.token = token; // Set the token
        state.user = user; // Set the user details

        // Optionally save the success message and token to localStorage
        localStorage.setItem("msg", msg);
        localStorage.setItem("token", token);
        // Skip saving user data to localStorage as per your requirement
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.loading = false; // Set loading to false on rejection
        state.error = action.payload || "An error occurred"; // Capture the error message
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true; // Indicate loading for login
        state.error = ""; // Clear previous errors
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false on successful login
        const { error, msg, token, user } = action.payload; // Destructure the payload
        
        if (error) {
          state.error = error; // Capture any login error
        } else {
          state.msg = msg; // Set success message
          state.token = token; // Set token
          state.user = user; // Set user data

          // Save login data to localStorage
          localStorage.setItem("msg", msg);
          localStorage.setItem("token", token);
          // Optionally save user data
          localStorage.setItem("user", JSON.stringify(user));
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false; // Set loading to false on rejection
        state.error = action.payload || "An error occurred"; // Capture the error message
      });
  },
});

// Export actions and reducer
export const { addToken, addUser } = authSlices.actions;
export default authSlices.reducer;
