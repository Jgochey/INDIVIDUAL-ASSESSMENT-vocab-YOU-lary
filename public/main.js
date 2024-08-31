/* eslint-disable no-unused-vars */
// USE WITH FIREBASE AUTH
import firebase from 'firebase';
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import loginButton from '../components/loginButton';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Welcome to Vocab-YOU-lary!</h1>

    <hr />
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  ViewDirectorBasedOnUserAuthStatus();

  // <button class="btn btn-danger" id="click-me">Login</button><br />

  // document
  //   .querySelector('#click-me')
  //   .addEventListener('click', () => console.warn('You clicked that button!'),
  //     ViewDirectorBasedOnUserAuthStatus());

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();

// There should be four(?) sets of filter buttons to sort the cards by language.
