import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

function getData(name){
console.log(name)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);

