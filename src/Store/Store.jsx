import { configureStore } from "@reduxjs/toolkit";
import authSlices from "../redux-toolkit/authSlices";



const Store = configureStore({
    reducer:{
        user: authSlices,
    }
})

export default Store;