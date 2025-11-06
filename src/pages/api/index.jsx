import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'
import { ModalApi } from '../modalApi'


export const Api = () => {

    const [users, setUsers] = useState([])
    const [abrirModal, setAbrirModal] = useState(false)

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((data) => {
                console.log(data.data.results)
                setUsers(data.data.results)
            })
            .catch(() => {

            })
    }, [])

    const openModal = () => {
        setAbrirModal(true)
    }

    return (
        <>
            <div className='container'>
                <h1> Personagens</h1>
                <div className="container-grid">
                    {users.map((user) => (
                        <div className="card-grid">
                            <h2>{user.name}</h2>
                            <img src={user.image} alt="{user.name}" />
                            <button onClick={() => openModal()}>Ver mais</button>
                        </div>
                    ))}
                </div>

            </div>

            <ModalApi open={abrirModal} close={false}/>
        </>
    )
}