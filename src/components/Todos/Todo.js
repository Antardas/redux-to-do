import React from 'react';
import { TodoList } from '../StyledComponents/Todocontainer';

const Todo = () => {
    return (
        <TodoList>

            {'hello'}
            <button className='delete-button'>
                <i className="fas fa-trash-alt delete-icon"></i>
            </button>
        </TodoList>
    );
};

export default Todo;