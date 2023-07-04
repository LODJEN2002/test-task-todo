import { useState } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
// import { TransitionGroup } from 'react-transition-group';
// import Business from './components/BusinessList/Business/Business';
import { Transition } from 'react-transition-group';

function App() {
  // const [test, setTest] = useState(true)
  const [test, setTest] = useState(true)

  const [text, setText] = useState('');
  const [todoObj, setTodoObj] = useState([
    { id: 1, text: '1', order: 1 },
    { id: 2, text: '2', order: 2 },
    { id: 3, text: 'React Transition Group', order: 3 }
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

      <Transition
        in={test}
        timeout={1200}
      >
        {state =>
          <div className={'test_anima ' + state}>
            <div className='test_anima__text'>
              test_animas
            </div>
            <button
              className='test_anima__button'
              onClick={() => {
                setTest(!test)
                // handleDeliteEl()

              }}>
              del</button>
          </div>
        }

      </Transition >
      <Transition
        in={test}
        timeout={1200}
      >
        {state =>
          <div className={'test_anima ' + state}>
            <div className='test_anima__text'>
              test_animas
            </div>
            <button
              className='test_anima__button'
              onClick={() => {
                setTest(!test)
                // handleDeliteEl()

              }}>
              del</button>
          </div>
        }

      </Transition >


      {/* 
        <div className={test ? 'test_anima' : 'test_anima_go'}>
          <div className='test_anima__text'>
            test_anima
          </div>
          <button
            className='test_anima__button'
            onClick={() => {
              setTest(!test)
            }}>
            del</button>
        </div>
        <div className={test ? 'test_anima' : 'test_anima_go'}>
          <div className='test_anima__text'>
            test_anima
          </div>
          <button
            className='test_anima__button'
            onClick={() => {
              setTest(!test)
            }}>
            del</button>
        </div> */}

    </main>
  );
}

export default App;
