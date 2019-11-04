import {todo} from './ToDo';

export const todos  = (state = [], action) => {
    console.log(action.type)
    switch (action.type) {
        case "ADD_IMG":
            return [
                ...state,
                todo(undefined,action)
            ];

        case "LIKE_IMG":
            console.log("likeimage triggered")
            state.map(t=>{console.log(t)})
            return state.map(t => {
                return todo(t,action)
            });
            
        case "SAVE_IMG":
            console.log("likeimage triggered")
            state.map(t=>{console.log(t)})
            return state.map(t => {
                return todo(t,action)
            });

        case "COMMENT_IMG":
            return state.map(t => {
                    return todo(t,action)
            }); 

        default:
            return state;
    }
};