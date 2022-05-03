import { SET_TEXT, SET_DELITE, SET_DONE } from "./actionTypes"

export const setTask = (data) => {
    return {
        type: SET_TEXT,
        payload: data
    }
}

export const setDelite = (data) => {
    return {
        type: SET_DELITE,
        payload: data
    }
}

export const setDone = (data) => {
    return {
        type: SET_DONE,
        payload: data
    }
}

