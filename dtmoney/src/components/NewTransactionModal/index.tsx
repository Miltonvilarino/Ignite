import React from "react";
import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  return (
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
    <Container>
      <h2>Cadastrar Transação</h2>

      <input placeholder="Titulo" />

      <input placeholder="Valor" type="number" />

      <input placeholder="Categoria" />

      <button type="submit">Cadastrar</button>

    </Container>
    </Modal>
  );
};

export default NewTransactionModal;
