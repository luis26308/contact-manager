import { ADD_CONTACT, EDIT_CONTACT, HANDLE_INPUT, SET_CONTACTS } from "./types";

export const handleInput = (input) => {
    return {
        type: HANDLE_INPUT,
        payload: input
    }
}

export const addContact = () => {
    return {
        type: ADD_CONTACT
    }
}

export const setContacts = (contacts) => {
    return {
        type: SET_CONTACTS,
        payload: contacts
    }
}

export const editContact = (contactInfo) => {
    console.log(contactInfo)
    return {
        type: EDIT_CONTACT,
        payload: contactInfo
    }
}
