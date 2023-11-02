import './SignUp.css'

import { getDadosUsuarios } from '../SignIn/LocalStorageUtils';


function SignUp() {

  function handleLoginSubmit(e) {
    e.preventDefault();
    const username = document.getElementById('loginName').value;
    const password = document.getElementById('passwordName').value;

    const users = getDadosUsuarios();
    const user = users.find(u => u.name === username && u.password === password);

    if (user) {
      alert('Login bem-sucedido!');
      window.location.href = '/dashboard'; // Tem que mudar o caminho depois sr mamas
    } else {
      alert('Usuário ou senha incorretos');
    }
  }

  return(
    <>
      <form id="signUp" className="formStyles" onSubmit={handleLoginSubmit}> 
        <fieldset>
          <h1 className="titleForm">Login</h1>
          <hr className="line" />
          <label htmlFor="loginName">Usuário:</label>
          <input type="text" name="loginName" id="loginName" placeholder='Digite seu usuário...'/>
          <label htmlFor="passwordName">Senha:</label>
          <input type="password" name="passwordName" id="passwordName" placeholder='Digite sua senha...'/>
        </fieldset>
        
        <button type='submit'>Entrar</button>
      </form>
    </>
  );
}

export default SignUp;