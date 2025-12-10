import React, { useContext } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'

const MessagesList = () => {
    const { contactSelected } = useContext(ContactDetailContext)
    return (
        <div>

            {
                contactSelected.messages.map((contact) => {
                    return (
                        <div key={contact.message_id}>
                            <p>{contact.message_content}</p>
                            <p>{contact.message_state}</p>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default MessagesList

