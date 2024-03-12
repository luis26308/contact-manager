import { connect } from "react-redux"
import { addContact, handleInput } from '../redux/actions'
import { useNavigate } from "react-router-dom"
import appAPI from "../utils/API/appAPI"

const Form = (props) => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        // props.addContact()

        let newContact = {
            name: props.name,
            email:props.email,
            phone: props.phone,
            note: props.note,
            contactType: props.contactType
        }

        appAPI.addContact(newContact)// API call
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <h1>Add Contact</h1>
            <input
                type="text"
                name='name'
                placeholder="Name:"
                value={props.name}
                onChange={props.handleInput}
                required={true}
            />
            <input
                type="tel"
                name='phone'
                placeholder='Phone Number:'
                value={props.phone}
                onChange={props.handleInput}
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
            <input
                type='email'
                name='email'
                placeholder='Email'
                value={props.email}
                onChange={props.handleInput}
            />
            <input
                type="text"
                name='organization'
                placeholder="Organization:"
                onChange={props.handleInput}
                required={true}
            />
            <div className=''>
                <h4>Contact Type:</h4>
                <div>
                    <label htmlFor="personal">Personal</label>
                    <input type="radio" name="contactType" id="personal" onChange={props.handleInput} value='personal' />
                    <label htmlFor="professional">Professional</label>
                    <input type="radio" name="contactType" id="professional" onChange={props.handleInput} value='professional' />
                </div>
            </div>
            <textarea name='notes' placeholder="Additional Notes:" onChange={props.handleInput}/>
            <button type="submit">add contact</button>
        </form>
    )
}

// this function is to read state
const mapStateToProps = (state) => {
    return {
        name: state.name,
        phone: state.phone,
        email: state.email,
        contactType: state.contactType,
        note: state.notes
    }
}

// this function is for writing state
const mapDispatchToProps = (dispatch) => {
    return {
        handleInput: (e) => dispatch(handleInput(e.target)),
        addContact: () => dispatch(addContact())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form) 