import React, { useState } from 'react';
import '../components/gerenciamento/index.css';
import axios from 'axios';

// eslint-disable-next-line react/prop-types

export function Gerenciamento() {

  const [formDataAdicionar, setFormDataAdicionar] = useState ({
    data: "",
    categoria: "",
    descricao: "",
    valor: "",
  });

  const handleSubmitAdicionar = async (event) => {
    
    event.preventDefault();

    try{
      const response = await axios.post ("http://localhost:7000/Financas", formDataAdicionar);
      alert ("Adicionado com sucesso")
    }
    catch(err){
        console.log("Erro ao enviar o formulário");
        console.error(err);
    }
  }

  const handleImputChange = (event) => {
    const {name, value } = event.target;
    setFormDataAdicionar((prevFormData) => ({...prevFormData, [name]:value}));
  }


  return (
    <section className='gerenciamento'>
      <div>
        <h1>Gerenciamento Financeiro</h1>

        <form onSubmit={handleSubmitAdicionar}>
          <div className='data'>
            <label htmlFor="date">Data:</label>
            <input
              type="date"
              id="date"
              name="data"
              value={formDataAdicionar.data}
              onChange={handleImputChange}
            />
          </div>
          <div className='categoria'>
            <label htmlFor="category">Categoria:</label>
            <input
              type="text"
              id="category"
              name="categoria"
              value={formDataAdicionar.categoria}
              onChange={handleImputChange}
            />
          </div>
          <div className='descricao'>
            <label htmlFor="description">Descrição:</label>
            <input
              type="text"
              id="description"
              name="descricao"
              value={formDataAdicionar.descricao}
              onChange={handleImputChange}
            />
          </div>
          <div className='valor'>
            <label htmlFor="amount">Valor:</label>
            <input
              type="number"
              id="amount"
              name="valor"
              value={formDataAdicionar.valor}
              onChange={handleImputChange} 
            />
          </div>
          <button type='submit'>Adicionar</button>
        </form>
      </div>
    </section>
  );
};
