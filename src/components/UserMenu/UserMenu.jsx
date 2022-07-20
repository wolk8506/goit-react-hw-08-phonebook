import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import s from '../../css/AppBar.module.css';
import { Button } from '@mui/material';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={s.userBlock}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Welcome, {name}</span>
      <Button
        type="button"
        variant="outlined"
        color="success"
        onClick={() => dispatch(authOperations.logOut())}
      >
        LogOut
      </Button>
    </div>
  );
}
