import { Modal, TouchableWithoutFeedback } from "react-native";

import { Button, ButtonText, Divider, ModalContainer, ModalOverlay, Subtitle, Title, TitleContent } from "./styles";

interface DeleteModalProps {
  clientName: string | undefined;
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export function DeleteModal ({ clientName, visible, onCancel, onConfirm  }: DeleteModalProps) {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onCancel}>
      <TouchableWithoutFeedback onPress={onCancel}>
        <ModalOverlay>
          <TouchableWithoutFeedback>
            <ModalContainer>
              <TitleContent>
                <Title>Excluir cliente:</Title>
                <Subtitle>{`Tem certeza que deseja excluir o cliente ${clientName}?`}</Subtitle>
              </TitleContent>
              <Divider />
              <Button onPress={onConfirm}>
                <ButtonText>Excluir cliente</ButtonText>
              </Button>
              <Divider />
              <Button onPress={onCancel}>
                <ButtonText>Cancelar</ButtonText>
              </Button>
            </ModalContainer>
          </TouchableWithoutFeedback>
        </ModalOverlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
}