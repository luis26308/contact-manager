import Contact from "../db/models/contact.js";

const appControllers = {
    addContact: (req, res) => {
        // console.log(req)
        let { name, email, phone, note, contactType } = req.body

        let data = {
            name,
            email,
            phone,
            note,
            contactType
        }
        let newContact = new Contact(data)
        newContact.save()
            .then(() => {
                Contact.find()
                    .then((contacts) => {
                        res.json(contacts)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    },
    getAllContacts: (req, res, next) => {
        Contact.find()
            .then((contacts) => {
                res.json(contacts)
            })
            .catch(err => console.log(err))
    }, 
    deleteContact: (req, res)=>{
        let {_id} = req.body
        // console.log(req.body)
        Contact.findByIdAndDelete({_id:_id})
            .then(()=>{
                Contact.find()
                    .then((contacts) => {
                        res.json(contacts)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    },
    updateContact: (req, res) => {
        // console.log(req.body)
        let {_id, name, email, phone, note, contactType } = req.body
        let updatedContact = {name, email, phone, note, contactType}
        Contact.findByIdAndUpdate({_id}, updatedContact)
            .then(()=>{
                Contact.find()
                .then((contacts) => {
                    res.json(contacts)
                })
                .catch(err => console.log(err))
            })
            .catch(err=>console.log(err))
    },
    searchContacts: (req, res) => {
        let {search} = req.body
        Contact.find({name:{$regex:`^${search}`, $options: 'i', }})
            .then((contacts)=>{
                res.json(contacts)
            })
            .catch(err=>console.log(err))
    },
    filterContacts: (req,res)=> {
        let {contactType} = req.params
        console.log(contactType)
        Contact.find(contactType === 'all'? {}: {contactType})
        .then(contacts=> {
            res.json(contacts)
        })
    }
}

export default appControllers






