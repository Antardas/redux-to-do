import React from 'react';
import { useSelector } from 'react-redux';
import { Todocontainer } from '../StyledComponents/Todocontainer';
import Todo from './Todo';

const Todos = () => {
    const allTodos = useSelector((state) => state.todoReducer.list);
    return (
        <Todocontainer>
            {
                allTodos.map(todo => <Todo id={todo.id} children={todo.data} key={todo.id}/>)
            }
        </Todocontainer>
    );
};

export default Todos;