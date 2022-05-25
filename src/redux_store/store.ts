import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/login/loginSlice";
import roarReducer from "./features/roar/roarSlice";

const store = configureStore({
    reducer: {
        login: loginReducer,
        roar: roarReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
