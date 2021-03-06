import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const ContactSeeds = [
  {
    first: 'Bryant',
    last: 'Sanchez',
    address: '123 road',
    telephone: '808-123-4522',
    email: 'abc@hawaii.edu',
    favorite: false,
    group: ''
  },
  {
    first: 'John',
    last: 'Jacob',
    address: '321 road',
    telephone: '909-123-4522',
    email: 'cba@hawaii.edu',
    favorite: false,
    group: ''
  },
  {
    first: 'KK',
    last: 'Reddick',
    address: '300 road',
    telephone: '707-123-4522',
    email: 'pts@hawaii.edu',
    favorite: false,
    group: ''
  },
  {
    first: 'TEST TEST',
    last: 'TESTING',
    address: '300 road',
    telephone: '707-123-4522',
    email: 'pts@hawaii.edu',
    favorite: false,
    group: ''
  },
  {
    first: 'MONGO',
    last: 'MONGO',
    address: '300 road',
    telephone: '707-123-4522',
    email: 'pts@hawaii.edu',
    favorite: false,
    group: ''
  },

];

/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(ContactSeeds, function seedContacts(contact) {
    Contacts.insert(contact);
  });
}
