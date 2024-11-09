import React, { useState } from 'react';
import { TextField, MenuItem, Button, Box, Typography } from '@mui/material';
import { LocalizationProvider, DatePicker, MobileTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const locations = ['Location 1', 'Location 2', 'Location 3', 'Location 4', 'Location 5'];

const CarpoolForm = ({ onConfirm }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [reachTime, setReachTime] = useState(null);
  const [tripDate, setTripDate] = useState(null);

  const handleFromChange = (event) => {
    setFrom(event.target.value);
    setTo(''); // Reset the 'To' field when 'From' changes
  };

  const handleSubmit = () => {
    if (!tripDate) {
      alert("Please select a trip date.");
      return;
    }

    // Pass selected date to parent for calendar update
    onConfirm(tripDate.toISOString().split('T')[0]);
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

        <DatePicker
          label="Trip Date"
          value={tripDate}
          onChange={(newValue) => setTripDate(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              margin="normal"
              sx={{ maxWidth: '350px' }}
            />
          )}
        />

        <MobileTimePicker
          label="Start Time"
          value={startTime}
          onChange={(newValue) => setStartTime(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              margin="normal"
              sx={{ maxWidth: '350px' }}
            />
          )}
        />

        <MobileTimePicker
          label="Reach Time"
          value={reachTime}
          onChange={(newValue) => setReachTime(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              margin="normal"
              sx={{ maxWidth: '350px' }}
            />
          )}
        />

        <Button
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
          sx={{ marginTop: '20px', maxWidth: '350px' }}
        >
          Submit
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default CarpoolForm;
