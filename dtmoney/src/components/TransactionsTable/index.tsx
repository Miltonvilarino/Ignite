import React from 'react';

import { Container } from './styles';

const TransactionsTable: React.FC = () => {
  return (
  <Container>
      <table>
          <thead>
              <tr>
                  <th>Titulo</th>
                  <th>Valor</th>
                  <th>Categoria</th>
                  <th>Data</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>aluguel</td>
                  <td className="withdraw" >R$1100</td>
                  <td>Desenvolvimento </td>
                  <td>20/01/2012 </td>
              </tr>
              <tr>
                  <td>Desenvolvimento de website</td>
                  <td className="deposit" >R$1,000</td>
                  <td>Desenvolvimento </td>
                  <td>20/01/2012 </td>
              </tr>
          </tbody>
      </table>
  </Container>
  )
}

export default TransactionsTable;