import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';


function App() {
  const [name, setName] = useState('Ridwan');
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://api.github.com/users')
    .then((response) => response.json())
    .then(setData)
  }, [])

  if (data) {
    return (
      <>
        <ul>
          {data.map((data) => (
            <li key={data.id}>{data.login}</li>
          ))}
        </ul>
        <button onClick={() => setData([])}>Remove data</button>
      </>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



