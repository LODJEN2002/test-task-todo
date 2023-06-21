import { useState } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';

function App() {
  const [text, setText] = useState('');
  const [todoObj, setTodoObj] = useState([
    { id: 1, text: 'hellp world', order: 1 },
    { id: 2, text: 'qq qwe', order: 2 }
  ]);

  function sortTodo(a, b) {
    if (a.order > b.order) {
      return -1
    }
    if (a.order < b.order) {
      return 1
    }
  }

  function onChange(event) {
    setText(event.target.value)
  }

  function handleSubmit(e) {
    if (text !== '') {
      console.log(todoObj)
      e.preventDefault()
      setTodoObj([{ id: todoObj.length + 1, text: text, order: todoObj.length + 1 }, ...todoObj]) // Есть бак с id and order.
      setText('')
    }
  }

  function handleDeliteBusiness(card) {
    setTodoObj(todoObj.filter(el => el.text !== card.text || el.id !== card.id || el.order !== card.order))
  }

  function handleSort(card, currentBusiness) {
    console.log(card)
    console.log(currentBusiness)
    setTodoObj(todoObj.map(c => {
      if (c.id === card.id) {
        return { ...c, order: currentBusiness.order }
      }
      if (c.id === currentBusiness.id) {
        return { ...c, order: card.order }
      }
      console.log(c)
      return c
    }))
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
          sortTodo={sortTodo}
          obj={todoObj}
          onDelite={handleDeliteBusiness}
          onQwe={handleSort}
        />
      </div>
    </main>
  );
}

export default App;
