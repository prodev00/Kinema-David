import { useCallback, useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Container, IconButton, InputBase, Paper, Typography } from '@mui/material';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { ContactType } from '../../types';
import ContactForm from '../../components/ContactForm';
import axios from '../../axios';

const contacts = [
  { firstname: 'Eric', lastname: 'Elliot', phone: '222-555-6575' },
  { firstname: 'Steve', lastname: 'Jobs', phone: '220-454-6754' },
  { firstname: 'Fred', lastname: 'Allen', phone: '210-657-9886' },
  { firstname: 'Steve', lastname: 'Wozniak', phone: '343-675-8786' },
  { firstname: 'Bill', lastname: 'Gates', phone: '343-654-9688' },
]

const Home = () => {
  const [list, setList] = useState<ContactType[]>([]);
  const [contact, setContact] = useState<ContactType | undefined | null>();
  const [loading ,setLoading] = useState(true);
  const [searchTxt, setSearchTxt] = useState('');

  const initializeList = async (text: string = '') => {
    try {
      setLoading(true);
      const response = await axios.get('/contact', { params: { q: text }});
      setList(response?.data || []);
      setLoading(false);
    } catch (err) {
      console.log('Failed Initializing the list: ', err);
      setLoading(false);
    }
  };

  const handleInputChange = (e: any) => {
    console.log('search input: ', e.target.value);
    setSearchTxt(e.target.value);
  };

  const handleAdded = useCallback(() => {
    setContact(undefined);
    initializeList(searchTxt);
  }, [searchTxt]);

  const handleDeleteContact = useCallback(async (id: string) => {
    try {
      await axios.delete(`/contact/${id}`);
      await initializeList(searchTxt);
    } catch (err) {
      console.log('Failed to Delete the contact: ', id);
      setLoading(false);
    }
  }, [searchTxt]);

  useEffect(() => {
    initializeList(searchTxt);
  }, [searchTxt]);

  return (
    <Container sx={{ py: 10 }} maxWidth="sm">
      {loading && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top={0}
          left={0}
          sx={{ width: '100%', height: '100%' }}
        >
          <CircularProgress />
        </Box>
      )}

      <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
        <PermContactCalendarIcon sx={{ fontSize: 46 }} />
        <Typography variant="h4" sx={{ ml: 2 }}>Phone Book App</Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5">Contacts</Typography>

        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => setContact(null)}
        >
          Add Contact
        </Button>
      </Box>

      <Paper
        sx={{
          flex: 1,
          display: 'flex',
          borderRadius: 1,
          borderColor: 'grey.400',
          borderWidth: 1,
          borderStyle: 'solid',
          mb: 2,
        }}
        elevation={0}
      >
        <IconButton>
          <SearchIcon />
        </IconButton>

        <InputBase
          placeholder="Search for contact by last name..."
          sx={{ ml: 1, flex: 1 }}
          onChange={handleInputChange}
          value={searchTxt}
        />
      </Paper>

      <Box borderRadius={1} sx={{ border: 'solid 1px', borderColor: 'grey.400' }}>
        {list.map((contact, index) => (
          <Box
            p={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            key={index}
            sx={{ borderBottom: index < contacts.length - 1 ? 'solid 1px' : 'none', borderColor: 'grey.400' }}
          >
            <Box>
              <Typography variant="h6" sx={{ mb: 0.5 }}>
                {contact.firstname} {contact.lastname}
              </Typography>

              <Box display="flex" alignItems="center">
                <LocalPhoneIcon sx={{ color: 'grey.500', fontSize: 18 }} />
                <Typography sx={{ color: 'grey.500', ml: 1 }} variant="body1">
                  {contact.phone}
                </Typography>
              </Box>
            </Box>

            <Box>
              <Button
                sx={{ minWidth: 'unset', p: 1, ml: 1 }}
                variant="contained"
                color="primary"
                onClick={() => setContact(contact)}
              >
                <EditIcon />
              </Button>

              <Button
                sx={{ minWidth: 'unset', p: 1, ml: 1 }}
                variant="contained"
                color="error"
                onClick={() => handleDeleteContact(contact._id)}
              >
                <DeleteIcon />
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      {(!!contact || contact === null) && (
        <ContactForm
          contact={contact}
          onClose={() => setContact(undefined)}
          onAdd={handleAdded}
        />
      )}
    </Container>
  );
};

export default Home;

