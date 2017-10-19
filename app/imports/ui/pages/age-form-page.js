import { Template } from 'meteor/templating';
import { Form } from '../../api/form/form.js';

Template.Age_Form_Page.helpers({

  /**
   * @returns {*} All of the Form documents.
   */
  FormList() {
    return Form.find();
  },
});
