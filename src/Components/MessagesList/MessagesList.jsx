import React, { useContext } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'

const MessagesList = () => { 
    const {contactSelected} = useContext(ContactDetailContext)
    return (
        <div>MessagesList</div>
    )
}

export default MessagesList