import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/login/loginSlice";
import roarReducer from "./features/roar/roarSlice";
import themeReducer from "./features/theme/themeSlice";
import uploadIMGReducer from "./features/uploadIMG/uploadIMGSlice";

const store = configureStore({
    reducer: {
        login: loginReducer,
        roar: roarReducer,
        uploadIMG: uploadIMGReducer,
        theme: themeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
