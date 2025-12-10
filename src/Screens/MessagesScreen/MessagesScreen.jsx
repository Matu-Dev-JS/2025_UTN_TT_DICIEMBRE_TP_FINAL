import React, { use, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { getContactById } from '../../services/contactService'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import MessagesList from '../../Components/MessagesList/MessagesList'


export default function MessagesScreen() {
   
    const {
        contactSelected,
        loadingContact,
        loadContactById
    } = useContext(ContactDetailContext)
    return (
        <div>
            <h1>Pantalla de mensajes</h1>
            <ContactSidebar/>
            {
                loadingContact 
                ? <div>Cargando..</div>
                : <div>
                    <h2>{contactSelected.contact_name}</h2>
                    <MessagesList/>
                </div>
            }
            
        </div>
    )
}
