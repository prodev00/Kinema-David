import { useCallback, useState } from 'react';
import { Box, Button, CircularProgress, Dialog, DialogTitle, Grid } from '@mui/material';
import * as Yup from 'yup';

import FormContainer from './FormContainer';
import TextField from './TextField';
import { ContactType, ObjectType } from '../types';
import axios from '../axios';

const EmptyContact = {
  _id: null,
  firstname: '',
  lastname: '',
  phone: ''
}

type ContactFormType = {
  contact?: ContactType | null
  onClose: () => void
  onAdd: () => void
}

const ContactForm: React.FC<ContactFormType> = ({ contact = EmptyContact, onClose, onAdd }) => {
  const [loading, setLoading] = useState(false);
  const title = contact ? 'Edit Contact' : 'Add New Contact';

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().nullable().required('First Name is required'),
    lastname: Yup.string().nullable().required('Last Name is required'),
    phone: Yup.string().nullable().required('Phone Number is required'),
  });

  const initialValues = {
    firstname: contact?.firstname || '',
    lastname: contact?.lastname || '',
    phone: contact?.phone || '',
  };

  const handleFormSubmit = useCallback(async (values: ObjectType) => {
    try {
      setLoading(true);
      if (!contact?._id) await axios.post('/contact', values);
      else await axios.put(`/contact/${contact?._id}`, values);
      onAdd();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }, [contact, onAdd])

  return (
    <Dialog open={true} onClose={onClose}>
      {loading && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          sx={{ width: '100%', height: '100%', bgcolor: 'grey.500' }}
        >
          <CircularProgress />
        </Box>
      )}

      <DialogTitle>{title}</DialogTitle>
      <Box px={2}>
        <FormContainer
          validation={validationSchema}
          defaultValues={initialValues}
          onSuccess={handleFormSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="firstname"
                variant="outlined"
                label="First Name"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                name="lastname"
                variant="outlined"
                label="Last Name"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                name="phone"
                variant="outlined"
                label="Phone Number"
              />
            </Grid>

            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end" pb={2}>
                <Button onClick={onClose} sx={{ mr: 2 }}>Cancel</Button>
                <Button type="submit" variant="contained">Ok</Button>
              </Box>
            </Grid>
          </Grid>
        </FormContainer>
      </Box>
    </Dialog>
  )
}

export default ContactForm
