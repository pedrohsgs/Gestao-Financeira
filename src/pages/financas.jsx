import React from 'react';
import '../components/financas/index.css';

export function Financas({ transactions }) {
  // Função para calcular o saldo total
   const calculateTotal = () => {
    return transactions.reduce((total, transaction) => total + transaction.amount, 0);
  }; 

  return (

    <main>
        
        <div className="financas">
      <h1>Administração de Finanças</h1>
      <div>
        <h2>Transações</h2>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction}>
              <strong>Descrição:</strong> {transaction.description}, <strong>Valor:</strong> ${transaction.amount}, <strong>Data:</strong> {transaction.date}
            </li>
          ))}
        </ul>
      </div>
      
       </div>
    </main>
    
   
  );
}
