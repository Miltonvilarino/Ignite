import React from 'react';
import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

const Header = ({onOpenNewTransactionModal}: HeaderProps) => {

  return (
      <Container>
          <Content>
          <img src={logoImg} alt="dt money"/>
          <button type="button" onClick={onOpenNewTransactionModal} >nova transição</button>
          </Content>
      </Container>
  );
}

export default Header;