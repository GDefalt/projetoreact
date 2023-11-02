
import "bootstrap/dist/css/bootstrap.css"

import "./SignIn.css"

import { useState, useEffect } from 'react';


import { handleSubmit } from './formData';




function SignIn() {




  const [redirect, setRedirect] = useState(false); // Adicione aqui


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    date: '',
    state: '',
    country: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
 


    setFormData({
      name: '',
      email: '',
      password: '',
      date: '',
      state: '',
      country: ''
    });



    setRedirect(true);

 
  
  }

  useEffect(() => {
    if (redirect) {
      window.location.href = '/signup';
    }
  }, [redirect]);
  
  return (
    <>
    <form id="signIn" className="formStyles"   onSubmit={handleFormSubmit}>
   <fieldset>

    <h1 className="titleForm">Cadastro</h1>
    <hr className="line" />


   <label htmlFor="name">Nome Completo: </label>
    <input type="text" id="name" name="name"  value={formData.name} 
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} required placeholder="Digite seu nome"/>

    <label htmlFor="email">E-mail: </label>
    <input type="email" id="email" name="email" value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}  placeholder="Example@gmail.com" required/>

    <label htmlFor="password">Senha: </label>
    <input type="password" id="password" name="password" value={formData.password} 
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}  placeholder="Digite sua senha" required/>

    

    <label htmlFor="date">Data de nascimento: </label>
        <input type="date" id="date" name="date"  value={formData.date} 
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}  required/>
  

    </fieldset>

    <fieldset>

 <label htmlFor="validationCustom04" className="form-label">País: </label>
    <select className="form-select w-25 state border border-primary" name="country" id="validationCustom04"  value={formData.country} 
          onChange={(e) => setFormData({ ...formData, country: e.target.value })} required>
      <option selected disabled value="">Escolha...</option>
      <option>Brasil</option>
    </select>
    <div className="invalid-feedback">
      Por favor selecione um País válido.
    </div>

      <label htmlFor="validationCustom04" className="form-label">Estado: </label>
    <select className="form-select w-25 country border border-primary" name="state" id="validationCustom05"  value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })}   required>
      <option selected disabled value="">Escolha...</option>
      <option>São Paulo</option>
    </select>
    <div className="invalid-feedback">
      Por favor selecione um Estado válido.
    </div>
    </fieldset>
    <hr className="line" />
    <button type="submit">Enviar</button>
    </form>



    </>
  )
}

export default SignIn;
