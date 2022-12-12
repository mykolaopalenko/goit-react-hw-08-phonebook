import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { Wrapper } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Wrapper>
        <TextField
          sx={{ m: 1, width: '100%' }}
          id="filled-basic"
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
          Login
        </Button>
      </Wrapper>
    </form>
  );
};
export default LoginForm;
