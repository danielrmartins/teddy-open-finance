import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export const Header = styled.View`
  height: 70px;
  padding: 0 20px;
  background-color: #fff;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 2px;
  border-bottom-color: #0000001A;
`;

export const Logo = styled.Image`
  width: 70px;
  height: 35px;
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const Text = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  text-align: center;
  padding: 0 0 20px;
`;