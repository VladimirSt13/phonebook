import { Box } from 'components/Commons/Box';
import { FilterTitle } from './Filter.styled';
import { Input } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFiltersQuery } from 'redux/selectors';
import { setFiltersQuery } from 'redux/fitersSlice';

export const Filter = () => {
  const query = useSelector(selectFiltersQuery);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setFiltersQuery(e.target.value.toLowerCase().trim()));
  };

  return (
    <Box>
      <FilterTitle>Find contacts by name</FilterTitle>
      <Input
        type="text"
        name="filter"
        value={query}
        onChange={handleChangeFilter}
      />
    </Box>
  );
};
