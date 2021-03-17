import { useEffect } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { api } from '../../services/api';
import { Container } from './styles';

const Summary: React.FC = () => {

    useEffect(() => {
        api('transactions')
        .then(response => console.log(response.data))
    }, []);

  return (
  <Container >
      <div>
          <header>
              <p>Entradas</p>
              <img src={incomeImg} alt="Entradas" />
          </header>
          <strong>R$1000,00</strong>
      </div>
      <div>
          <header>
              <p>Saidas</p>
              <img src={outcomeImg} alt="Saidas" />
          </header>
          <strong>-R$1000,00</strong>
      </div>
      <div className="highlight-background" >
          <header>
              <p>total</p>
              <img src={total} alt="Total" />
          </header>
          <strong>R$500,00</strong>
      </div>
  </Container>
  );
}

export default Summary;