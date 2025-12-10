import { createContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { getContactById } from "../services/contactService";

export const ContactDetailContext = createContext()

const ContactDetailContextProvider = () => {
    const parametros_url = useParams()
    const contact_id = parametros_url.contact_id
    const [contactSelected, setContactSelected] = useState(null)
    const [loadingContact, setLoadingContact] = useState(true)
    function loadContactById (){
        setLoadingContact(true)
        setTimeout(
            function () {
                const contact = getContactById(contact_id)
                setContactSelected(contact)
                setLoadingContact(false)
            },
            2000
        )
    }

    function addNewMessage (content){
        const new_message = {
            message_id: contactSelected.messages.length + 1,
            message_content: content,
            message_state: 'NOT_SEND',
            message_created_at: new Date(),
            send_by_me: true
        }
        /* Clonamos el contacto seleccionado */
        const contactSelectedCloned = { ...contactSelected }

        /* Clonamos los mensajes del contacto seleccionado */
        const messagesCloned = [...contactSelectedCloned.messages]

        /* Agregamos al clone de mensajes el nuevo mensaje */
        messagesCloned.push(new_message)

        /* Guardamos la nueva lista clonada modificada */
        contactSelectedCloned.messages = messagesCloned

        /* Seteamos el contacto seleccionado con la lista de mensajes actualizada */
        setContactSelected(contactSelectedCloned)
    }

    useEffect(
        loadContactById,
        [parametros_url.contact_id]
    )

    const providerValues = {
        contactSelected,
        loadingContact,
        loadContactById,
        addNewMessage
    }

    
    return (
        <ContactDetailContext.Provider value={providerValues}>
            <Outlet/>
        </ContactDetailContext.Provider>
    )
}

export default ContactDetailContextProvider
