import { model, Schema } from 'mongoose';

const contactSchema: Schema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  }
});

const Contact = model('Contact', contactSchema)

export default Contact
