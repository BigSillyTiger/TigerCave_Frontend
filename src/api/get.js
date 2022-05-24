import apis from "./axios";
import { REQ_LOGIN_STATUS, REQ_LOGOUT, REQ_BLOG_POSTS } from "./req_list";

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

export const getBlogPosts = async () => {
    try {
        const response = await apis.get(REQ_BLOG_POSTS);
        return response.data;
    } catch (err) {
        if (err.response) {
            console.log("=> logout err.response: ", err.response);
        } else {
            console.log(`error msg: ${err}`);
        }
        return false;
    }
};
