import React, {useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useInput} from './useInput'
// import App from './App';



function App() {
  const [titleProps, reseTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);

    reseTitle();
    resetColor();

  }

    return (
      <>
        <form onSubmit={submit}>
          <input type="text" {...titleProps} placeholder="sound..." />
          <input type="color" {...colorProps} />
          <button>ADD</button>
        </form>
      </>
    );

}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);











