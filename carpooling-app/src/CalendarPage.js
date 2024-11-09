import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const CalendarPage = ({ carpoolDates, onProceed }) => {
  const getIntensityColor = (count) => {
    if (count === 1) return '#BBDEFB'; // Light blue for 1 student
    if (count === 2) return '#64B5F6'; // Medium blue for 2 students
    if (count === 3) return '#1E88E5'; // Dark blue for 3 students
    return '#0D47A1'; // Very dark blue for 4 or more students
  };

  const renderDate = (date) => {
    const dateString = date.toISOString().split('T')[0];
    const studentCount = carpoolDates[dateString] || 0;
    const color = studentCount > 0 ? getIntensityColor(studentCount) : 'transparent';

    return (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          borderRadius: '4px',
        }}
      >
        {studentCount > 0 ? studentCount : ''}
      </Box>
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
        <Typography variant="h5" gutterBottom>
          Available Carpools Calendar
        </Typography>

        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          disablePast
          renderDay={(day, selectedDate, dayInCurrentMonth, dayComponent) =>
            renderDate(day) || dayComponent
          }
        />

        <Button
          variant="contained"
          color="primary"
          onClick={onProceed}
          sx={{ marginTop: '20px' }}
        >
          Proceed to Fill Carpool Details
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default CalendarPage;
