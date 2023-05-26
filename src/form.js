import React, { useState, useEffect } from 'react';


const FormPage  = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [refCode, setRefCode] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    const email = params.get('email');

    if (ref) {
      setRefCode(ref);
    }
    if (email) {
      setEmail(email);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !phoneNumber || !email || !refCode) {
        setFormError('Please fill in all fields');
        return;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
        setFormError('Please enter a valid phone number');
        return;
      }

    const formData = {
        firstName,
        lastName,
        phoneNumber,
        email,
        refCode,
      };

    console.log('Form submitted!');
    console.log('Data:', formData);

    const url = `https://www.example.com?ref=${refCode}&email=${email}`;
    window.open(url, '_blank');
  };

  const isValidPhoneNumber = (number) => {
    // You can implement your own validation logic here
    // This is just a simple example to check if the number contains only digits
    return /^\d+$/.test(number);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>
      RegistrationForm
      </h1>
      <label>
        First Name
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="form-input"
        />
      </label>
      <br />
      <label>
        Last Name
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="form-input"
        />
      </label>
      <br />
      <label>
        Phone Number
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="form-input"
        />
      </label>
      <br />
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
      </label>
      <br />
      <label>
        Ref Code
        <input
          type="text"
          value={refCode}
          onChange={(e) => setRefCode(e.target.value)}
          className="form-input"
        />
      </label>
      <br/>
      {formError && <p className="form-error">{formError}</p>}
      <button type="submit" className="button">Submit</button>
    </form>
  );
};

export default FormPage ;
