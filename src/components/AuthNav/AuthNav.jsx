import { Box, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
export const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex', outlined: '1' }}>
      <List>
        <ListItem button={true}>
          <Link to="/register">Sign in</Link>
        </ListItem>
      </List>
      <List>
        <ListItem button={true}>
          <Link to="/register">Log in</Link>
        </ListItem>
      </List>
      {/* <ul>
        <li>
          <Link to="register">Sign in</Link>
        </li>
        <li>
          <Link to="register">Login</Link>
        </li>
      </ul> */}
    </Box>
  );
};
