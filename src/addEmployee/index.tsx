import React, { useState } from 'react';
import { Container, TextField, Button, Grid, Typography } from '@mui/material';
import 'react-datepicker/dist/react-datepicker.css';
import { BloodGroups, Departments, Locations } from '../utiles/dropdown';
import SelectField from '../Components';
import InputField from '../Components/inputField';
import DateInput from '../Components/DateInput';
import { useNavigate } from 'react-router-dom';
import { post } from '../helpers/apiHelper';

const Add: React.FC = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [joiningDate, setJoiningDate] = useState<Date | null>(null);
  const [department, setDepartment] = useState<string>('');
  const [bloodGroup, setBloodGroup] = useState<string>('');
  const [bloodGroupError, setBloodGroupError] = useState<string>('');
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [about, setAbout] = useState('');
  const [aboutError, setAboutError] = useState('');
  const [location, setLocation] = useState<string>('');
  const [locationError, setLocationError] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');
  const [salaryRevisionDate, setSalaryRevisionDate] = useState<Date | null>(null);
  const [isSalaryDatePickerOpen, setIsSalaryDatePickerOpen] = useState(false);
  const [expertise, setExpertise] = useState('');
  const [expertiseError, setExpertiseError] = useState('');
  const [workPhone, setWorkPhone] = useState('');
  const [workPhoneError, setWorkPhoneError] = useState('');

  const [jobDescription, setJobDescription] = useState('');
  const [jobDescriptionError, setJobDescriptionError] = useState('');


  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
    validateFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
    validateLastName(event.target.value);
  };

  const validateFirstName = (value: string) => {
    if (!value.trim()) {
      setFirstNameError('First Name is required');
    } else {
      setFirstNameError('');
    }
  };

  const validateLastName = (value: string) => {
    if (!value.trim()) {
      setLastNameError('Last Name is required');
    } else {
      setLastNameError('');
    }
  };

  const handleDateChange = (date: Date | null) => {
    setJoiningDate(date);
    setIsDatePickerOpen(false);
  };

  const handleDepartmentChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDepartment(event.target.value as string);
  };

  const handleBloodGroupChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedBloodGroup = event.target.value as string;
    setBloodGroup(selectedBloodGroup);
    if (!selectedBloodGroup.trim()) {
      setBloodGroupError('Blood Group is required');
    } else {
      setBloodGroupError('');
    }
  };

  const handleLocationChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedLocation = event.target.value as string;
    setLocation(selectedLocation);
    if (!selectedLocation.trim()) {
      setLocationError('Blood Group is required');
    } else {
      setLocationError('');
    }
  };



  const handleSave = () => {
    validateFirstName(firstName);
    validateLastName(lastName);
    validateAbout(about);
    validateMobileNumber(mobileNumber);
    validateExpertise(expertise);
    validateJobDescription(jobDescription);
    validateWorkPhone(workPhone);

    const isFormValid =
      !firstNameError &&
      !lastNameError &&
      !aboutError &&
      !mobileNumberError &&
      !expertiseError &&
      !jobDescriptionError &&
      !workPhoneError &&
      firstName.trim() &&
      lastName.trim() &&
      joiningDate &&
      about.trim() &&
      department &&
      bloodGroup &&
      location &&
      mobileNumber &&
      expertise &&
      jobDescription &&
      workPhone &&
      salaryRevisionDate;

    if (isFormValid) {
      const employeeData = {
        firstName,
        lastName,
        joiningDate,
        department,
        bloodGroup,
        location,
        mobileNumber,
        salaryRevisionDate,
        about,
        expertise,
        jobDescription,
        workPhone,
      };

      post('/Employee', employeeData)
        .then((response) => {
          console.log('Employee created:', response);
          navigate('/home');
        })
        .catch((error) => {
          console.error('Error creating employee:', error);
          // Handle error here, display a message, etc.
        });
    } else {
      if (!bloodGroup.trim()) {
        setBloodGroupError('Blood Group is required');
      } else {
        setBloodGroupError('');
      }
      if (!location.trim()) {
        setLocationError('Location is required');
      } else {
        setLocationError('');
      }
    }
  };

  const handleBack = () => {
    navigate('/home')
  }
  const handleAboutChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAbout(event.target.value);
    validateAbout(event.target.value);
  };

  const validateAbout = (value: string) => {
    if (!value.trim()) {
      setAboutError('About is required');
    } else {
      setAboutError('');
    }
  };
  const handleMobileNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMobileNumber(value);
    validateMobileNumber(value);
  };

  const validateMobileNumber = (value: string) => {
    const isValidMobile = /^\d{10}$/.test(value);
    if (!isValidMobile) {
      setMobileNumberError('Mobile number must be 10 digits');
    } else {
      setMobileNumberError('');
    }
  };
  const handleSalaryDateChange = (date: Date | null) => {
    setSalaryRevisionDate(date);
    setIsSalaryDatePickerOpen(false);
  };

  const handleExpertiseChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setExpertise(event.target.value);
    validateExpertise(event.target.value);
  };

  const handleJobDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescription(event.target.value);
    validateJobDescription(event.target.value);
  };

  const validateExpertise = (value: string) => {
    if (!value.trim()) {
      setExpertiseError('Expertise is required');
    } else {
      setExpertiseError('');
    }
  };

  const validateJobDescription = (value: string) => {
    if (!value.trim()) {
      setJobDescriptionError('Job description is required');
    } else {
      setJobDescriptionError('');
    }
  };

  const handleWorkPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setWorkPhone(value);
    validateWorkPhone(value);
  };

  const validateWorkPhone = (value: string) => {
    const isValidWorkPhone = /^\d{10}$/.test(value);
    if (!isValidWorkPhone) {
      setWorkPhoneError('Work Phone must be 10 digits');
    } else {
      setWorkPhoneError('');
    }
  };

  const departments = Object.values(Departments);
  const bloodGroups = Object.values(BloodGroups);
  const locations = Object.values(Locations);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" style={{ marginTop: '10px', backgroundColor: '#1976d2', color: 'white', padding: '10px' }}>
        Add Employee
      </Typography>
      <form noValidate>
        <Grid container spacing={2}>
          <Grid item xl={6}>
            <InputField
              value={firstName}
              onChange={handleFirstNameChange}
              error={!!firstNameError}
              helperText={firstNameError}
              label="First Name"
              name="firstName"
              id="firstName"
            />
            <InputField
              id="lastName"
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              error={!!lastNameError}
              helperText={lastNameError}
            />
            <SelectField
              value={department}
              onChange={handleDepartmentChange}
              options={departments}
              label="Department"
              name="department"
            />
            <SelectField
              value={bloodGroup}
              onChange={handleBloodGroupChange}
              options={bloodGroups}
              label="Blood Group"
              name="bloodGroup"
              error={!!bloodGroupError}
              helperText={bloodGroupError}
            />
            <DateInput
              id="joiningDate"
              label="Joining Date"
              value={joiningDate}
              onClick={() => setIsDatePickerOpen(true)}
              onChange={handleDateChange}
              open={isDatePickerOpen}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              multiline
              rows={2}
              id="about"
              label="About"
              name="about"
              value={about}
              onChange={handleAboutChange}
              error={!!aboutError}
              helperText={aboutError}
            />

          </Grid>

          <Grid item xl={6}>
            <SelectField
              value={location}
              onChange={handleLocationChange}
              options={locations}
              label="Location"
              name="location"
              error={!!locationError}
              helperText={locationError}
            />
            <InputField
              id="mobileNumber"
              label="Mobile Number"
              name="mobileNumber"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              error={!!mobileNumberError}
              helperText={mobileNumberError}
            />
            <DateInput
              id="salaryRevisionDate"
              label="Salary Revision Date"
              value={salaryRevisionDate}
              onClick={() => setIsSalaryDatePickerOpen(true)}
              onChange={handleSalaryDateChange}
              open={isSalaryDatePickerOpen}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              multiline
              rows={2}
              id="expertise"
              label="Expertise"
              name="expertise"
              value={expertise}
              onChange={handleExpertiseChange}
              error={!!expertiseError}
              helperText={expertiseError}
            />

            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              multiline
              rows={2}
              id="jobDescription"
              label="Job Description"
              name="jobDescription"
              value={jobDescription}
              onChange={handleJobDescriptionChange}
              error={!!jobDescriptionError}
              helperText={jobDescriptionError}
            />
            <InputField
              id="workPhone"
              label="Work Phone"
              name="workPhone"
              value={workPhone}
              onChange={handleWorkPhoneChange}
              error={!!workPhoneError}
              helperText={workPhoneError || ' '}
            />

          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xl={6}>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSave}
            >
              Save
            </Button>
          </Grid>
          <Grid item xl={6}>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="secondary"
              onClick={handleBack}
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Add;

