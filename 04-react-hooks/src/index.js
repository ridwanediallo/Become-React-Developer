import React, {useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';



function App() {
  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    const soundval = sound.current.value;
    const colorval = color.current.value;
    alert(`${soundval} sounds like ${colorval}`);

    sound.current.value = '';
    color.current.value = '';
  }

    return (
      <>
        <form onSubmit={submit}>
          <input type="text" ref={sound} placeholder="sound..." />
          <input type="color" ref={color} />
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











