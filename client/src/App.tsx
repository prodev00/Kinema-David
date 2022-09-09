import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import './App.css';

const App = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
};

export default App;
