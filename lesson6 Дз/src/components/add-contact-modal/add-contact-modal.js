import { Modal as ModalBase } from "@material-ui/core"
import classnames from "classnames"
import React, { useCallback } from "react"
import { connect } from "react-redux"
import { addConversation } from "../../store/conversations"
import styles from "./add-contact-modal.module.css"

const contacts = Array.from({ length: 50 }, (_, i) => `room${i}`)

export const AddContactModalView = ({
  isOpen,
  onClose,
  conversations,
  addConversation,
}) => {
  const checkActiveConversation = useCallback(
    (contact) =>
      conversations.find((conversation) => conversation.title === contact),
    [conversations],
  )

  const handleContactClick = useCallback(
    (contact, hasConversation) => {
      addConversation(contact, hasConversation)
      onClose()
    },
    [addConversation, onClose],
  )

  return (
    <ModalBase open={isOpen} onClose={onClose}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Добавить учасников</h2>
        <ul>
          {contacts.map((contact) => (
            <Contact
              handleContactClick={(hasConversation) =>
                handleContactClick(contact, hasConversation)
              }
              key={contact}
              hasConversation={checkActiveConversation(contact)}
            >
              {contact}
            </Contact>
          ))}
        </ul>
      </div>
    </ModalBase>
  )
}

const Contact = ({ children, handleContactClick, hasConversation }) => {
  return (
    <li
      onClick={() => handleContactClick(hasConversation)}
      className={classnames({
        [styles.active]: hasConversation,
      })}
    >
      {children}
    </li>
  )
}

const mapDispachToProps = (dispatch) => ({
  addConversation: (contact, hasConversation) =>
    dispatch(addConversation(contact, hasConversation)),
})

const enhance = connect(null, mapDispachToProps)

export const AddContactModal = enhance(AddContactModalView)