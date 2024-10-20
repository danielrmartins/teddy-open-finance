import { ThemeProvider } from "styled-components/native";
import { Input } from "@components/Input";
import { render } from "@testing-library/react-native";

import theme from "../theme/index";


describe('Input', () => {
  it('should render the input component', () => {
    const { getByText, getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input title="Title" placeholder="Placeholder" onChangeText={() => {}} value="" />
      </ThemeProvider>
    );
    
    expect(getByText('Title')).toBeTruthy();
    expect(getByPlaceholderText('Placeholder')).toBeTruthy();
  });

  it('should render the input component with a number-pad keyboard', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input title="Title" placeholder="Placeholder" onChangeText={() => {}} value="" keyboardType="number-pad" />
      </ThemeProvider>
    );
    
    expect(getByPlaceholderText('Placeholder').props.keyboardType).toBe('number-pad');
  });

  it('should render the input component with a default keyboard', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input title="Title" placeholder="Placeholder" onChangeText={() => {}} value="" keyboardType="default" />
      </ThemeProvider>
    );
    
    expect(getByPlaceholderText('Placeholder').props.keyboardType).toBe('default');
  });

  it('should render the input component with a default keyboard if no keyboardType is provided', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input title="Title" placeholder="Placeholder" onChangeText={() => {}} value="" />
      </ThemeProvider>
      );
    
    expect(getByPlaceholderText('Placeholder').props.keyboardType).toBe('default');
  });

  it('should render the input component with a value', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input title="Title" placeholder="Placeholder" onChangeText={() => {}} value="Value" />
      </ThemeProvider>
    );
    
    expect(getByPlaceholderText('Placeholder').props.value).toBe('Value');
  });

  it('should call the onChangeText function when the text changes', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <Input title="Title" placeholder="Placeholder" onChangeText={onChangeText} value="" />
      </ThemeProvider>
    );
    
    getByPlaceholderText('Placeholder').props.onChangeText('New Value');
    expect(onChangeText).toHaveBeenCalledWith('New Value');
  });
});