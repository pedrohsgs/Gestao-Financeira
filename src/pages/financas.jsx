import React, { useEffect, useState } from 'react';
import '../components/financas/index.css';
import axios from 'axios';

export function Financas({ transactions }) {
  // Função para calcular o saldo total
   const calculateTotal = () => {
    return transactions.reduce((total, transaction) => total + transaction.amount, 0);
  }; 

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7000/Financas")
    .then(response => {
      console.log(response.data);
      setData(response.data);
    });
  },);
  return (

    <main className='container'>
        
      <div className="financas">
      <h1>Finanças</h1><h2>Entradas</h2>
      <div className='informações'> 
      
        <ul >
         
          
          {data.map((transaction) => (
            <li key={transaction}>

              <strong className='data'>Data:</strong>  {transaction.data}
              <strong className='descricao'>Descrição:</strong> {transaction.descricao}, 
              <strong className='valor'>Valor:</strong> {transaction.valor},
               
            </li>
          ))}
        </ul>
      </div>
      
       </div>
    </main>
    
   
  );
}
