import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from '../css/LoginView.module.css';
import { Button, TextField } from '@mui/material';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login page</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <TextField
          className={s.inputText}
          label="Email"
          variant="standard"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          color="success"
        />

        <TextField
          className={s.inputText}
          label="Password"
          variant="standard"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          color="success"
        />

        <Button type="submit" variant="outlined" color="success">
          Login
        </Button>
      </form>
    </div>
  );
}
