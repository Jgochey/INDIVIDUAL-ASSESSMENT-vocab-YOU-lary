/* eslint-disable import/order */
import { signIn } from '../utils/auth';
// eslint-disable-next-line no-unused-vars
import firebase from 'firebase';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">LOGIN</button>';
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
