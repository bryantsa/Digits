import { Template } from 'meteor/templating';
import { Contacts } from '../../api/contacts/contacts.js';

Template.Home_Page.helpers({

  /**
   * @returns {*} All of the Contacts documents.
   */
  contactsList() {
    return Contacts.find();
  },
  star(field, contact) {
    const contactData = Contacts.findOne(contact);
    const icon = 'star icon';
    if (contactData[field] === true) {
      return icon;
    }
    return '';
  },
});

Template.Home_Page.onCreated(function onCreated() {
  this.subscribe('Contacts');
});
