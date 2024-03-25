import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import {SaludarFuncion, Greeting} from "./Saludar"
import {Button} from "./Button"
import {TaskCard} from './Task'
import {Posts} from "./Posts"


const root = ReactDOM.createRoot(document.getElementById("root"))

function Counter(){

    const [counter, setCounter] = useState(0)
    
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick = {()=>{setCounter(counter + 1 )}}>Sumar</button>
            <button onClick = {()=>{setCounter(counter - 1 )}}>Restar</button>
            <button onClick = {()=>{setCounter(0)}}>Reiniciar</button>
        </div>
    )
}

function Counter1(){
    const [ mensaje, setMensaje] = useState("")
    return(
        <div>
            <input onChange={e => setMensaje(e.target.value)}/>
            <button onClick={() => {alert("El mensaje es: "+ mensaje)}}>
                Save
            </button>
        </div>
    )
}


function Prueba(){
    const user = {
        firstName: "Joel",
        lastName: "Saravia"
    }
    return <div>
        <h1> {user.firstName} </h1>
        <h3> {user.lastName } </h3>
    </div>
}

const users = [
    {id: 1,
     name: "Joel"},
    {id: 2,
     name:"Marcio"
    }
]

root.render( 
    <>
        <SaludarFuncion/>
        <Prueba/>
        <Greeting title="Hola"/>
        <Greeting title="Mundo"/>
        <Greeting title="Hola Mundo"/>
        <Button title="Soy un boton"/>
        <Button title="No soy un boton"/>
        <Button title="Boton"/>
        <TaskCard ready={false}/>
        <input onChange={function(){console.log("Escribiendo en el input")}}></input>
        <Posts/>
        {users.map((user, i) => {
            return <h1 key={i}>{user.name}</h1>;
        })}
        <Counter/>
        <Counter1/>
    </>
)
