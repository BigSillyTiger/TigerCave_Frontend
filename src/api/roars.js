import apis from "./axios";
import { REQ_ROAR, REQ_ROAR_ADMIN } from "./req_list";

// POST
export const newRoar = async (data) => {
    try {
        const response = await apis.post(REQ_ROAR, { data });
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
export const getRoars = async () => {
    try {
        const response = await apis.get(REQ_ROAR);
        //console.log("-> front recv all post: ", response.data);
        return response.data;
    } catch (err) {
        if (err.response) {
            console.log("=> getRoars err.response: ", err.response);
        } else {
            console.log(`error msg: ${err}`);
        }
        return false;
    }
};

export const getArchivedRoars = async () => {
    try {
        const response = await apis.get(REQ_ROAR_ADMIN);
        //console.log("-> front recv all post: ", response.data);
        return response.data;
    } catch (err) {
        if (err.response) {
            console.log("=> getArchivedRoar err.response: ", err.response);
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
        const response = await apis.delete(`${REQ_ROAR}/${deleteID}`);
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
        const response = await apis.put(REQ_ROAR, { data: hideID });
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
