import React, { useState } from 'react';
import { TextField, MenuItem, Button, Box, Typography } from '@mui/material';
import { LocalizationProvider, MobileTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const locations = ['Location 1', 'Location 2', 'Location 3', 'Location 4', 'Location 5'];

const CarpoolForm = ({ onConfirm }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [reachTime, setReachTime] = useState(null);

  const handleFromChange = (event) => {
    setFrom(event.target.value);
    setTo(''); // Reset the 'To' field when 'From' changes
  };

  const handleSubmit = () => {
    onConfirm(); // Call the confirmation function to show the next screen
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          backgroundImage: 'url("/background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        <img
          src="/logo.jpg"
          alt="CampusConnect Logo"
          style={{ width: '100px', height: '100px', marginBottom: '20px' }}
        />
        <Typography variant="h4" color="primary" gutterBottom>
          Carpool with Friends
        </Typography>

        <TextField
          select
          label="From"
          value={from}
          onChange={handleFromChange}
          fullWidth
          margin="normal"
        >
          {locations.map((loc) => (
            <MenuItem key={loc} value={loc}>{loc}</MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          fullWidth
          margin="normal"
        >
          {locations
            .filter((loc) => loc !== from) // Exclude the selected 'From' location
            .map((loc) => (
              <MenuItem key={loc} value={loc}>{loc}</MenuItem>
            ))}
        </TextField>

        <TextField
          select
          label="Number of People"
          value={peopleCount}
          onChange={(e) => setPeopleCount(e.target.value)}
          fullWidth
          margin="normal"
        >
          {[1, 2, 3, 4].map((count) => (
            <MenuItem key={count} value={count}>{count}</MenuItem>
          ))}
        </TextField>

        <MobileTimePicker
          label="Start Time"
          value={startTime}
          onChange={(newValue) => setStartTime(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
        />

        <MobileTimePicker
          label="Reach Time"
          value={reachTime}
          onChange={(newValue) => setReachTime(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
        />

        <Button variant="contained" color="secondary" onClick={handleSubmit} sx={{ marginTop: '20px' }}>
          Submit
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default CarpoolForm;
