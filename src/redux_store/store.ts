import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/login/loginSlice";
import roarReducer from "./features/roar/roarSlice";
import uploadIMGReducer from "./features/uploadIMG/uploadIMGSlice";

const store = configureStore({
    reducer: {
        login: loginReducer,
        roar: roarReducer,
        uploadIMG: uploadIMGReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
