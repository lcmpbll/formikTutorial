import { Formik, Form } from 'formik';
import { Box, Typography, TextField, Button } from '@mui/material';
import * as Yup from 'yup';

const SignUpForm = () => {
  return (
    <Formik 
      
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
  
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or fewer')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must bet 20 characters or fewer.')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required')
      })}
      onSubmit={( values )=> {
        alert(JSON.stringify(values, null, 2));
      }}
      
    >
    {({values, errors, handleChange, handleBlur, touched, handleSubmit}) => 
    <Box sx={{m: '20px', padding: '8px'}}>
      <Form>
        <Box m='20px' >
          <Typography m='20px'>New User</Typography>
          <TextField
            fullWidth
            variant='filled'
            label='First Name'
            id='firstName'
            name='firstName'
            type='text'
            onChange={handleChange}
            value={values.firstName}
            onBlur={handleBlur}
          />
          {touched.firstName && errors.firstName ? <Box>{errors.firstName}</Box> : null}
        </Box>
        <Box m='20px'>
          <TextField
            fullWidth
            variant='filled'
            label='First Name'
            id='lastName'
            name='lastName'
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          {touched.lastName && errors.lastName ? <Box>{errors.lastName}</Box> : null}
        </Box>
        <Box m='20px'>
          <TextField
            fullWidth
            variant='filled'
            label='Email Address'
            id='email'
            name='email'
            type='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {touched.email && errors.email ? <Box>{errors.email}</Box> : null}
        </Box>
        <Button type='submit'>Submit</Button>
      </Form>
      </Box>
    }
    </Formik>
    
  );
};

export default SignUpForm;