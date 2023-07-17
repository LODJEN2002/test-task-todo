import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

import { legacy_createStore as createStore } from "redux";

// Redux использует стор (store) для хранения состояния приложения. Чтобы создать стор, нам нужно
//  определить редьюсер (reducer) и передать его функцию createStore из пакета Redux.

// Редьюсер (reducer) - функция, которая обрабатывает действия и возвращает новое состояние

const defaultState = {
  num: 1
}

function counterReducer(state = defaultState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, num: state.num + action.payload}
    case 'DECREMENT':
      return {...state, num: state.num - action.payload}

    default:
      return state;
  }
}

const store = createStore(counterReducer)
// store.dispatch({ type: 'INCREMENT' })
// const currentState = store.getState()

// export default currentState;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

