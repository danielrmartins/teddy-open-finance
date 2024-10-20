import { Container, Text } from "./styles";

type ButtonProps = {
  type?: "primary" | "secondary";
  onPress: () => void;
  text: string;
  size?: "small" | "large";
};

export function Button({ type = 'primary', onPress, text, size = 'large' }: ButtonProps) {
  return (
    <Container type={type} onPress={onPress}>
      <Text type={type} size={size}>{text}</Text>
    </Container>
  );
}