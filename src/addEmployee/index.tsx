// import React, { useState } from 'react';
// import {
//   TextField,
//   Button,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
// } from '@mui/material';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
// import { SelectChangeEvent } from '@mui/material/Select';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   department: string;
//   workPhone: string;
//   joiningDate: Date | null;
//   bloodGroup: string;
//   about: string;
//   location: string;
//   mobileNo: string;
//   salaryRevisionDate: Date | null;
//   expertise: string;
//   jobDescription: string;
// }

// interface FormErrors {
//   [key: string]: boolean;
// }

// const MyForm: React.FC = () => {
//   const initialFormData: FormData = {
//     firstName: '',
//     lastName: '',
//     department: '',
//     workPhone: '',
//     joiningDate: null,
//     bloodGroup: '',
//     about: '',
//     location: '',
//     mobileNo: '',
//     salaryRevisionDate: null,
//     expertise: '',
//     jobDescription: '',
//   };

//   const initialFormErrors: FormErrors = {
//     firstName: false,
//     lastName: false,
//     department: false,
//     workPhone: false,
//     joiningDate: false,
//     bloodGroup: false,
//     about: false,
//     location: false,
//     mobileNo: false,
//     salaryRevisionDate: false,
//     expertise: false,
//     jobDescription: false,
//   };

//   const [formData, setFormData] = useState<FormData>(initialFormData);
//   const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleDateChange = (date: Date | null, fieldName: string) => {
//     setFormData({
//       ...formData,
//       [fieldName]: date,
//     });
//   };

//   const handleSelectChange = (
//     e: SelectChangeEvent<string | unknown>,
//     fieldName: string
//   ) => {
//     setFormData({
//       ...formData,
//       [fieldName]: e.target.value as string,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const newFormErrors: FormErrors = { ...initialFormErrors };
//     let hasErrors = false;

//     Object.keys(formData).forEach((key) => {
//       if (formData[key as keyof FormData] === '' || formData[key as keyof FormData] === null) {
//         newFormErrors[key] = true;
//         hasErrors = true;
//       } else {
//         newFormErrors[key] = false;
//       }
//     });

//     setFormErrors(newFormErrors);

//     if (!hasErrors) {
//       console.log('Form data:', formData);
//       // Perform submit logic here
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <TextField
//         name="firstName"
//         label="First Name"
//         value={formData.firstName}
//         onChange={handleInputChange}
//         error={formErrors.firstName}
//         helperText={formErrors.firstName ? 'Required field' : ''}
//         required
//       />
//       <TextField
//         name="lastName"
//         label="Last Name"
//         value={formData.lastName}
//         onChange={handleInputChange}
//         error={formErrors.lastName}
//         helperText={formErrors.lastName ? 'Required field' : ''}
//         required
//       />
//       <FormControl>
//         <InputLabel>Department</InputLabel>
//         <Select
//           name="department"
//           value={formData.department}
//           onChange={(e) => handleSelectChange(e, 'department')}
//           error={formErrors.department}
//           required
//         >
//           <MenuItem value="">Select Department</MenuItem>
//           {/* Add other MenuItem elements */}
//         </Select>
//       </FormControl>
//       <LocalizationProvider dateAdapter={AdapterDateFns}>
//         <DatePicker
//           label="Joining Date"
//           value={formData.joiningDate}
//           onChange={(date) => handleDateChange(date, 'joiningDate')}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               error={formErrors.joiningDate}
//               helperText={formErrors.joiningDate ? 'Required field' : ''}
//             />
//           )}
//           required
//         />
//         <DatePicker
//           label="Salary Revision Date"
//           value={formData.salaryRevisionDate}
//           onChange={(date) => handleDateChange(date, 'salaryRevisionDate')}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               error={formErrors.salaryRevisionDate}
//               helperText={formErrors.salaryRevisionDate ? 'Required field' : ''}
//             />
//           )}
//           required
//         />
//       </LocalizationProvider>
//       <Button variant="contained" color="primary" type="submit">
//         Save
//       </Button>
//       <Button
//         variant="contained"
//         onClick={() => console.log('Back button clicked')}
//       >
//         Back
//       </Button>
//     </form>
//   );
// };

