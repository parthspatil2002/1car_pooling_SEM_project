import React, { useState } from 'react';
import Login from './Login';
import CarpoolForm from './CarpoolForm';
import ConfirmationScreen from './ConfirmationScreen';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = () => setLoggedIn(true);
  const handleConfirm = () => setSubmitted(true);

  return (
    <div>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : submitted ? (
        <ConfirmationScreen />
      ) : (
        <CarpoolForm onConfirm={handleConfirm} />
      )}
    </div>
  );
};

export default App;
