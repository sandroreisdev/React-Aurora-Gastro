import axios from "axios"
import { useState } from "react"

export const CardCEP = () => {

    const [cep, setCep] = useState()
    const [logradouro, setLogradouro] = useState()
    const [bairro, setBairro] = useState()
    const [regiao, setRegiao] = useState()
    const [estado, setEstado] = useState()


    const buscarCEP = (e) => {
        e.preventDefault()
       /*  fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setLogradouro(data.logradouro)
                setBairro(data.bairro)
                setRegiao(data.regiao)
                setEstado(data.estado)
            }) */

        // IMPLEMENTANDO COM AXIOS

        axios.get(`https://viacep.com.br/ws/${cep}/json`)
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setLogradouro(data.logradouro)
                setBairro(data.bairro)
                setRegiao(data.regiao)
                setEstado(data.estado)
            })
        
    }

    return (
        <div>
            
            <h1>Consulta CEP 🔎 </h1>

            <form>
                <input type="number" placeholder="Digite o CEP: " required value={cep} onChange={(e) => setCep(e.target.value) }/>
                <button type="submit" onClick={buscarCEP}>Buscar</button>
            </form>

            <div>
                <p><strong>Logradouro: </strong><span>{logradouro}</span></p>
                <p><strong>Bairro: </strong><span>{bairro}</span></p>
                <p><strong>Região: </strong><span>{regiao}</span></p>
                <p><strong>Estado: </strong><span>{estado}</span></p>
            </div>

        </div>
    )
}