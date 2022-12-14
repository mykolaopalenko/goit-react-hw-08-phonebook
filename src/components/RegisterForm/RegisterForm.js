import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { Wrapper } from './RegisterForm.styled';

const RegisterForm = () => {
   const dispatch = useDispatch();
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const handleMouseDownPassword = event => {
      event.preventDefault();
   };

   const handleChange = ({ target: { name, value } }) => {
      switch (name) {
         case 'name':
            setName(value);
            break;
         case 'email':
            setEmail(value);
            break;
         case 'password':
            setPassword(value);
            break;
         default:
            break;
      }
   };

   const handleSubmit = e => {
      e.preventDefault();
      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
   };

   return (
      <form onSubmit={handleSubmit} autoComplete="off">
         <Wrapper>
            <TextField
               sx={{ m: 1, width: '100%' }}
               label="Name"
               variant="filled"
               required
               value={name}
               name="name"
               type="text"
               onChange={handleChange}
            />

            <TextField
               sx={{ m: 1, width: '100%' }}
               label="Email"
               variant="filled"
               required
               name="email"
               value={email}
               type="email"
               onChange={handleChange}
            />

            <FormControl sx={{ m: 1, width: '100%' }} variant="filled">
               <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
               <FilledInput
                  required
                  id="filled-adornment-password"
                  type={'password'}
                  value={password}
                  name="password"
                  onChange={handleChange}
                  endAdornment={
                     <InputAdornment position="end">
                        <IconButton
                           aria-label="toggle password visibility"
                           onMouseDown={handleMouseDownPassword}
                           edge="end"
                        >
                        </IconButton>
                     </InputAdornment>
                  }
               />
            </FormControl>
            <Button
               type="submit"
               variant="contained"
               sx={{
                  backgroundColor: '#1976d2',
                  opacity: 1,
                  '&:hover': {
                     opacity: 0.8,
                     backgroundColor: '#1976d2',
                  },
               }}
            >
               Register
            </Button>
         </Wrapper>
      </form>
   );
};

export default RegisterForm;
