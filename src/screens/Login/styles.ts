import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

export const TextInput = styled.TextInput`
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  border-width: 2px;
  border-color: #D9D9D9;
  font-size: 24px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;