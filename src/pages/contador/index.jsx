
import { useState } from "react"

export const Contador= () => {
    
    // let contador = 0 antes sem o hooks(useState) só funcionava no console da web
    const [contador, setContador] = useState(0) // contador pega/obtem  seContador permite alteração

    const incrementar = () => {
        // contador ++
        setContador(contador + 1) // com hooks setContador permite alteração 
        console.log(contador)
    }

    return(
        <>
            <p>Contador: {contador}</p>
            <button onClick={incrementar}>Incrementar</button>
        </>

    )
}