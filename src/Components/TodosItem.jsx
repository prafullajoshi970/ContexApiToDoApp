import React,{useContext, useState} from 'react'
import { MyContext } from './Context';


const TodosItem = ({id,task,complete}) => {

    const {isChecked, deleteTodo,updateTodo} = useContext(MyContext);

    const checkTask = (e) => isChecked(id,e.target.checked);

    const [editToggle, setEditToggle] = useState(false);


    const [editval, setEditValue] = useState(task);

    const edTask = () => {
        updateTodo(id,editval);
        setEditToggle(!editToggle);
    };


  return (
    <div className="tableData">

    <div className={!editToggle ? 'show-edit' :''}>
        <input type="text" value={editval} onChange={(e) => setEditValue(e.target.value)}/>
        <button onClick={edTask}>Update</button>
    </div>

    <tr className='mainTable'>
        <div className='leftTable'>
        <td>
            <input  type='checkbox' onChange={checkTask}/>
        </td>
        <td>
            <span className={complete ? 'task-complete' :''}>{task}</span>
        </td>
        </div>
       <div className='rightTable'>
       <td>
            <button onClick={() => setEditToggle(!editToggle)}>📝</button>
        </td>
        <td>
            <button onClick={() => deleteTodo(id)}>🗑️</button>
        </td>
       </div>
        
    </tr>

    </div>
  )
}

export default TodosItem