import { Template } from 'meteor/templating';
import { Contacts } from '../../api/contacts/contacts.js';
import './tablesort.js';

Template.Home_Page.helpers({

  /**
   * @returns {*} All of the Contacts documents.
   */
  contactsList() {
    //   console.log(Contacts.find({ group: 'School' }).fetch());
    return Contacts.find();
  },
  star(field, contact) {
    const contactData = Contacts.findOne(contact);
    //console.log(contactData);
    const icon = 'star icon';
    if (contactData[field] === true) {
      return icon;
    }
    return '';
  },
  empty(field, contact) {

    const group = Contacts.find({ group: 'School' }).fetch();
    if (group) {

    }
  }
});

Template.Home_Page.events({
  'click.sortable-table'() {
    $('table').tablesort();
  },
});

Template.Home_Page.onCreated(function onCreated() {
  this.subscribe('Contacts');
});
