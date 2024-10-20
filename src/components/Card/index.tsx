import { Minus, PencilSimple, Plus, Trash } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

import { ClientContainer, ClientName, ClientSalary, Container, IconsContainer } from "./styles";

type IClient = {
  id: string;
  name: string;
  salary: number;
  companyValuation: number;
};

type CardProps = {
  client: IClient;
  openModalDelete?: (client: IClient) => void;
  openModalEdit?: (client: IClient) => void;
  addClient?: (client: IClient) => void;
  storedClients?: boolean;
  removeStoredClient?: (client: IClient) => void;
};

export function Card({ client, openModalDelete,openModalEdit, addClient, storedClients, removeStoredClient }: CardProps) {
 return (
    <Container>
      <ClientContainer>
        <ClientName>{client.name}</ClientName>
        <ClientSalary>{`Salário: ${client.salary.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} `}</ClientSalary>
        <ClientSalary>{`Empresa: ${client.companyValuation.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} `}</ClientSalary>
      </ClientContainer>
      <IconsContainer storedClients={storedClients}>
        {!storedClients && (
          <>
            <TouchableOpacity onPress={() => addClient?.(client)}>
              <Plus size={17} weight='bold' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openModalEdit?.(client)}>
              <PencilSimple size={20} weight='bold' />
            </TouchableOpacity>
          </>
        )}
        {!storedClients ? (
        <TouchableOpacity onPress={() => openModalDelete?.(client)}>
          <Trash size={20} weight='bold' color='red' />
        </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => removeStoredClient?.(client)}>
            <Minus size={20} weight='bold' color='red'/>
          </TouchableOpacity>
        )}
      </IconsContainer>
    </Container>
  );
}