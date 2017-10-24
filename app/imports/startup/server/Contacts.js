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
    telephone: 8081234522,
    email: 'abc@hawaii.edu',
  },
  {
    first: 'John',
    last: 'Jacob',
    address: '321 road',
    telephone: 9091234522,
    email: 'cba@hawaii.edu',
  },
  {
    first: 'KK',
    last: 'Reddick',
    address: '300 road',
    telephone: 7071234522,
    email: 'pts@hawaii.edu',
  },
  {
    first: 'TEST TEST',
    last: 'TESTING',
    address: '300 road',
    telephone: 7071234522,
    email: 'pts@hawaii.edu',
  },
  {
    first: 'MONGO',
    last: 'MONGO',
    address: '300 road',
    telephone: 7071234522,
    email: 'pts@hawaii.edu',
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(ContactSeeds, function seedContacts(contact) {
    Contacts.insert(contact);
  });
}
