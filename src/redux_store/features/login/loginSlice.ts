import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface LoginState {
    loginStatus: boolean;
}

const initialState: LoginState = { loginStatus: false };

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        userLogin: (state) => {
            state.loginStatus = true;
        },
        userLogout: (state) => {
            state.loginStatus = false;
        },
        userTest: (state) => {
            console.log("~store test~");
        },
    },
});

export const { userLogin, userLogout, userTest } = loginSlice.actions;
export const selectLogin = (state: RootState) => state.login.loginStatus;
export default loginSlice.reducer;
