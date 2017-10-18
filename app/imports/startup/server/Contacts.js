import { Contacts } from '../../api/contacts/Contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const ContactSeeds = [
  {
    First: 'Bryant',
    Last: 'Sanchez',
    Address: '123 road',
    Telephone: 8081234522,
    Email: 'abc@hawaii.edu',
  },

];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(ContactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
