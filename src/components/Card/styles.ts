import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px 16px;
  margin-bottom: 16px;
`;

export const ClientContainer = styled.View`
  align-items: center;
`;

export const ClientName = styled.Text`
  font-size: 16px;
  font-weight: 700;  
`;

export const ClientSalary = styled.Text`
  font-size: 14px;
  font-weight: 400;
`;

export const IconsContainer = styled.View`
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;