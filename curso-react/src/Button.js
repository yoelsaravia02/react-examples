export function Button({title}){
    return <button onClick={function(){
        console.log("Hola mundo")
    }}>
        {title}
        </button>
}