import { Modal, TouchableWithoutFeedback } from "react-native";

import { ModalContainer, ModalContent, ModalOverlay, Title, TitleContent } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useEffect, useState } from "react";

type IClient = {
  id: string;
  name: string;
  salary: number;
  companyValuation: number;
}

interface EditModalProps {
  visible: boolean;
  onCancel: () => void;
  client: IClient | null;
  onSave: (client: IClient) => void;
}

export function EditOrCreateModal({ visible, onCancel, client, onSave }: EditModalProps) {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [companyValuation, setCompanyValuation] = useState('');

  useEffect(() => {
    if (client) {
      setName(client.name);
      setSalary(client.salary.toString());
      setCompanyValuation(client.companyValuation.toString());
    } else {
      setName('');
      setSalary('');
      setCompanyValuation('');
    }
  }, [client]);

  function handleSave() {
    if (client) {
      onSave({ ...client, name, salary: Number(salary), companyValuation: Number(companyValuation) });
    } else {
      onSave({ name, salary: Number(salary), companyValuation: Number(companyValuation) });
    }
  }

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onCancel}>
      <TouchableWithoutFeedback onPress={onCancel}>
        <ModalOverlay>
          <TouchableWithoutFeedback>
            <ModalContainer>
              <TitleContent>
                <Title>{client ? "Editar cliente" : "Criar cliente"}</Title>
              </TitleContent>
              <ModalContent>
                <Input placeholder="Digite o nome:" title="Nome" value={name} onChangeText={setName}/>
                <Input 
                  placeholder="Digite o salário:" 
                  title="Salário" 
                  value={salary} 
                  keyboardType="number-pad" 
                  onChangeText={setSalary} 
                />
                <Input 
                  placeholder="Digite o valor da empresa:" 
                  title="Valor da empresa" 
                  value={companyValuation} 
                  keyboardType="number-pad" 
                  onChangeText={setCompanyValuation} 
                />
                <Button testId="create" onPress={handleSave} text={client ? "Editar cliente" : "Criar cliente"}/>
              </ModalContent>
            </ModalContainer>
          </TouchableWithoutFeedback>
        </ModalOverlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
}