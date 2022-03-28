import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';


function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)}/>
      <p>{checked ? 'checked' : 'not checked'}</p>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


