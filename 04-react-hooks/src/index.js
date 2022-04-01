import React, {createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useInput} from './useInput'
// import App from './App';

export const TreesContext = createContext();

const trees = [
  { id: '1', type: 'Maple' },
  { id: '2', type: 'Oak' },
  { id: '3', type: 'Family' },
  { id: '4', type: 'Component' },
];

function App() {


  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);

    reseTitle();
    resetColor();

  }

    return (
      <>
        <h1>Trees I've Heard of</h1>
      </>
    );

}

ReactDOM.render(
  <TreesContext.Provider value={trees}>
    <App />
  </TreesContext.Provider>,
  document.getElementById('root')
);















