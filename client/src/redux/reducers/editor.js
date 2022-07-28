import { SETEDITORSETTINGS } from "../actions/type";

const iniState = {
    color: "brown",
};

export const editor = (state = iniState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SETEDITORSETTINGS: {
            return { ...state, color: payload.color };
        }
        default:
            return state;
    }
};
