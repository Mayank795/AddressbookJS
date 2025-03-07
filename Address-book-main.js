const AddressBook = require('./Source/Service/AddressBook');
const Contact = require('./Source/Model/Contact');
const addressBook = new AddressBook();

try {
    const contact1 = new Contact(
        "Ankit", "Patel", "Bhopal", "India", "In", "100001", "9876543210", "yugap1806@gmail.com"
    );
    console.log(addressBook.addContact(contact1)); 

    const contact2 = new Contact(
        "Rakesh", "Soni", "Bhopal", "India","In","1000000","9197979988","rakeshsoni395@gmail.com"
    )
    console.log(addressBook.addContact(contact2)); 
    console.log("All Contacts Before editing", addressBook.getAllContacts());
    console.log(addressBook.editContact("Rakesh", { address: "Pipariya", city: "New York", phone: "9234567890" }));
    console.log("All Contacts After editing", addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "an", "son", "abc", "In", "I", "100A01", "12345", "invalid-email"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}