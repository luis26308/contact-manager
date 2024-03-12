import { ADD_CONTACT, EDIT_CONTACT, HANDLE_INPUT, SET_CONTACTS } from './types'
import { v4 as uuid } from 'uuid'



let initialState = {
    name: '',
    phone: '',
    email: '',
    notes: '',
    contactType: '',

    contacts: [],
    search: '',

    editName: '',
    editPhone: '',
    editEmail: '',
    editNotes: '',
    editContactType: '',
    editId: ''
}

// reducer is used to modify state
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case SET_CONTACTS:
            let contacts = action.payload
            return {
                ...state,
                name: '',
                phone: '',
                email: '',
                notes: '',
                contactType: '',
                editName: '',
                editPhone: '',
                editEmail: '',
                editNotes: '',
                editContactType: '',
                editId: '',
                contacts: contacts
            }
        case EDIT_CONTACT:
            return {
                ...state,
                editName: action.payload.name,
                editPhone: action.payload.phone,
                editEmail: action.payload.email,
                editNotes: action.payload.note,
                editContactType: action.payload.contactType,
                editId: action.payload._id
            }
        default:
            return state;
    }
}

export default reducer