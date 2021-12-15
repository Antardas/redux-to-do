import React from 'react';
import { TodoList } from '../StyledComponents/Todocontainer';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../action';

const Todo = ({ children, id }) => {
    const disPatch = useDispatch()
    return (
        <TodoList>
            <h3>{ children}</h3>
            <button onClick={() => disPatch(removeTodo(id))} className='delete-button'>
                <i className="fas fa-trash-alt delete-icon"></i>
            </button>
        </TodoList>
    );
};

export default Todo;