import { Container, Text } from "./styles";

type ButtonProps = {
  type?: "primary" | "secondary";
  onPress: () => void;
  text: string;
};

export function Button({ type = 'primary', onPress, text }: ButtonProps) {
  return (
    <Container type={type} onPress={onPress}>
      <Text type={type}>{text}</Text>
    </Container>
  );
}