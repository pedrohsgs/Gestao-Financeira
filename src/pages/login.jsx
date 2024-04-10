import React, { useState } from 'react';
import '../components/login/index.css'

export function Login () {

      return (
        <div className="login-container">
          <h1>Millionaire Minds</h1>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email"/>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Login</button>
          </form>
          <div className="options">
            <p>Ou</p>
            <button className="google-button">G Continuar com Google</button>
            <button>Criar uma conta</button>
          </div>
          <p>Esqueceu a Senha?</p>
        </div>
      );
    };
    


