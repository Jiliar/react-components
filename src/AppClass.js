//Se pueden definir componentes con clases de JS, para hacerlo se debe heredar de la clase Component
import React, {Component} from "react";
import ReactDOM from "react-dom";

//Todas las clases que extienden de Component debe tener al menos un metodo render() que retorne elementos de React, el evalua si hay alguna modificación y renderiza todas las actualización.
class AppClass extends Component{
    render(){ // Este metodo es original de Component y es implementado en la Subclse
      return <h1>Hello App</h1>
    }
}

//React trabaja declarativamente y transforma los componentes y elementos a la plataforma en la que se ejecuta la aplicación: Javascript o Typescript con un alto desempeño, es decir, usando el minimo de recursos posibles.
ReactDOM.render(<App />, document.getElementById("root"));