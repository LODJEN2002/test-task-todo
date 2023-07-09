import { useEffect, useState } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';

function App() {
  const [text, setText] = useState('');
  const [theme, setTheme] = useState(true);
  const localData = localStorage.getItem('todoObj')
  const [todoObj, setTodoObj] = useState(
    JSON.parse(localData)
    // [
    // { id: 1, text: 'Краска задач', order: 1 },
    // { id: 2, text: 'localStorage', order: 2 },
    // { id: 3, text: 'React Transition Group', order: 3 },
    // { id: 4, text: 'theme', order: 4 },
    // ]
  );

  const qwe = ''
  console.log(qwe.trim())

  useEffect(() => {
    localStorage.setItem('todoObj', JSON.stringify(todoObj))
  }, [todoObj])

  useEffect(() => {
    if (theme) {
      document.body.style.backgroundColor = '#110726'
      document.body.style.transition = 'background-color 250ms linear'
      // 'transition: all .25s linear'

    } else {
      document.body.style.backgroundColor = '#EEF099'
    }
  }, [theme])


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
    if (text.trim() !== '') {
      e.preventDefault()
      setTodoObj([{ id: todoObj.length + 1, text: text, order: todoObj.length + 1 }, ...todoObj]) // Есть бак с id and order.
      setText('')
    }
  }

  function handleDeliteBusiness(card) {
    setTodoObj(todoObj.filter(el => el.text !== card.text || el.id !== card.id || el.order !== card.order))
  }

  function handleSort(card, currentBusiness) {
    setTodoObj(todoObj.map(e => {
      if (e.id === currentBusiness.id) {
        if (currentBusiness.order < card.order) {
          return { ...e, order: card.order + 1 }
        }
        if (currentBusiness.order > card.order) {
          return { ...e, order: card.order - 1 }
        }
        if (currentBusiness.order === card.order) {
          return { ...e, order: card.order + 1 }
        }
      }
      return e
    }))
  }

  return (
    <main className="App">
      <button className='ToDo__theme'
        onClick={() => setTheme(!theme)}
      >
        Theme
      </button>
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

      <div className={theme ? 'Todo__container-black' : 'Todo__container-white'}>
        <input
          className={theme ? 'ToDo__container-input-black' : 'ToDo__container-input-white'}
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
        theme={theme}
      />
    </main>
  );
}

export default App;
