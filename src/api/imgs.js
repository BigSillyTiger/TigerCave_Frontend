import apis from "./axios";
import { REQ_HERO_SLIDE_IMG } from "./req_list";

export const getHeroSlideImgs = async () => {
    try {
        const response = await apis.get(REQ_HERO_SLIDE_IMG);
        return response.data.heros;
    } catch (error) {}
};
