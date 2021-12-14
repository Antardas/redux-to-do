const initialData = {
    list: []
}
const todoReducer = (state = initialData, action) => {
    const testCode = {
                ...state,
                list: [
                    {
                        id : 10,
                        data : new Date().getTime()
                    }
                ]
            }
    console.log(testCode, "Hello")
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