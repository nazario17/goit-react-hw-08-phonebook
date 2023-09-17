import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { renderFilter } from 'redux/filter/filterSlice';

import { StyledInput } from '../ContactForm/ContactFormStyled';

const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const changeFilterData = event => {
    const { value } = event.currentTarget;
    setFilter(value);
    dispatch(renderFilter(value));
  };

  return (
    <label>
      Find contacts by name
      <StyledInput type="text" value={filter} onChange={changeFilterData} />
    </label>
  );
};

export default Filter;
