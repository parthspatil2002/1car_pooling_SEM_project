import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';

const carpoolData = [
  // Example carpool data structure
  { date: '2023-12-12', count: 3 },
  { date: '2023-12-14', count: 7 },
];

const CarpoolDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const getIntensityColor = (count) => {
    if (count <= 2) return '#e0f7fa';
    if (count <= 4) return '#b2ebf2';
    if (count <= 6) return '#80deea';
    return '#4dd0e1';
  };

  const renderDate = (date) => {
    const trip = carpoolData.find((trip) => trip.date === date.toISOString().split('T')[0]);
    const color = trip ? getIntensityColor(trip.count) : null;

    return (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: color || 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {trip && trip.count}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        minHeight: '100vh',
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: 'cover',
      }}
    >
      <img src="/logo.jpg" alt="CampusConnect Logo" style={{ width: '100px', height: '100px', marginBottom: '20px' }} />
      <Typography variant="h5" gutterBottom>
        Carpool Dashboard
      </Typography>

      <CalendarPicker
        date={selectedDate}
        onChange={(newDate) => setSelectedDate(newDate)}
        renderDay={(day, _selectedDate, _dayInCurrentMonth, dayComponent) =>
          renderDate(day) || dayComponent
        }
      />
    </Box>
  );
};

export default CarpoolDashboard;
