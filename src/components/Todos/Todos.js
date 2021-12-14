import React from 'react';
import { Todocontainer } from '../StyledComponents/Todocontainer';
import Todo from './Todo';

const Todos = () => {
    return (
        <Todocontainer>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
        </Todocontainer>
    );
};

export default Todos;