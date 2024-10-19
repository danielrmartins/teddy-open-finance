import { PencilSimple, Plus, Trash } from "phosphor-react-native";
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
  openModalDelete: (client: IClient) => void;
  openModalEdit: (client: IClient) => void;
};

export function Card({ client, openModalDelete,openModalEdit }: CardProps) {
  return (
    <Container>
      <ClientContainer>
        <ClientName>{client.name}</ClientName>
        <ClientSalary>{`Salário: ${client.salary.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} `}</ClientSalary>
        <ClientSalary>{`Empresa: ${client.companyValuation.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} `}</ClientSalary>
      </ClientContainer>
      <IconsContainer>
        <Plus size={17} weight='bold' />
        <TouchableOpacity onPress={() => openModalEdit(client)}>
          <PencilSimple size={20} weight='bold' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openModalDelete(client)}>
          <Trash size={20} weight='bold' color='red' />
        </TouchableOpacity>
      </IconsContainer>
    </Container>
  );
}