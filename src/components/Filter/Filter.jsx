import { Box } from 'src/components/commons/Box';
import { FilterTitle } from './Filter.styled';
import { Input } from 'src/components/ContactContainer/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFiltersQuery } from 'src/redux/contacts/selectors';
import { setFiltersQuery } from 'src/redux/contacts/fitersSlice';

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
