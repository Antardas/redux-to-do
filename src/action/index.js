export const addTodo = (data) => {
    console.log('addToDo', data);
    return {
        type: "ADD_TODO", 
        payload: {
            id: new Date().getTime(),
            data: data
        }
    };
};

export const removeTodo = (id) => {
    return {
        type: "REMOVE_TODO",
        payload: id
    };
};
export const removeAllTodo = () => {
    return {
        type: "REMOVE_ALL_TODO",
        payload : []
    };
};