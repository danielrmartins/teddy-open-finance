import styled from "styled-components/native";

export const ModalOverlay = styled.View`
  background-color: rgba(0, 0, 0, 0.7);
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalContainer = styled.View`
  background-color: #7A7A7A;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  width: 100%;
  padding: 40px 20px;
`;

export const TitleContent = styled.View`
  padding: 0 0 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;

export const ModalContent = styled.View`
  gap: 20px;
`;

