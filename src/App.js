import { useState } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';

function App() {
  const [text, setText] = useState('');
  const [todoArr, setTodoArr] = useState([]);

  function onChange(event) {
    setText(event.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setTodoArr([text, ...todoArr])
    setText('')
  }

  return (
    <main className="App">
      <form onSubmit={handleSubmit}>
        <h1>
          Todo list
        </h1>
        <input
          value={text}
          placeholder='Введите текст'
          onChange={onChange}
        ></input>
        <button  type='Submit'>
          Добавить
        </button>
        <BusinessList
          arr={todoArr} />
      </  form>
    </main>
  );
}

export default App;
