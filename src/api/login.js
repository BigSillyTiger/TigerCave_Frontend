import apis from "./axios";
import { REQ_LOGIN_STATUS, REQ_LOGIN, REQ_LOGOUT } from "./req_list";

export const checkLogin = async () => {
    try {
        const response = await apis.get(REQ_LOGIN_STATUS);
        return response.data.success;
    } catch (err) {
        if (err.response) {
            console.log("=> err.response: ", err.response);
        } else {
            console.log(`error msg: ${err}`);
        }
    }
};

export const adminLogout = async () => {
    try {
        const response = await apis.get(REQ_LOGOUT);
        return response.data.note;
    } catch (err) {
        if (err.response) {
            console.log("=> logout err.response: ", err.response);
        } else {
            console.log(`error msg: ${err}`);
        }
        return false;
    }
};

export const login = async (username, password) => {
    const newPost = {
        username,
        password,
    };
    try {
        const response = await apis.post(REQ_LOGIN, newPost);
        console.log("-> fe recv login res: ", response.data);
        return response.data.success;
    } catch (err) {
        if (err.response) {
            console.error("err.response: ", err.response.data.success);
        } else {
            console.error(`error msg: ${err}`);
        }
        return false;
    }
};
