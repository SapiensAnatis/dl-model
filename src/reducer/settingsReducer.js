import { defaultSettings } from "../consts";
import { filterObject } from "../helpers";

export const settingsReducer = (state, action) => {
    const { key, value } = action;
    switch (action.type) {
        case "toggle":
            const currentValue = state[key][value];
            return {
                ...state,
                [key]: { ...state[key], [value]: !currentValue },
            };
        case "reset":
            // value = array of keys in settings[key] to be reset, null -> reset all
            const defaultSetting = defaultSettings[key];
            const changes = value
                ? filterObject(defaultSetting, value)
                : { ...defaultSetting };

            return { ...state, [key]: { ...state[key], ...changes } };
        case "update":
            // update state[key] with values from value
            return { ...state, [key]: { ...state[key], ...value } };
        case "overwrite":
            return { ...state, [key]: value };
        default:
            return state;
    }
};
