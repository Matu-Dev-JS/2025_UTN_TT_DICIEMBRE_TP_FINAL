import React, {  useContext } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'

export default function AddNewMessage() {
    const {addNewMessage} = useContext(ContactDetailContext)

    function handleSubmitNewMessage (event){
        event.preventDefault()
        const message = event.target.mensaje.value
        addNewMessage(message)

    }
    return (
        <form onSubmit={handleSubmitNewMessage}>
            <label htmlFor="mensaje">Mensaje:</label> {/* Esto lo pueden ocultar */}
            <textarea id='mensaje'></textarea>
            <button>Enviar</button>
        </form>
    )
}
