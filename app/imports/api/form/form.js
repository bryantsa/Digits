import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Form = new Mongo.Collection('Form');

export const FormSchema = new SimpleSchema({
  First: {
    label: 'First',
    type: String,
    max: 20,
  },
  Last: {
    label: 'Last',
    type: String,
    max: 20,
  },
  Age: {
    label: 'Age',
    type: Number,
    max: 3,
  },
});

Form.attachSchema(FormSchema);
