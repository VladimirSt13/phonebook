import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  padding: 20px;
  gap: 12px;

  flex-direction: column;
  max-width: 320px;
  align-items: center;
  border: 1px solid #b7b7bf;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  & span {
    font-weight: 700;
    display: block;
    margin-bottom: 5px;
  }
`;

export const Input = styled.input`
  display: block;
  padding: 5px;
  width: 300px;
`;

export const Button = styled.button`
  padding: 5px 10px;
`;
