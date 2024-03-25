export function SaludarFuncion() {

    const married = true
    /*if (married){
        return <h1>Estoy casado</h1>
    } else {
        return <h1>No estoy casado</h1>
    }
    */
    return <h1>
        {married ? "Estoy casado" : "No estoy casado"}
    </h1>
}

export function Greeting(props){
    console.log(props)
    return <h1>{props.title}</h1>
}
