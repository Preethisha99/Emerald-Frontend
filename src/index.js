import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store  from './store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* //app component full ah aenga venna state ah access pannikallam  */}
    <Provider store ={store}> 
       <App />
    </Provider>
  </React.StrictMode>
);


