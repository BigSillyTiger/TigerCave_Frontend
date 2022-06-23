import apis from "./axios";
import { REQ_ROAR_UPLOAD, REQ_CLEAR_UL } from "./req_list";

export const upload = async (data, uuid) => {
    const formData = new FormData();
    for (let i = 0; i < data.length; i++) {
        formData.append("roarImg", data[i]);
    }
    //formData.append("roarImg", data);
    const config = {
        headers: {
            "content-type": "multipart/form-data",
        },
    };
    try {
        const response = await apis.post(
            `${REQ_ROAR_UPLOAD}/${uuid}`,
            formData,
            config
        );
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

export const clearUppostImgs = async (list) => {
    try {
        console.log("==> api clearup imgs: ", list);
        const response = await apis.post(REQ_CLEAR_UL, { data: list });
        console.log("=> clear all upload imgs: ", response.data);
        return response.data;
    } catch (error) {}
};
