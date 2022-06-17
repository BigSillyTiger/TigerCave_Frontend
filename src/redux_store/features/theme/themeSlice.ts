import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

const initialState = { themeState: true };

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        switchTheme: (state, action: PayloadAction) => {
            state.themeState = !state.themeState;
        },
    },
});

export const { switchTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.themeState;
export default themeSlice.reducer;
