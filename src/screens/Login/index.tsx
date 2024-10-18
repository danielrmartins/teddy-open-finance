import { useNavigation } from "@react-navigation/native";
import { Button } from "@components/Button";

import { Container, TextInput, Title } from "./styles";

export function Login() {
  const navigate = useNavigation();

  function onPressButton() {
    navigate.navigate('clients');
  }
  
  return (
    <Container>
      <Title>Olá, seja bem vindo!</Title>
      <TextInput placeholder="Digite o seu nome:" />
      <Button onPress={onPressButton}/>
    </Container>
  );
}
