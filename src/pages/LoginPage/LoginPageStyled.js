import styled from 'styled-components';

import { ErrorMessage } from 'formik';

export const Error = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  text-align: end;
  padding-right: 10px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
