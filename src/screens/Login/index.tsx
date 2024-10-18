import { Button } from "@components/Button";
import { Container, TextInput, Title } from "./styles";

export function Login() {

  function onPressButton() {
    console.log("Button pressed");
  }
  
  return (
    <Container>
      <Title>Olá, seja bem vindo!</Title>
      <TextInput placeholder="Digite o seu nome:" />
      <Button onPress={onPressButton}/>
    </Container>
  );
}
