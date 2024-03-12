import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    email : {
        type: String,
    },
    contactType: {
        type: String
    },
    note: {
        type: String
    }
})

const Contact = mongoose.model("Contact", contactSchema)

export default Contact
