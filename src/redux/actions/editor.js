import { SETEDITORSETTINGS } from "./type";
export const editor = (color) => {
    return {
        type: SETEDITORSETTINGS,
        payload: { color },
    };
};
