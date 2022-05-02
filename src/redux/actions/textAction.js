import { SET_TEXT, SET_DELITE, SET_DONE, SET_CHANGE } from "./actionTypes"

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

export const setChange = (data) => {
    return {
        type: SET_CHANGE,
        payload: data
    }
}