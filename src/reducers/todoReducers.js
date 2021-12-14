const initialData = {
    list: []
}
const todoReducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id,
                        data
                    }
                ]
            }
        case "REMOVE_TODO":
            return {};
        case "REMOVE_ALL_TODO":
            return {};
        default: return state;
    }

}
export default todoReducer;