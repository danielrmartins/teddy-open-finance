import { Container, Text } from "./styles";

type ButtonProps = {
  type?: "primary" | "secondary";
  onPress: () => void;
};

export function Button({ type = 'primary', onPress }: ButtonProps) {
  return (
    <Container type={type} onPress={onPress}>
      <Text type={type}>Entrar</Text>
    </Container>
  );
}