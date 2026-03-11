import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [contactType, setContactType] = useState<string>('');
  const [institutionName, setInstitutionName] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [contactTypeError, setContactTypeError] = useState<boolean>(false);
  const [institutionError, setInstitutionError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');
    setContactTypeError(contactType === '');
    setInstitutionError(contactType === 'institution' && institutionName === '');
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone" : ""}
              />
            </div>

            <div className='form-flex form-flex--type'>
              <FormControl required error={contactTypeError} className='contact-type-select'>
                <InputLabel id="contact-type-label">Reaching out as</InputLabel>
                <Select
                  labelId="contact-type-label"
                  value={contactType}
                  label="Reaching out as"
                  onChange={(e: SelectChangeEvent) => {
                    setContactType(e.target.value);
                    setContactTypeError(false);
                    if (e.target.value !== 'institution') setInstitutionName('');
                  }}
                >
                  <MenuItem value="personal">Individual</MenuItem>
                  <MenuItem value="institution">Institution</MenuItem>
                </Select>
                {contactTypeError && <FormHelperText>Please select an option</FormHelperText>}
              </FormControl>

              {contactType === 'institution' && (
                <TextField
                  required
                  label="Institution Name"
                  placeholder="Which institution?"
                  value={institutionName}
                  onChange={(e) => {
                    setInstitutionName(e.target.value);
                    setInstitutionError(false);
                  }}
                  error={institutionError}
                  helperText={institutionError ? "Please enter the institution name" : ""}
                  className='institution-name-field'
                />
              )}
            </div>

            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={8}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter a message" : ""}
            />

            <Button
              variant="contained"
              endIcon={<SendIcon sx={{ fontSize: '1rem !important' }} />}
              onClick={sendEmail}
              className="send-btn"
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
