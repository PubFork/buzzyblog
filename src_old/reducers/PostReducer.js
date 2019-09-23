const PostReducer = (state, action) => {
    // console.log(state, action);
    switch (action.type) {
        case "INIT_POSTS":
            return {
                ...action,
            };
        case "SEARCH_POSTS":
            return {
                ...state,
                search: [...action.search],
            };
        default:
            return state;
    }
};

export default PostReducer;