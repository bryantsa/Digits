import { Template } from 'meteor/templating';
import { Contacts } from '../../api/contacts/Contacts.js';

Template.Home_Page.helpers({

  /**
   * @returns {*} All of the Contacts documents.
   */
  ContactsList() {
    return Contacts.find();
  },
});
