import React, {useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

const initialState = {
  message: 'Hello'
};

function reducer(state, action) {
  switch (action.type) {
    case 'yell':
      return {
        message: `HEY! I just said ${state.message}`
      };
    case 'whisper':
      return {
        message: `excuse me I just said ${state.message}`
      };
  }

}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <>
       <p>Message: {state.message}</p>
       <button onClick={() => dispatch({type: 'yell'})}>Hello</button>
       <button onClick={() => dispatch({type: 'whisper'})}>whisper</button>
      </>
    );

}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);







