import { List } from "phosphor-react-native";
import { Text } from "react-native";

import { Container, Header, Logo } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

import logoImg from '@assets/teddy-logo.png';
import { useEffect, useState } from "react";
import { api } from "@services/api";


export function Clients() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);

  useEffect(() => {
    console.log('Clients screen');

    async function fetchClients() {
      try {
        const response = await api.get('/users', { params: { page, limit }});
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    }

    fetchClients();
  }, [page, limit]);

  return (
    <SafeAreaView>
      <Header>
         <Logo source={logoImg}/>
        <List size={24} color='gray' />
      </Header>
      <Container>
        <Text>dsadsadasdsadsa</Text>
      </Container>
    </SafeAreaView>
  )
}