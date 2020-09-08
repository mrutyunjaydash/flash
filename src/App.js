import React, { useEffect, useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import Fade from '@material-ui/core/Fade';

const styles = {
  alert: {
    left: '0',
    pointerEvents: 'none',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: '1500',
  },
  form: {
    alignItems: 'center', 
    backgroundColor: '#fff', 
    borderRadius: '5px', 
    boxShadow: '0 10px 15px 0 #ccc', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-around', 
    width: '400px', 
    height: '300px', 
    margin: '0 auto', 
    padding: '50px 0',
  },
};

const checkEmail = (email) => {
  const flash = {}

  if (email === '') {
    flash.message = 'Please input an email';
    flash.severity = 'warning';
  } else if (email === 'mdash555@gmail.com') {
    flash.message = 'Thats the correct email!';
    flash.severity = 'success';
  } else {
    flash.message = 'Wrong email';
    flash.severity = 'error';
  }

  return flash;
};

const WithFlash = () => {
  const [flash, setFlash] = useState({
    severity: '',
    message: '',
  });
  const [showFlash, setShowFlash] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    setShowFlash(true);
    
    const email = e.target[0].value;

    setFlash(checkEmail(email));

    setTimeout(() => {
      setShowFlash(false);
    }, 5000);

  };
  return (
    <div>
      {
        flash
        ? (
        <Fade in={showFlash}>
          <Alert style={styles.alert} severity={flash.severity}>{flash.message}</Alert>
        </Fade>
        )
        : null
      }
      <div>
        <form style={styles.form} onSubmit={handleSubmit}>
          <p >Enter the correct email</p>
          <input id="email" type="text" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
};

export default WithFlash;