import { SETEDITORSETTINGS } from "../actions/type";

const iniState = {
    color: "brown",
};

export const editor = (state = iniState, action) => {
    console.log("return action", action);
    const { type, payload } = action;
    switch (type) {
        case SETEDITORSETTINGS: {
            console.log(payload);
            return { ...state, color: payload.color };
        }
        default:
            return state;
    }
};
