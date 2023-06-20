import { useState } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';

function App() {
  const [text, setText] = useState('');
  // const [idText, setIdText] = useState(null);
  // const [orderText, setOrderText] = useState(null);
  const [todoObj, setTodoObj] = useState([
    { id: 1, order: 1, text: 'hellp world' },
    { id: 2, order: 2, text: 'qq qwe' }
  ]);

  function onChange(event) {
    setText(event.target.value)
  }

  function handleSubmit(e) {
    if (text !== '') {
      console.log(todoObj)
      e.preventDefault()
      setTodoObj([{ id: todoObj.length + 1, order: todoObj.length + 1, text: text }, ...todoObj]) // Есть бак с id and order.
      setText('')
    }
  }

  function handleDeliteBusiness(id, order, text) {
    setTodoObj(todoObj.filter(el => el.text !== text || el.id !== id || el.order !== order))
    console.log(id)
    console.log(order)
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
        </div>
        <div className='Todo__container'>
          <input
            className='ToDo__container-input'
            value={text}
            placeholder='Введите текст'
            onChange={onChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(e)
              }
            }}
          ></input>
          <button
            className='ToDo__container-button'
            onClick={handleSubmit}>
            Just Do IT
          </button>
        </div>
        <BusinessList
          obj={todoObj}
          onDelite={handleDeliteBusiness} />
      </div>
    </main>
  );
}

export default App;
