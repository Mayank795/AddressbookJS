const AddressBook = require('./Source/Service/AddressBook');
const Contact = require('./Source/Model/Contact');

const addressBook = new AddressBook();

const contact1 = new Contact(
    "Ankit", "Patel", "007 state side", "Bhopal", "India", "462022", "9876543210", "yugap1806@gmail.com"
);
console.log(addressBook.addContact(contact1));
console.log(addressBook.getAllContacts());