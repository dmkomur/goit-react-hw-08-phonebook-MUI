import { StyledSearchWrap, StyledSearchInput } from './Search.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'Redux/phoneSlice';
import { Button, Box, TextField, Grid } from '@mui/material';

export const Search = () => {
  const dispatcher = useDispatch();
  const handleChange = e => {
    dispatcher(setFilter(e.target.value));
  };
  return (
    <>
      <Grid container justify="center">
        <Grid item lg={12}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={handleChange}
            placeholder="enter name here"
            color="secondary"
            label="Name"
          />
        </Grid>
      </Grid>
    </>
  );
};
