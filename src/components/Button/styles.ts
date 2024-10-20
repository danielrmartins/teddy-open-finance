import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{ type: 'primary' | 'secondary' }>`
  background-color: ${({ type }) => type === 'primary' ? '#EC6724' : '#FFF'};
  padding: 10px;
  border-radius: 4px;
  border-color: ${({ type }) => type === 'secondary' && '#EC6724'};
  border-width: ${({ type }) => type === 'secondary' ? '2px' : '0'};
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Text = styled.Text<{ type: 'primary' | 'secondary', size: 'small' | 'large' }>`
  color: ${({ type }) => type === 'primary' ? '#FFF' : '#EC6724'};
  font-size: ${({ size }) => size === 'small' ? '14px' : '24px'};
  font-weight: 700;
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;