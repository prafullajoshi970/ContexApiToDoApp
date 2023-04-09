import React, { useContext } from 'react'
import { MyContext } from './Context'
import TodosItem from './TodosItem'

const TodosList = () => {
  const {Todo} =useContext(MyContext)
  return (
    <>
    <table className='tableData'>
        <tbody>
            {
                Todo.map((Todo, i) => <TodosItem {...Todo}/>)
            }
        </tbody>
    </table>
</>
  )
}

export default TodosList