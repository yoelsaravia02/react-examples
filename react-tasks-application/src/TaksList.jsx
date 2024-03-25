import TaskCard from './TaskCard'

function TaksList(props) {
    
    if (props.tasks.length === 0){
        return <h1>No hay tareas aun</h1>
    }

    return (
    <div>
        {props.tasks.map((task) =>(
            <TaskCard task={task}/>
        ))
        }
    </div>
    );
}

export default TaksList
