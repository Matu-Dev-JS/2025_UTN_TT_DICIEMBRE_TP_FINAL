import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { ContactListContext } from "./ContactListContext";
export const ContactDetailContext = createContext()

const ContactDetailContextProvider = () => {
    const parametros_url = useParams()
    const contact_id = parametros_url.contact_id
    const { contactState, getContactById, updateContactById } = useContext(ContactListContext)

    const contactSelected = getContactById(contact_id)
    console.log(contactSelected)

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

        /* Agregamos al clone de contacto el nuevo mensaje */
        contactSelectedCloned.messages.push(new_message)

        /* Actualizamos el contacto con el nuevo mensaje */
        updateContactById(contactSelectedCloned, contact_id)
    }



    const providerValues = {
        contactSelected,
        addNewMessage
    }

    
    return (
        <ContactDetailContext.Provider value={providerValues}>
            <Outlet/>
        </ContactDetailContext.Provider>
    )
}

export default ContactDetailContextProvider
