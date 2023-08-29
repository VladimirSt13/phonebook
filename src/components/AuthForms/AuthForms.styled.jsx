import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  position: relative;
  & span {
    font-weight: 700;
    display: block;
    margin-bottom: 5px;
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
`;

export const Error = styled.p`
  font-size: 14px;
  font-style: italic;
  color: red;
  position: absolute;
  right: 30px;
  top: 50%;
  padding: 0;
  margin: 0;
  line-height: 1;
`;

export const VisibilityButton = styled.button`
  position: absolute;
  right: 0;
  top: 39%;
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  & svg {
    width: 16px;
    height: 16px;
    color: gray;
  }
`;
