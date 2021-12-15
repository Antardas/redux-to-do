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
            };
        case "REMOVE_TODO":
            const newTodo = state.list.filter(state => state.id !== action.payload);
            console.log(newTodo);
            return {
                list: newTodo
            };
        case "REMOVE_ALL_TODO":
            return {
                list: action.payload
            };
        default: return state;
    }

}
export default todoReducer;