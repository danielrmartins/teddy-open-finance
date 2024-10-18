
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Text, View } from 'react-native';
import { useFonts } from '@expo-google-fonts/inter';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { HouseSimple, List, Minus, PencilSimple, Plus, SquaresFour, Trash, User } from 'phosphor-react-native'
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <>
      <StatusBar translucent backgroundColor='transparent'/>
      {fontsLoaded ? <Routes /> : <ActivityIndicator />} 
          {/* <List size={24} color='gray' /> 
          <Plus size={17} weight='bold' />
          <PencilSimple size={20} weight='bold' />
          <Trash size={20} weight='bold' color='red' />
          <HouseSimple size={20} weight='fill' />
          <User size={20} weight='fill' color='#EE7D46'/>
          <SquaresFour size={20} weight='fill' />
          <Minus size={20} weight='bold' color='red'/>
          <Text>Open up App.tsx to start working on your app!</Text> */}
    </>
  );
}
