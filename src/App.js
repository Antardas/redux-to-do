import React, { useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { GlobalStyle, InputList, Wrapper } from './components/StyledComponents/Wrapper';
import Todos from './components/Todos/Todos';
import { addTodo } from './action/index';

function App() {
  const [inputData, setInputData] = useState('');

  const disPatch = useDispatch();
  return (
    <div className="app">
      <GlobalStyle />
      <Wrapper>
        <div className='inner-to-do-container'>
          <figure>
            <figcaption className='todo-text'>Add Your List Here 👇</figcaption>
          </figure>
          <div className='to-do-container'>

                                {/* Add To do Field */}

            <InputList>
              <input className='list-input' type="text" placeholder='Add List📝'
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
              />
              <button className='input-button' style={{ cursor: inputData.length >= 1 ? 'pointer' : "no-drop"}} disabled={inputData.length >= 1 ? false : true}  onClick={() => {
                disPatch(addTodo(inputData))
                setInputData('')
              }}>
                <i className="fas fa-plus input-icon" />
              </button>
            </InputList>

                                  {/* All Todo List */}

            <div className='list-container'>
              <Todos />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
