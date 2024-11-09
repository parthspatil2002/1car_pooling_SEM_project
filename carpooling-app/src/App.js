import React, { useState } from 'react';
import Login from './Login';
import CarpoolForm from './CarpoolForm';
import CalendarPage from './CalendarPage';
import ConfirmationScreen from './ConfirmationScreen';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [onCalendarPage, setOnCalendarPage] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [carpoolDates, setCarpoolDates] = useState({}); // Store carpool dates and count

  const handleLogin = () => setLoggedIn(true);
  const handleCalendarProceed = () => setOnCalendarPage(true);
  const handleConfirm = (newDate) => {
    // Update carpool dates count
    setCarpoolDates((prevDates) => ({
      ...prevDates,
      [newDate]: (prevDates[newDate] || 0) + 1,
    }));
    setSubmitted(true);
  };

  return (
    <div>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : !onCalendarPage ? (
        <CalendarPage carpoolDates={carpoolDates} onProceed={handleCalendarProceed} />
      ) : submitted ? (
        <ConfirmationScreen />
      ) : (
        <CarpoolForm onConfirm={handleConfirm} />
      )}
    </div>
  );
};

export default App;
