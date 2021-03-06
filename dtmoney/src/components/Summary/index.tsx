import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransaction';
import { Container } from './styles';

const Summary: React.FC = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
      if(transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
    }
    return acc;
  }, {
      deposits: 0,
      withdraws: 0,
      total: 0,
  })

  return (
  <Container >
      <div>
          <header>
              <p>Entradas</p>
              <img src={incomeImg} alt="Entradas" />
          </header>
          <strong>{Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(summary.deposits)}</strong>
      </div>
      <div>
          <header>
              <p>Saidas</p>
              <img src={outcomeImg} alt="Saidas" />
          </header>
          <strong>-{Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(summary.withdraws)}</strong>
      </div>
      <div className="highlight-background" >
          <header>
              <p>total</p>
              <img src={total} alt="Total" />
          </header>
          <strong>{Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(summary.total)}</strong>
      </div>
  </Container>
  );
}

export default Summary;