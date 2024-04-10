import React, { useState } from 'react';
import '../components/gerenciamento/index.css';

// eslint-disable-next-line react/prop-types

export function Gerenciamento() {
  const [budgets, setBudgets] = useState([]);
  const [newBudget, setNewBudget] = useState({ category: '', amount: 0, date: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBudget({ ...newBudget, [name]: value });
  };

  const handleAddBudget = () => {
    if (newBudget.category && newBudget.amount > 0 && newBudget.date && newBudget.description) {
      setBudgets([...budgets, newBudget]);
      setNewBudget({ category: '', amount: 0, date: '', description: '' });
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  };

  return (
    <section className='gerenciamento'>
      <div>
        <h1>Gerenciamento Financeiro</h1>

        <div className='data'>
          <label htmlFor="date">Data:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={newBudget.date}
            onChange={handleChange}
          />
        </div>

        <div className='categoria'>
          <label htmlFor="category">Categoria:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={newBudget.category}
            onChange={handleChange}
          />
        </div>

        <div className='descricao'>
          <label htmlFor="description">Descrição:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={newBudget.description}
            onChange={handleChange}
          />
        </div>

        <div className='valor'>
          <label htmlFor="amount">Valor:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={newBudget.amount}
            onChange={handleChange}
          />
        </div>

        <button onClick={handleAddBudget}>Adicionar Orçamento</button>

      </div>
    </section>
  );
};
