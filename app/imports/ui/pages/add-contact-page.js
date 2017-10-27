import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Contacts, ContactsSchema } from '../../api/contacts/contacts.js';

const displayErrorMessages = 'displayErrorMessages';


Template.Add_Contact_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = ContactsSchema.namedContext('Add_Contact_Page');
  this.subscribe('Contacts');
});

Template.Add_Contact_Page.helpers({
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  fieldError(fieldName) {
    const invalidKeys = Template.instance().context.invalidKeys();
    const errorObject = _.find(invalidKeys, (keyObj) => keyObj.Name === fieldName);
    return errorObject && Template.instance().context.keyErrorMessage(errorObject.Name);
  },
  favorite() {
    const r = Contacts.findOne(FlowRouter.getParam('_id'));
    const x = r && r.favorite;
    return r && _.map(hobbyList,
        function makeHobbyObject(l) {
          return { label: l, checked: _.contains(x, l) };
        });
  }
});

Template.Add_Contact_Page.events({
  'submit .contact-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    const first = event.target.First.value;
    const last = event.target.Last.value;
    const address = event.target.Address.value;
    const telephone = event.target.Telephone.value;
    const email = event.target.Email.value;

    if (event.target.favorite.checked) {
        favorite.push(event.target.favorite.value);
      };

    const newContactData = { first, last, address, telephone, email };
    console.log(Contacts.findOne({ first: 'Bryant', last: 'Sanchez' }));
    const existing = Contacts.findOne({ first: first, last: last });
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newStudentData reflects what will be inserted.
    ContactsSchema.clean(newContactData);
    instance.context.validate(newContactData);
    if (instance.context.isValid()) {
      if (existing === undefined) {
        Contacts.insert(newContactData);
        instance.messageFlags.set(displayErrorMessages, false);
        FlowRouter.go('Home_Page');
      }
    }
    else {
      console.log('Error found 1');
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});