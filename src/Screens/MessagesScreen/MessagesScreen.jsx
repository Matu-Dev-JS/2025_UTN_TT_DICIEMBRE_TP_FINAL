import React, { use, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { getContactById } from '../../services/contactService'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import MessagesList from '../../Components/MessagesList/MessagesList'
import AddNewMessage from '../../Components/AddNewMessage/AddNewMessage'
import { ContactListContext } from '../../Context/ContactListContext'
import { Gi3dStairs, GiAbstract069 } from "react-icons/gi";
import { CgArrowLongRightL } from "react-icons/cg";

export default function MessagesScreen() {
   
    const {
        contactSelected
    } = useContext(ContactDetailContext)

    const {loadingContactsState} = useContext(ContactListContext)
    return (
        <div>
            <img src='/auto-rojo.webp' width={'100px'} />
            <Gi3dStairs/>
            <GiAbstract069/>
            <CgArrowLongRightL className='flecha'/>
            <h1>Pantalla de mensajes</h1>
            <ContactSidebar/>
            {
                loadingContactsState 
                ? <div>Cargando..</div>
                : <div>
                    <h2>{contactSelected.contact_name}</h2>
                    <MessagesList/>
                    <AddNewMessage/>
                </div>
            }
            
        </div>
    )
}
