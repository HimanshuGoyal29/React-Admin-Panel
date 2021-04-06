import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({

    /*
        They should be Essentially added to my Slice
        name
        initialstate
        reducers
    */

    name: "user",

    initialState: {
        admin: null,
        client: null,
    },

    reducers: {

        setAdmin: (state, action) => {
            state.admin = action.payload
            state.client = null
        },

        setClient: (state, action) => {
            state.admin = null
            state.client = action.payload
        },

        logoutAdmin: (state) => {
            state.admin = null
        },

        logoutClient: (state) => {
            state.client = null
        }
    }
})

export const {setAdmin,setClient, logoutAdmin, logoutClient} = userSlice.actions

//Selectors
export const selectAdmin = (state) => state.user.admin
export const selectClient = (state) => state.user.client

// Export the reducer
export default userSlice.reducer;

