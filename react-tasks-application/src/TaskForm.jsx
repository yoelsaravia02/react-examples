import {useState} from 'react'

export function TaskForm(props) {

    const[title, setTitle] = useState("")
    const[description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createTask(title,description)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Escribe tu tarea" onChange={(e) => (setTitle(e.target.value))}/>
            <textarea placeholder='Escribe la despricipcion de la tarea' onChange={(e) => (setDescription(e.target.value))}></textarea>
            <button>Guardar</button>
            
        </form>
    )
}

export default TaskForm
