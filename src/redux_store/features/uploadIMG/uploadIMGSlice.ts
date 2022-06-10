import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { API_UPLOAD } from "../../../api";
export type ULType = {
    url: string;
    title: string;
};

interface UploadIMGState {
    uploadIMGState: Array<ULType>;
}

const initialState: UploadIMGState = { uploadIMGState: [] };

export const clearULThunk = createAsyncThunk(
    "uploadIMG/clearULThunk",
    async (_, { dispatch: Function, getState }) => {
        try {
            const state = getState() as RootState;
            API_UPLOAD.clearUnpostImgs(state.uploadIMG.uploadIMGState)
                .then((result) => {
                    console.log("===> thunk result: ", result);
                })
                .catch((error) => {
                    console.log("==> thunk err: ", error);
                });
        } catch (error) {}
    }
);

export const uploadIMGSlice = createSlice({
    name: "uploadIMG",
    initialState,
    reducers: {
        updateUploadList: (state, action: PayloadAction<ULType>) => {
            state.uploadIMGState.push(action.payload);
        },
        clearUploadList: (state) => {
            state.uploadIMGState = [];
        },
    },
    extraReducers(builder) {
        builder
            .addCase(clearULThunk.pending, (state, action) => {
                //console.log("====> thunk pending");
            })
            .addCase(clearULThunk.fulfilled, (state, action) => {
                state.uploadIMGState = [];
            })
            .addCase(clearULThunk.rejected, (state, action) => {
                //console.log("====> thunk rejected");
                state.uploadIMGState = [];
            });
    },
});

export const { updateUploadList, clearUploadList } = uploadIMGSlice.actions;
export const selectUploadIMG = (state: RootState) =>
    state.uploadIMG.uploadIMGState;
export default uploadIMGSlice.reducer;
