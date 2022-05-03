import { SET_TEXT, SET_DELITE, SET_DONE } from "../actions/actionTypes";

const  initialState = [
    {text : 'Alex', id : Math.random(), completed: false},
];

export const textReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_TEXT:{
            return [...state, action.payload];
        };
        case SET_DELITE:{
            return state.filter((item) => item === action.payload ? null: item)
        };
        case SET_DONE:{
            return state.map((item) => item.id === action.payload ? {...item, completed: !item.completed} : item)
        };
        default : {
            return state
        }
    };
};

