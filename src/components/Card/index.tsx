import { PencilSimple, Plus, Trash } from "phosphor-react-native";

import { ClientContainer, ClientName, ClientSalary, Container, IconsContainer } from "./styles";

type IClient = {
  id: string;
  name: string;
  salary: number;
  companyValuation: number;
};

type CardProps = {
  client: IClient;
};

export function Card({ client }: CardProps) {
  return (
    <Container>
      <ClientContainer>
        <ClientName>{client.name}</ClientName>
        <ClientSalary>{`Salário: ${client.salary.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} `}</ClientSalary>
        <ClientSalary>{`Empresa: ${client.companyValuation.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} `}</ClientSalary>
      </ClientContainer>
      <IconsContainer>
        <Plus size={17} weight='bold' />
        <PencilSimple size={20} weight='bold' />
        <Trash size={20} weight='bold' color='red' />
      </IconsContainer>
    </Container>
  );
}