// export default MyForm;






import React, { useState } from 'react';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { SelectChangeEvent } from '@mui/material/Select';

interface FormData {
  firstName: string;
  lastName: string;
  department: string;
  workPhone: string;
  joiningDate: Date | null;
  bloodGroup: string;
  about: string;
  location: string;
  mobileNo: string;
  salaryRevisionDate: Date | null;
  expertise: string;
  jobDescription: string;
}

interface FormErrors {
  [key: string]: boolean;
}

const MyForm: React.FC = () => {
  const initialFormData: FormData = {
    firstName: '',
    lastName: '',
    department: '',
    workPhone: '',
    joiningDate: null,
    bloodGroup: '',
    about: '',
    location: '',
    mobileNo: '',
    salaryRevisionDate: null,
    expertise: '',
    jobDescription: '',
  };

  const initialFormErrors: FormErrors = {
    firstName: false,
    lastName: false,
    department: false,
    workPhone: false,
    joiningDate: false,
    bloodGroup: false,
    about: false,
    location: false,
    mobileNo: false,
    salaryRevisionDate: false,
    expertise: false,
    jobDescription: false,
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date: Date | null, fieldName: string) => {
    setFormData({
      ...formData,
      [fieldName]: date,
    });
  };

  const handleSelectChange = (
    e: SelectChangeEvent<string | unknown>,
    fieldName: string
  ) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value as string,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newFormErrors: FormErrors = { ...initialFormErrors };
    let hasErrors = false;

    Object.keys(formData).forEach((key) => {
      if (formData[key as keyof FormData] === '' || formData[key as keyof FormData] === null) {
        newFormErrors[key] = true;
        hasErrors = true;
      } else {
        newFormErrors[key] = false;
      }
    });

    setFormErrors(newFormErrors);

    if (!hasErrors) {
      console.log('Form data:', formData);
      // Perform submit logic here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="firstName"
        label="First Name"
        value={formData.firstName}
        onChange={handleInputChange}
        error={formErrors.firstName}
        helperText={formErrors.firstName ? 'Required field' : ''}
        required
      />
      <TextField
        name="lastName"
        label="Last Name"
        value={formData.lastName}
        onChange={handleInputChange}
        error={formErrors.lastName}
        helperText={formErrors.lastName ? 'Required field' : ''}
        required
      />
      <FormControl>
        <InputLabel>Department</InputLabel>
        <Select
          name="department"
          value={formData.department}
          onChange={(e) => handleSelectChange(e, 'department')}
          error={formErrors.department}
          required
        >
          <MenuItem value="">Select Department</MenuItem>
          {/* Add other MenuItem elements */}
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Joining Date"
          value={formData.joiningDate}
          onChange={(date) => handleDateChange(date, 'joiningDate')}
          renderInput={(params) => (
            <TextField
              {...params}
              error={formErrors.joiningDate}
              helperText={formErrors.joiningDate ? 'Required field' : ''}
            />
          )}
          required
        />
        <DatePicker
          label="Salary Revision Date"
          value={formData.salaryRevisionDate}
          onChange={(date) => handleDateChange(date, 'salaryRevisionDate')}
          renderInput={(params) => (
            <TextField
              {...params}
              error={formErrors.salaryRevisionDate}
              helperText={formErrors.salaryRevisionDate ? 'Required field' : ''}
            />
          )}
          required
        />
      </LocalizationProvider>
      {/* Other form elements */}
      <Button variant="contained" color="primary" type="submit">
        Save
      </Button>
      <Button
        variant="contained"
        color="default"
        onClick={() => console.log('Back button clicked')}
      >
        Back
      </Button>
    </form>
  );
};

export default MyForm;
