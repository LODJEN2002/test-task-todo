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
        <div className='ToDo__title'>
          <div className='asd'>
            <div>
              <div>
                T
              </div>
              <div>
                D
              </div>
            </div>
            <div>
              <div className='Todo__totle_o'>
                o
              </div>
              <div className='Todo__totle_o'>
                o
              </div>
            </div>
          </div>
          <div className='Todo__totle_list'>
            List
          </div>
          {/* <div className='ToDo__title-t'>
            T
            <div className='ToDo__title-d'>
              D
            </div>
          </div>
          <div className='ToDo__title-t'>
            o
            <div className='ToDo__title-o2'>
              o
            </div>
          </div> */}
        </div>
        <input
          value={text}
          placeholder='Введите текст'
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
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
