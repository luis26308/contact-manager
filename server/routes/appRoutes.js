import express from 'express'
import appControllers from '../controllers/appControllers.js'
const router = express.Router()

router.route('/').get(appControllers.getAllContacts)
router.route('/addcontact').post(appControllers.addContact)
router.route('/deletecontact').delete(appControllers.deleteContact) // need to build the controller function
router.route('/updatecontact').patch(appControllers.updateContact) // this route will update a contact
router.route('/searchcontacts').post(appControllers.searchContacts) // this is using req.body
router.route('/filtercontacts/:contactType').get(appControllers.filterContacts)

export default router