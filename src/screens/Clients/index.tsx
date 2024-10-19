import { List } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import logoImg from '@assets/teddy-logo.png';
import { api } from "@services/api";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { DeleteModal } from "@components/Modals/Delete";
import { EditOrCreateModal } from "@components/Modals/Edit";
import { Pagination } from "@components/Pagination";
import DrawerModal from "@components/Drawer";
import { BoldText, Container, Content, Header, Logo, SafeArea, Text } from "./styles";

export interface IClient {
  id: string;
  name: string;
  salary: number;
  companyValuation: number;
}[]

export function Clients() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [clients, setClients] = useState<IClient[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedClient, setSelectedClient] = useState<IClient | null>(null);

  useEffect(() => {
    async function fetchClients() {
      try {
        const { data } = await api.get('/users', { params: { page, limit }});
        
        setClients(data.clients);
        setTotalPages(data.totalPages);
        setPage(data.currentPage);
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

  const closeModalDelete = () => {
    setIsDeleteModalVisible(false);
    setSelectedClient(null);
  }

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

  const closeModalEdit = () => {
    setIsEditModalVisible(false);
    setSelectedClient(null);
  }

  const handleSave = async (client: IClient) => {
    try {
      if (!client.id) {
        const { data } = await api.post('/users', client);

        setClients([...clients, data]);
      } else {
        const { data } = await api.patch(`/users/${client.id}`, client);
        const updatedClients = clients.map(c => c.id === data.id ? data : c);

        setClients(updatedClients);
        setSelectedClient(null);
      }
    } catch (error) {
      console.error('Error updating client:', error);
    }

    setIsEditModalVisible(false);
  }

  const openModalCreate = () => {
    setSelectedClient(null);
    setIsEditModalVisible(true);
  }

  const selectedPickerValue = (value: number) => {
    setLoading(true);
    setLimit(value);
  }

  const onPageChange = (page: number) => {
    setLoading(true);
    setPage(page);
  }

  const renderClients = () => {
    if (loading) {
      return <ActivityIndicator />
    }

    return (
      <FlatList data={clients} keyExtractor={client => client.id} renderItem={({ item }) => (
        <Card client={item} openModalDelete={openModalDelete} openModalEdit={openModalEdit} />
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
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Content>
          <Text style={{ fontSize: 18 }}>
            <BoldText>{clients.length}</BoldText> {clients.length === 1 ? 'cliente encontrado:' : 'clientes encontrados:'}
          </Text>
          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 5 }}>
            <Text style={{ fontSize: 18 }}>Clientes por página:</Text>
            <View style={{ borderWidth: 0.5, borderColor: 'black', borderRadius: 5 }}>
              <Picker selectedValue={limit} onValueChange={selectedPickerValue} style={{ height: 30, width: 100 }}>
                <Picker.Item label="1" value={1} />
                <Picker.Item label="5" value={5} />
                <Picker.Item label="10" value={10} />
                <Picker.Item label="15" value={15} />
              </Picker>
            </View>
          </View>
          {renderClients()}
          <Button text="Criar cliente" type="secondary" onPress={openModalCreate}/>
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={onPageChange} />
        </Content>
      )}
      </Container>
      <DeleteModal 
        clientName={selectedClient?.name} 
        visible={isDeleteModalVisible} 
        onCancel={closeModalDelete}
        onConfirm={() => handleDelete()}
      />
      <EditOrCreateModal 
        visible={isEditModalVisible} 
        onCancel={closeModalEdit} 
        client={selectedClient}
        onSave={handleSave}
      />
      <DrawerModal visible={showDrawer} onClose={() => setShowDrawer(false)} />
    </SafeArea>
  )
}