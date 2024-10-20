
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import { useFonts } from '@expo-google-fonts/inter';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components/native';

import { Routes } from './src/routes';
import theme from 'src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      {fontsLoaded ? <Routes /> : <ActivityIndicator />} 
    </ThemeProvider>
  );
}
