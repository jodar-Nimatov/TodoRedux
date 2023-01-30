import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTodo, completeTodo, removeTodo } from './redux/reducers/todo';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'


function App() {


  const dispatch = useDispatch()
  const todos = useSelector((store) => store.todos.todos)
  const [todo, setTodo] = useState('')
  const [imp, setImp] = useState(false)

  const editing = (chosen, todo)=>{
    if(todo === ''){
      dispatch(removeTodo(todo.id))
      setTodo(chosen)
    }
  }


  return (
    <div className='app'>
      <div>
      <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
      <button onClick={() => {dispatch(addTodo(todo))}}>add</button>
      </div>
      <input type="search" />
      <button>Search</button>
      <div>
        <ul>
          {todos.map(item => (
            <li key={item.id}>
              <input type="checkbox" checked={todo.completed} onChange={() => dispatch(completeTodo(todo.id))}/>
              <span>{item.title}</span>
            <button type='button' onClick={() => dispatch(removeTodo(item.id))}>Удалить</button>
            {/* <span onClick={() => setImp(prev => !prev)}>
              {
                !imp ? <AiOutlineStar/> : <AiFillStar/>
              }
            </span> */}
             <button onClick={()=>editing(todo.text, todo.id)}>✏️</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    
  );
}

export default App;
