import { connect } from "react-redux";
import { handleInput, editContact } from "../redux/actions";
import appAPI from "../utils/API/appAPI";

const List = (props) => {
    const handleDelete = (_id) => {
        appAPI.deleteContact(_id);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        let updatedContact = {
            name: props.editName,
            email: props.editEmail,
            phone: props.editPhone,
            contactType: props.editContactType,
            note: props.editNotes,
            _id: props.editId,
        };
        appAPI.updateContact(updatedContact);
    };

    const handleSearch = (e) => {
        let { value } = e.target;
        appAPI.searchContacts(value);
    };

    const handleFilter = (e) => {
        let { value: contactType } = e.target
        appAPI.filterContacts(contactType)
    };

    const renderList = () => {
        return props.contacts.map((contact) => {
            return contact._id !== props.editId ? (
                <section key={contact._id}>
                    <h2>{contact.name}</h2>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                    <p>{contact.notes}</p>
                    <p>{contact.contactType}</p>
                    <div>
                        <button onClick={() => handleDelete(contact._id)}>Delete</button>
                        <button onClick={() => props.editContact(contact)}>Edit</button>
                    </div>
                </section>
            ) : (
                <section key={contact._id}>
                    <form onSubmit={handleUpdate}>
                        <h1>Edit Contact</h1>
                        <input
                            type="text"
                            name="editName"
                            placeholder="Name:"
                            value={props.editName}
                            onChange={props.handleInput}
                            required={true}
                        />
                        <input
                            type="tel"
                            name="editPhone"
                            placeholder="Phone Number:"
                            value={props.editPhone}
                            onChange={props.handleInput}
                        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        />
                        <input
                            type="email"
                            name="editEmail"
                            placeholder="Email"
                            value={props.editEmail}
                            onChange={props.handleInput}
                        />
                        <div className="">
                            <h4>Contact Type:</h4>
                            <div>
                                <label htmlFor="personal">Personal</label>
                                <input
                                    type="radio"
                                    name="editContactType"
                                    id="personal"
                                    onChange={props.handleInput}
                                    value="personal"
                                />
                                <label htmlFor="professional">Professional</label>
                                <input
                                    type="radio"
                                    name="editContactType"
                                    id="professional"
                                    onChange={props.handleInput}
                                    value="professional"
                                />
                            </div>
                        </div>
                        <textarea
                            name="editNotes"
                            value={props.editNotes}
                            placeholder="Additional Notes:"
                            onChange={props.handleInput}
                        />
                        <button type="submit">update contact</button>
                    </form>
                </section>
            );
        });
        // console.log(display)
    };
    return (
        <div className="list-container">
            <div>
                <input
                    type="text"
                    name="search"
                    onChange={handleSearch}
                    placeholder="Search:"
                />
                <div>
                    <label>
                        <span>Personal</span>
                        <input
                            type="radio"
                            name="contactType"
                            value="personal"
                            onChange={handleFilter}
                        />
                    </label>
                    <label>
                        <span>Professional</span>
                        <input
                            type="radio"
                            name="contactType"
                            value="professional"
                            onChange={handleFilter}
                        />
                    </label>
                    <label>
                        <span>All</span>
                        <input
                            type="radio"
                            name="contactType"
                            value="all"
                            onChange={handleFilter}
                        />
                    </label>
                </div>
            </div>

            {renderList()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
        search: state.search,
        editName: state.editName,
        editPhone: state.editPhone,
        editEmail: state.editEmail,
        editNotes: state.editNotes,
        editContactType: state.editContactType,
        editId: state.editId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInput: (e) => dispatch(handleInput(e.target)),
        editContact: (contactInfo) => dispatch(editContact(contactInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
