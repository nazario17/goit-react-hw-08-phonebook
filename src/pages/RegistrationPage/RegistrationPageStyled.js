import styled from 'styled-components';
import { Field } from 'formik';

import { ErrorMessage } from 'formik';

export const Error = styled(ErrorMessage)`
  position: absolute;
  width: 150px;
  top: 36px;
  color: red;
  font-size: 12px;
  margin-top: 5px;
  text-align: start;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  width: 100px;
  position: relative;
`;

export const Input = styled(Field)`
  margin-bottom: 15px;
`;
