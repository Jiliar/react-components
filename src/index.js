//Se pueden definir componentes con clases de JS, para hacerlo se debe heredar de la clase Component
//La importación de useState permetira usar la función useState y conocer mas información del componente
import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";

//Ejemplo de props:

const names = ["George Bush", "Barak Obama", "Joe Biden", "Bill Clinton"];

//Los props pueden tener valores por defectos definidos con un =, en este caso lang = 'en'
const Great = ({person, lang = 'en'})=>{
  const answer = person== '' ? 'Jiliar Silgado':person;
  const greating = lang == 'es'? 'Hola': ''
  return <p>{greating} {answer}</p>
}

//Otra forma de definier valores por defecto es usando defaultProps
Great.defaultProps ={
    lang: 'en'
}

//STATES
const Button1 = () =>{
  //retorna un arreglo con 2 datos, estos seran asignados a counter y setCounter
  const [counter, setCounter] = useState(0); 
  return(
    <div>
      <p>presionado: {counter}</p>
      <button onClick={()=>setCounter(counter + 1)}>Click me!</button>
    </div>
  )
}

//Ciclo de vida de un componente
//componentDidMount(); //Cuando se monta un componente en la interfaz
//componentDidUpdate(); //Cuando se actualiza un componente en la interfaz
//componentWillUnmount(); //Cuando se desmonta un componente en la interfaz

const Button2 = () =>{
  const [counter, setCounter] = useState(0); 
  // El metodo useEffect() recibe una función como argumento que se ejecutara luego de cada render del componente, con el se define funcionalidad para cada render y podrian ejecutar efectos secundarios.

  //EJECUCIÓN EN CADA ACTUALIZACIÓN
  useEffect(()=>{
    console.log('¡I always execute myself alone!');
  })

  //EJECUCIÓN SOLO AL INICIAR EL COMPONENTE
  useEffect(()=>{
    console.log('¡I only execute myself when init!');
  },[])

  return  <button onClick={()=> setCounter(counter+1)}>Click! {counter}</button>
}

const Button3 = () =>{
    const [counter, setCounter] = useState(0); 
    //EJECUCIÓN CUANDO EL COMPONENTE VAYA A SER ELIMINADO
    useEffect(()=>{
      console.log('¡I only execute myself when deleting component!');
      return () =>{
        console.log('Bye!');
      }
    },[]);
  
    return  <button onClick={()=> setCounter(counter+1)}>Click! {counter}</button>
}

//EVENTOS
const Greating = ()=>{
  const [name, setName] = useState("");
  return(
      <div>
        <input type="text" onChange={(ev)=>setName(ev.target.value)} />
        <p>Hello {name}</p>
      </div>
  )
}

//Con respecto a props el atributo person (en este caso) deberia llamarse igual al implementado en los argumentos de la función que corresponda
const App = () => {
  const [showButton, setShowButton] = useState(true);
  return <div>
            <h1>React JS Practice</h1>
            <Great person='Mary Puerta' lang='es'/>
            <hr/>
            <Button1 />
            <hr/>
            <Button2 />
            <hr/>
            <button onClick={()=>setShowButton(false)}>Delete Button!</button>
            <div>
              {showButton && <Button3/> }
            </div>
            <hr/>
             Synthetic Event
            <Greating/>
        </div>
}
//Un componente de render en cada actualización, es decir, vuelve a ejecutar Componente de Función o de clase, este proceso ejecuta el metodo react() cuando hay un cambio de estado en el componente.
ReactDOM.render(<App />, document.getElementById("root"));



