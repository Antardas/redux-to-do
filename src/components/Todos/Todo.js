import React from 'react';
import { TodoList } from '../StyledComponents/Todocontainer';

const Todo = ({children}) => {
    return (
        <TodoList>
            <h3>{ children}</h3>
            <button className='delete-button'>
                <i className="fas fa-trash-alt delete-icon"></i>
            </button>
        </TodoList>
    );
};

export default Todo;