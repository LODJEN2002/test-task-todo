import { useState } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';

function App() {
  const [text, setText] = useState('');
  const todoArr = ['Покушать', 'покакать', 'покурить'];
  console.log(todoArr.length)
  console.log(todoArr.map(el => console.log(el)))

  function onChange(event) {
    setText(event.target.value)
  }

  function asd() {
    todoArr.push(text)
    console.log(todoArr)
  }

  return (
    <main className="App">
      <h1>
        Todo list
      </h1>
      <input
        value={text}
        placeholder='Введите текст'
        onChange={onChange}
      ></input>
      <button onClick={asd}>
        Добавить
      </button>
      <BusinessList
        arr={todoArr} />
    </main>
  );
}

export default App;
