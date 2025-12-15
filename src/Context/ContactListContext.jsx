import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getContactList } from "../services/contactService";

export const ContactListContext = createContext()

const ContactListContextProvider = () => {
    const [contactState, setContactState] = useState([])
    const [loadingContactsState, setLoadingContactState] = useState(true)



    function loadContactList (){
        setLoadingContactState(true)
        setTimeout(
            function () {
                console.log('Cargando la lista de contactos')
                const contact_list = getContactList()
                setContactState(contact_list)
                setLoadingContactState(false)
            },
            2000
        )
        
    }

    function getContactById (contact_id) {
        for(const contact of contactState){
            
            if(Number(contact.contact_id) === Number(contact_id)){
                return contact
            }
        }
    }

    function updateContactById (contact_to_update, contact_id){
        //Creamos una nueva lista donde el contacto a actualizar se reemplazara por el contacto actualizado
        const new_contact_list = contactState.map(
            (contact) => {
                if(Number(contact.contact_id) === Number(contact_id)){
                    return contact_to_update
                }
                return contact
            }
        )

        setContactState(new_contact_list)
    }

    useEffect (
        loadContactList,
        []
    )

    const providerValues = {
        contactState,
        loadingContactsState,
        loadContactList,
        getContactById,
        updateContactById
    }

    /* Crear una funcion llamada addNewContact que reciba el nombre del nuevo contacto y lo agregue al estado de contactos */

    return (
        <ContactListContext.Provider value={providerValues}>
            <Outlet />
        </ContactListContext.Provider>
    )
}


export default ContactListContextProvider