import { Contacts } from '../../api/contacts/contacts.js';
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
  {
    First: 'John',
    Last: 'Jacob',
    Address: '321 road',
    Telephone: 9091234522,
    Email: 'cba@hawaii.edu',
  },
  {
    First: 'KK',
    Last: 'Reddick',
    Address: '300 road',
    Telephone: 7071234522,
    Email: 'pts@hawaii.edu',
  },
  {
    First: 'TEST TEST',
    Last: 'TESTING',
    Address: '300 road',
    Telephone: 7071234522,
    Email: 'pts@hawaii.edu',
  },
  {
    First: 'MONGO',
    Last: 'MONGO',
    Address: '300 road',
    Telephone: 7071234522,
    Email: 'pts@hawaii.edu',
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
