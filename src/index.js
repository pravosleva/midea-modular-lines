import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
//import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';

import st from './reducers';
const store = createStore(
  st,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const render = () => {
  ReactDOM.render(
    <App
      obj = {store.getState()}
      updateInputParameters_CoolingMode = {(fs) => store.dispatch({ type: 'UPDATE_INPUT_DATA_COOLING_MODE', inputDataCoolingMode: fs })}
      updatehevaTabState = {(fs) => store.dispatch({ type: 'UPDATE_TAB_STATE', hevaTabState: fs })}
    />,
    document.getElementById('root')
  );
};
render();
store.subscribe(render);

//registerServiceWorker();
