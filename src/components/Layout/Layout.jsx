import { Outlet } from 'react-router-dom';
import { AppBar, Box, Typography } from '@mui/material';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
export const Layout = () => {
  return (
    <>
      <header>
        <AppBar position="static">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              pt: '2',
              pb: '2',
              alignItems: 'center',
            }}
          >
            <Typography color="secondary" variant="h4">
              Simple phonebook
            </Typography>
            <AuthNav />
            <UserMenu />
          </Box>
        </AppBar>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
