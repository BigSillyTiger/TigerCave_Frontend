import apis from "./axios";
import { REQ_ROAR_POSTS } from "./req_list";

// POST
export const newRoar = async (data) => {
    try {
        const response = await apis.post(REQ_ROAR_POSTS, { data });
        return response.data;
    } catch (err) {
        if (err.response) {
            console.error("err.response: ", err.response.data.success);
        } else {
            console.error(`error msg: ${err}`);
        }
        return false;
    }
};

// GET
export const getBlogPosts = async () => {
    try {
        const response = await apis.get(REQ_ROAR_POSTS);
        //console.log("-> front recv all post: ", response.data);
        return response.data;
    } catch (err) {
        if (err.response) {
            console.log("=> getBlogPosts err.response: ", err.response);
        } else {
            console.log(`error msg: ${err}`);
        }
        return false;
    }
};

// DELETE
export const deleteRoar = async (deleteID) => {
    console.log("api recv deleteID: ", deleteID);
    try {
        const response = await apis.delete(`${REQ_ROAR_POSTS}/${deleteID}`);
        console.log("---< delete roar: ", response.data);
        return response.data;
    } catch (err) {
        if (err.response) {
            console.log("=> deleteRoar err.response: ", err.response.data);
            return err.response.data;
        } else {
            console.log(`error msg: ${err}`);
        }
        return false;
    }
};

export const archiveRoar = async (hideID) => {
    console.log("=<< api recv hideID: ", hideID);
    try {
        const response = await apis.put(REQ_ROAR_POSTS, { data: hideID });
        console.log("---< delete roar: ", response.data);
        return response.data;
    } catch (err) {
        if (err.response) {
            console.log("=> archiveRoar err.response: ", err.response.data);
            return err.response.data;
        } else {
            console.log(`error msg: ${err}`);
        }
        return false;
    }
};
