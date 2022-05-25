import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface RoarPostState {
    roarState: [];
}

const initialState: RoarPostState = { roarState: [] };

export const roarSlice = createSlice({
    name: "roar",
    initialState,
    reducers: {
        raorUpdate: (state, action: PayloadAction<Array<any>>) => {
            state.roarState = action.payload as [];
        },
    },
});

export const { raorUpdate } = roarSlice.actions;
export const selectRoar = (state: RootState) => state.roar.roarState;
export default roarSlice.reducer;
