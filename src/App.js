import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('')

  function onChange(event) {
    setText(event.target.value)
  }

  function asd() {
    console.log(text)
  }

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
