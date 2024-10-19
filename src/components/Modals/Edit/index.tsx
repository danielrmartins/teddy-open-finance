import { Modal, TouchableWithoutFeedback } from "react-native";

import { ModalContainer, ModalContent, ModalOverlay, Title, TitleContent } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

interface EditModalProps {
  visible: boolean;
  onCancel: () => void;
}

export function EditModal({ visible, onCancel }: EditModalProps) {
  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onCancel}>
      <TouchableWithoutFeedback onPress={onCancel}>
        <ModalOverlay>
          <TouchableWithoutFeedback>
            <ModalContainer>
              <TitleContent>
                <Title>Editar cliente</Title>
              </TitleContent>
              <ModalContent>
                <Input placeholder="Digite o nome:" title="Nome" />
                <Input placeholder="Digite o salário:" title="Salário" />
                <Input placeholder="Digite o valor da empresa:" title="Valor da empresa" />
                <Button onPress={onCancel} text="Editar cliente"/>
              </ModalContent>
            </ModalContainer>
          </TouchableWithoutFeedback>
        </ModalOverlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
}