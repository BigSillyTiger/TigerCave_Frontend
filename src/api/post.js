import apis from "./axios";
import { REQ_LOGIN, REQ_NEW_POST } from "./req_list";

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

export const newPost = async (data) => {
    try {
        const response = await apis.post(REQ_NEW_POST, { data });
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
