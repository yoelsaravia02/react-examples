import TaskList from './TaksList'
import TaskForm from './TaskForm'
import {useState, useEffect} from 'react'
import {tasks as data } from './task'


function App(){

  const [tasks, setTasks] = useState([])

  useEffect(()=>{
      setTasks(data)
  }, [])

  function createTask(taskTitle){
    setTasks([...tasks, {
      title: taskTitle,
      id:tasks.length,
      description:"Nueva tarea"
    }])
  }

  return(
    <h1>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks}/>
    </h1>
  )
}

export default App