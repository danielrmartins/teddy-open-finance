import { List } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logoImg from '@assets/teddy-logo.png';
import { api } from "@services/api";
import { Card } from "@components/Card";
// import DrawerModal from "@components/Drawer";

import { Container, Header, Logo } from "./styles";


export interface IClient {
  id: string;
  name: string;
  salary: number;
  companyValuation: number;
}[]

export function Clients() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);
  const [clients, setClients] = useState<IClient[]>([]);
  const [loading, setLoading] = useState(true);
  // const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    async function fetchClients() {
      try {
        const { data } = await api.get('/users', { params: { page, limit }});
        
        setClients(data.clients);
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchClients();
  }, [page, limit]);

  const renderClients = () => {
    if (loading) {
      return <ActivityIndicator />
    }

    return clients.map(client => (
      <Card key={client.id} client={client} />
    ));
  }

  return (
    <SafeAreaView>
      <Header>
        <Logo source={logoImg}/>
        {/* <TouchableOpacity onPress={() => setIsModalVisible(true)}> */}
        <List size={24} color='gray' />
        {/* </TouchableOpacity> */}
      </Header>
      <Container>
      {loading ? <ActivityIndicator /> : <Text>{`${clients.length} ${clients.length === 1 ? 'cliente encontrado' : 'clientes encontrados'}`}</Text>}
      {renderClients()}
      </Container>
      {/* <DrawerModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} /> */}
    </SafeAreaView>
  )
}