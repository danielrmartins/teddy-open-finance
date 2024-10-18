
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Text, View } from 'react-native';
import { useFonts } from '@expo-google-fonts/inter';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { Hamburger } from 'phosphor-react-native'

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <View>
      {!fontsLoaded ? <ActivityIndicator /> : (
        <>
          <Hamburger size={32} color="black" weight="bold" /> 
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </>
      )} 
    </View>
  );
}
