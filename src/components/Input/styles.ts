import styled from "styled-components/native";

export const InputContainer = styled.View`
  width: 100%;
`;

export const TextInput = styled.TextInput`
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  border-width: 2px;
  border-color: #D9D9D9;
  font-size: 16px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: #fff;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #fff;
`;

