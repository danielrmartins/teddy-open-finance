import { List } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logoImg from '@assets/teddy-logo.png';
import { api } from "@services/api";
import { Card } from "@components/Card";
import { DeleteModal } from "@components/Modals/Delete";
import { EditModal } from "@components/Modals/Edit";
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
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedClient, setSelectedClient] = useState<IClient | null>(null);

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

  const openModalDelete = (client: IClient) => {
    setSelectedClient(client);
    setIsDeleteModalVisible(true);
  };

  const handleDelete = async () => {
    if (selectedClient) {
      try {
        await api.delete(`/users/${selectedClient.id}`);
        setClients(clients.filter(client => client.id !== selectedClient.id));
      } catch (error) {
        console.error('Error deleting client:', error);
      }

      setIsDeleteModalVisible(false);
    }
  }

  const openModalEdit = (client: IClient) => {
    setSelectedClient(client);
    setIsEditModalVisible(true);
  }

  const renderClients = () => {
    if (loading) {
      return <ActivityIndicator />
    }

    return clients.map(client => (
      <Card key={client.id} client={client} openModalDelete={openModalDelete} openModalEdit={openModalEdit} />
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
      <DeleteModal 
        clientName={selectedClient?.name} 
        visible={isDeleteModalVisible} 
        onCancel={() => setIsDeleteModalVisible(false)}
        onConfirm={() => handleDelete()}
      />
      <EditModal visible={isEditModalVisible} onCancel={() => setIsEditModalVisible(false)}/>
      {/* <DrawerModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} /> */}
    </SafeAreaView>
  )
}