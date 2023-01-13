import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { MdPersonSearch } from 'react-icons/md';
import { FilterForm, FilterInput, FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';


import { selectFilters } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const filterId = nanoid();
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  return (
    <Formik>
      <FilterForm>
        <FilterLabel htmlFor={filterId}>
          <MdPersonSearch size="25" />
          <FilterInput
            id={filterId}
            type="text"
            value={filter}
            onChange={({ currentTarget: { value } })=> dispatch(setFilter (value))}
          />
        </FilterLabel>
      </FilterForm>
    </Formik>
  );
};