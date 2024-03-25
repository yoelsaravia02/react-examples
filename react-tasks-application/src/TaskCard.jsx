function TaskCard({task}) {
    return (
        <div key={task.id}>
            <div>{task.title}</div>
            <p>{task.description}</p>
        </div>
    )
}

export default TaskCard
