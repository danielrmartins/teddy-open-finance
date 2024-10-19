import styled from "styled-components/native";

export const ModalOverlay = styled.View`
  background-color: rgba(0, 0, 0, 0.7);
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  background-color: #292929;
  border-radius: 10px;
  width: 80%;
`;

export const TitleContent = styled.View`
  padding: 20px;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: 700;
`;

export const Subtitle = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
`;

export const Divider = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: #fff;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #0A84FF;
  text-align: center;
  font-size: 16px;
`;


