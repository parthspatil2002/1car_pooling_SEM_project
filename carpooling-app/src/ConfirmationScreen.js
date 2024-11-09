import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ConfirmationScreen = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
      }}
    >
      <img
        src="/logo.jpg"
        alt="CampusConnect Logo"
        style={{ width: '100px', height: '100px', marginBottom: '20px' }}
      />
      <Typography variant="h4" color="black" gutterBottom>
        Your trip slot has been added to the calendar.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Thank you for using our carpooling service!
      </Typography>
      <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
        Go Back to Home
      </Button>
    </Box>
  );
};

export default ConfirmationScreen;
