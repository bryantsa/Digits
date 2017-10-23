import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Contacts = new Mongo.Collection('Contacts');

/**
 * Create the schema for Stuff
 */
export const ContactsSchema = new SimpleSchema({
  First: {
    label: 'First',
    type: String,
    optional: false,
    max: 200,
  },
  Last: {
    label: 'Last',
    type: String,
    optional: false,
    max: 200,
  },
  Address: {
    label: 'Address',
    type: String,
    optional: false,
    max: 200,
  },
  Telephone: {
    label: 'Telephone',
    type: String,
    optional: false,
    max: 200,
  },
  Email: {
    label: 'Email',
    type: String,
    optional: false,
    max: 200,
  },
});

Contacts.attachSchema(ContactsSchema);
