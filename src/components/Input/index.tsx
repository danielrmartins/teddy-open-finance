import { InputContainer, TextInput, Title } from "./styles";

interface InputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string | undefined;
  title: string;
  keyboardType?: "default" | "number-pad";
}

export function Input({ placeholder, onChangeText, value, title, keyboardType = 'default' }: InputProps) {
  return (
    <InputContainer>
      <Title>{title}</Title>
      <TextInput 
        placeholder={placeholder} 
        onChangeText={onChangeText} 
        value={value} 
        keyboardType={keyboardType}
      />
    </InputContainer>
  );
}