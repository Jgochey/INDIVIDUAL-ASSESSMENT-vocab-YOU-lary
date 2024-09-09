/* eslint-disable import/order */
import { signIn } from '../utils/auth';
// eslint-disable-next-line no-unused-vars
import firebase from 'firebase';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">LOGIN</button>';
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);

  if (domString.includes('LOGIN')) {
    document.querySelector('#navigation').style.display = 'none';
    document.querySelector('#cards').style.display = 'none';
    document.querySelector('#app').style.display = 'block';
    document.querySelector('#app').innerHTML = `

    <h1 id="welcome">Welcome to Vocab-YOU-lary!</h1>

    <hr />
  `;
  }
};

export default loginButton;
