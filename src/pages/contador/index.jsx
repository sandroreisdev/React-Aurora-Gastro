
import { useEffect, useState } from "react"

export const Contador= () => {

    const [contador, setContador] = useState(0)
    useEffect(() => {
        document.title = `Você clicou ${contador}`
    }, [contador])    
    // let contador = 0 antes sem o hooks(useState) só funcionava no console da web

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