import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (email.endsWith('@pilani.bits-pilani.ac.in')) {
      onLogin();
    } else {
      alert('Please use your BITS Pilani email.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          padding: '40px',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '10px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <img
          src="/logo.jpg"
          alt="CampusConnect Logo"
          style={{
            width: '100px',
            height: '100px',
            position: 'absolute',
            top: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '50%',
          }}
        />
        <Typography variant="h5" gutterBottom>
          CampusConnect Login
        </Typography>
        <TextField
          type="email"
          label="University Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
