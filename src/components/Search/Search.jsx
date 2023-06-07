import { StyledSearchWrap, StyledSearchInput } from './Search.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'Redux/phoneSlice';
import { Button } from '@mui/material';

export const Search = () => {
  const dispatcher = useDispatch();
  const handleChange = e => {
    dispatcher(setFilter(e.target.value));
  };
  return (
    <StyledSearchWrap>
      <h3>Search contact by name</h3>
      <StyledSearchInput
        type="text"
        onChange={handleChange}
        placeholder="enter name here"
      />
      <Button variant="text" color="primary">
        Text
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </StyledSearchWrap>
  );
};
