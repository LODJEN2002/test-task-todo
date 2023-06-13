import { useState } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';

function App() {
  const [text, setText] = useState('');
  const [todoArr, setTodoArr] = useState([]);

  function onChange(event) {
    setText(event.target.value)
  }

  // addEventListener

  function handleSubmit(e) {
    if (text !== '') {
      e.preventDefault()
      setTodoArr([text, ...todoArr])
      setText('')
    }
  }

  function handleDeliteBusiness(text) {
    setTodoArr(todoArr.filter(el => el !== text))
  }

  return (
    <main className="App">
      <div>
        <h1>
          Todo list
        </h1>
        <input
          value={text}
          placeholder='Введите текст'
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              handleSubmit(e)
            }
          }}
        ></input>
        <button onClick={handleSubmit}>
          Добавить
        </button>
        <BusinessList
          arr={todoArr}
          onDelite={handleDeliteBusiness} />
      </div>
    </main>
  );
}

export default App;
