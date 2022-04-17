import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import tableStyles from '../common/styles/table.module.css'
import { todoActions } from '../../redux/reducers/todoReducer.ts'
export default function AddTodo() {
  const [todos, setTodos] = useState({
    userid: '', task: '', completed: ''
  })
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const handleChange = e =>{
      e.preventDefault()
      const{name, value} = e.target;
      setTodos({...todos, [name]: value})
    }
  return (
      <form onSubmit={ e => {
          e.preventDefault()
          dispatch(todoActions.taskRequest(todos))
          const todo = {
            userid: Math.floor(Math.random() * 10000),
            task:{todo},
            completed:''
          }
          setData(oldList =>[todo,...oldList])
          setTodos({
            userid: '', task: '', completed: ''
          })
      }}>
        <table className={tableStyles.table}>
        <thead>
            <tr>
                <th colSpan={2}><h2>투두리스트</h2></th>
            </tr>
        </thead>
        <tbody>
            <tr >
                <td><label>할일등록</label></td>
                <td>
                  <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="todo"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  
                  <button type="submit" style={{marginLeft:"20px"}}  className="btn btn__primary btn__lg">
                    Add
                  </button></td >
            </tr>
            <tr>
              <td>
                할일목록
              </td>
              <td>
              {data.length == 0
                ? <div>현재 등록된 일정이 없습니다</div>
                
                : data.map((todo) => {
                  return (
                    <div key={todo.userid}>{todo.todo}</div>
                  )
                }
                )}
              </td>
            </tr>
                </tbody>
            </table>
            </form>
     
  );
}