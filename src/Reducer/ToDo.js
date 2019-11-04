export const todo = (state,action) => {
    console.log(action.ratio)
    switch (action.type) {
        case "ADD_IMG":
            return {
                id: action.id,
                image: action.image,
                caption: action.caption,
                comment: [],
                liked: false,
                save: false,
                ratio: action.ratio
            }
        case "LIKE_IMG":
            if(state.id !== action.id)
                return state;
            else{
                return{
                    ...state,
                    liked : !state.liked 
                };
            }
        case "SAVE_IMG":
            if(state.id !== action.id)
                return state;
            else{
                return{
                    ...state,
                    save : !state.save 
                };
            }

        case "COMMENT_IMG":
            if(state.id !== action.id)
                return state;
            else{
                return{
                    ...state,
                    comment : [...state.comment,action.comment]
                };
            }

        default:
            return state;
    }
}