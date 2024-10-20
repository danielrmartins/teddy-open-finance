import { Container, Text } from "./styles";

type ButtonProps = {
  type?: "primary" | "secondary";
  onPress: () => void;
  text: string;
  size?: "small" | "large";
  testId?: string;
};

export function Button({ type = 'primary', onPress, text, size = 'large', testId }: ButtonProps) {
  return (
    <Container type={type} onPress={onPress} testID={testId}>
      <Text type={type} size={size}>{text}</Text>
    </Container>
  );
}