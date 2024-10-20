import { ThemeProvider } from 'styled-components/native';
import { Button } from '@components/Button';
import { fireEvent, render } from '@testing-library/react-native';

import theme from '../theme/index';


describe('Button', () => {
  it('should render a primary button with large size', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
      <Button onPress={() => {}} text="Click me" />
      </ThemeProvider>
    );

    const button = getByText('Click me');

    expect(button).toBeDefined();
  })

  it('should render a secondary button with small size', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button onPress={() => {}} text="Click me" type="secondary" size="small" />
      </ThemeProvider>
    );

    const button = getByText('Click me');

    expect(button).toBeDefined();
  })

  it('should call onPress when button is pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button onPress={onPress} text="Click me" />
      </ThemeProvider>
    );

    const button = getByText('Click me');
    fireEvent.press(button);

    expect(onPress).toHaveBeenCalled();
  })
});