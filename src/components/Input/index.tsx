import { InputContainer, TextInput, Title } from "./styles";

interface InputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  title: string;
}

export function Input({ placeholder, onChangeText, value, title }: InputProps) {
  return (
    <InputContainer>
      <Title>{title}</Title>
      <TextInput placeholder={placeholder} onChangeText={onChangeText} value={value} />
    </InputContainer>
  );
}