import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'
import { ModalApi } from '../modalApi'


export const Api = () => {

    const [users, setUsers] = useState([]) //variáveis usadas para aurmazenar ou atribuir o estado do usuário

    const [abrirModal, setAbrirModal] = useState(false) //variáveis usadoas para abrir o modal e atribuir um estado para o modal
    const [selectedUser, setSelectedUser] = useState(null) //variáveis usadas para selecionar um usuário ou atribuir um valor quando o usuário for selecionado

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')// axios biblioteca utilizada para facilitar a integração com uma Api (get pega os dados do endpoint)
            .then((data) => { //.then caso positivo retorna os dados da Api
                console.log(data.data.results) // mostra só o results do array da Api
                setUsers(data.data.results) // altera o estado do array da api (data) que antes estava vazio exemplo: useState([])
            })
            .catch(() => { // caso negativo retorna...

            })
    }, [])

    const openModal = (personagem) => {//
        setSelectedUser(personagem)
        setAbrirModal(true)
    }

    const closeModal = () => {
        setAbrirModal(false)
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
                            <button onClick={() => openModal(user)}>Ver mais</button>
                        </div>
                    ))}
                </div>

            </div>

            <ModalApi open={abrirModal} close={closeModal} user={selectedUser}/>
        </>
    )
}