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

/* 
    Type: "all" | "pics" | "words" | "articles" | "archive";
 */
export const getRoars = async (type) => {
    let req_path = REQ_ROAR;
    switch (type) {
        case "all":
            req_path = REQ_ROAR;
            break;
        case "pics":
            req_path = REQ_ROAR;
            break;
        case "words":
            req_path = REQ_ROAR;
            break;
        case "articles":
            req_path = REQ_ROAR;
            break;
        case "archive":
            req_path = REQ_ROAR_ADMIN;
            break;
        default:
            req_path = REQ_ROAR;
    }
    try {
        const response = await apis.get(req_path);
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

// Archive a roar
export const archiveRoar = async (archiveID, archiveFlag) => {
    console.log("=<< api recv hideID: ", archiveID);
    const data = {
        archiveID,
        archiveFlag,
    };
    try {
        const response = await apis.put(REQ_ROAR, { data });
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
