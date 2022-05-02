import { SET_TEXT, SET_DELITE, SET_DONE, SET_CHANGE } from "../actions/actionTypes";

const  initialState = [
    {text : 'Alex', id : Math.random(), completed: false},
];

export const textReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_TEXT:{
            return [...state, action.payload];
        }
        case SET_DELITE:{
            return state.filter((item) => item === action.payload ? null : item)
        }
        case SET_DONE:{
            return state.map((item) => item.id === action.payload ? {...item, completed: !item.completed} : item)
        }
        case SET_CHANGE:{
            return state.map((item) => item.id === action.payload ? {...item, text : item.text} : item)
        }
        default : {
            return state
        }
    }
};

