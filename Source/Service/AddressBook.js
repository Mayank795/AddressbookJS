const Contact = require('../Model/Contact');

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        const isDuplicate = this.contacts.filter(c => 
            c.firstName.toLowerCase() === contact.firstName.toLowerCase() &&
            c.lastName.toLowerCase() === contact.lastName.toLowerCase()
        ).length > 0;

        if (isDuplicate) {
            throw new Error("Duplicate Contact! A person with the same name already exists.");
        }

        this.contacts.push(contact);
        return "Contact added successfully!";
    }

    getAllContacts() {
        return this.contacts;
    } 

    findContactByName(name) {
        return this.contacts.find(c => c.firstName.toLowerCase() === name.toLowerCase());
    }

    editContact(name, updatedDetails) {
        let contact = this.findContactByName(name);
        if (!contact) {
            throw new Error("Contact not found!");
        }

        Object.keys(updatedDetails).forEach(key => {
            if (updatedDetails[key]) {
                contact[key] = updatedDetails[key];
            }
        });

        return "Contact updated successfully!";
    } 
    deleteContact(name) {
        const index = this.contacts.findIndex(c => c.firstName.toLowerCase() === name.toLowerCase());
        if (index === -1) {
            throw new Error("Contact not found!");
        }
        this.contacts.splice(index, 1);
        return "Contact deleted successfully!";
    } 

    countContacts() {
        return this.contacts.reduce((count) => count + 1, 0);
    }
}

module.exports = AddressBook;