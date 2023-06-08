import { useSelector } from 'react-redux';
// import { userSelector } from 'redux/users/selectors';
import { authSelector } from 'Redux/auth/authSelectors';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'Redux/auth/authOperations';
import { Box, Typography, Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelector);
  return (
    <>
      <Box sx={{ display: 'flex', spacing: '3' }}>
        <Typography variant="h6">Welcome, {userName}</Typography>
        <Button variant="" onClick={() => dispatch(logoutThunk())}>
          Log out
        </Button>
      </Box>
    </>
  );
};
