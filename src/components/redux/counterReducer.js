// import { legacy_createStore as createStore } from "redux";

// // Redux использует стор (store) для хранения состояния приложения. Чтобы создать стор, нам нужно
// //  определить редьюсер (reducer) и передать его функцию createStore из пакета Redux.

// // Редьюсер (reducer) - функция, которая обрабатывает действия и возвращает новое состояние

// function counterReducer(state = 1, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + action.payload;
//         case 'DECREMENT':
//             return state - action.payload;
//         default:
//             return state;
//     }
// }

// const store = createStore(counterReducer)
// store.dispatch({ type: 'INCREMENT' })
// // const currentState = store.getState()

// // export default currentState;
