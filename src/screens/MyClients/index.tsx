import { List } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Button } from "@components/Button";
import { Card } from "@components/Card";
import DrawerModal from "@components/Drawer";
import logoImg from '@assets/teddy-logo.png';

import { Container, Header, Logo, SafeArea, Text } from "./styles";

type IClient = {
  id: string;
  name: string;
  salary: number;
  companyValuation: number;
};

export function MyClients() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [clients, setClients] = useState<IClient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const storedClients = await AsyncStorage.getItem('@teddy:clients');

        if (storedClients) {
          setClients(JSON.parse(storedClients));
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchClients();
  }, []);

  const removeStoredClient = async (client: IClient) => {
    const newClients = clients.filter(c => c.id !== client.id);

    try {
      await AsyncStorage.setItem('@teddy:clients', JSON.stringify(newClients));

      setClients(newClients);
    } catch (error) {
      console.error('Error removing client:', error);
    }
  }

  const removeAllStoredClients = async () => {
    try {
      await AsyncStorage.removeItem('@teddy:clients');

      setClients([]);
    } catch (error) {
      console.error('Error removing clients:', error);
    }
  }

  const renderClients = () => {
    if (loading) {
      return <ActivityIndicator />
    }

    return (
      <FlatList data={clients} keyExtractor={client => client.id} renderItem={({ item }) => (
        <Card client={item} storedClients removeStoredClient={removeStoredClient}/>
      )}  contentContainerStyle={{ width: '100%', flexGrow: 1 }} showsVerticalScrollIndicator={false} />
    )
  }

  return (
    <SafeArea>
      <Header>
        <Logo source={logoImg}/>
        <TouchableOpacity onPress={() => setShowDrawer(true)}>
          <List size={24} color='gray' />
        </TouchableOpacity>
      </Header>
      <Container>
        <Text>Clientes selecionados:</Text>
        {renderClients()}
        {clients && (
          <Button size="small" type="secondary" onPress={removeAllStoredClients} text="Limpar clientes selecionados"/>
        )}
      </Container>
      <DrawerModal visible={showDrawer} onClose={() => setShowDrawer(false)} selected="myClients"/>
    </SafeArea>
  );
}