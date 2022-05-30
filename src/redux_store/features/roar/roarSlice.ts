import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

import { API_ROAR } from "../../../api";

import { roar_menu_items } from "../../../config/pageConfig";

interface RoarPostState {
    roarState: Array<any>;
    currentMenu: roar_menu_items;
}

const initialState: RoarPostState = { roarState: [], currentMenu: "all" };

export const updateCurrentMenu = createAsyncThunk(
    "roar/updateCurrentMenu",
    async (_, { dispatch, getState }) => {
        try {
            const state = getState();
            console.log("===> thunk: ", state);
            API_ROAR.getRoars("all")
                .then((result) => {
                    const roarPosts = JSON.parse(result.content);
                    roarUpdate(roarPosts);
                })
                .catch((err) => {
                    console.log("err: ", err);
                });
        } catch (err) {}
    }
);

export const roarSlice = createSlice({
    name: "roar",
    initialState,
    reducers: {
        currentMenuUpdate: (state, action: PayloadAction<roar_menu_items>) => {
            state.currentMenu = action.payload;
        },
        roarUpdate: (state, action: PayloadAction<Array<any>>) => {
            //state.roarState = action.payload as [];
            state.roarState = [...action.payload];
        },
    },
    extraReducers(builder) {
        builder
            .addCase(updateCurrentMenu.pending, (state, action) => {})
            .addCase(updateCurrentMenu.fulfilled, (state, action) => {})
            .addCase(updateCurrentMenu.rejected, (state, action) => {});
    },
});

export const { roarUpdate, currentMenuUpdate } = roarSlice.actions;
export const selectRoar = (state: RootState) => state.roar.roarState;
export const selectRoarMenu = (state: RootState) => state.roar.currentMenu;
export default roarSlice.reducer;
