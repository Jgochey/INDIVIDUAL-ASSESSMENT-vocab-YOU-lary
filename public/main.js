/* eslint-disable no-unused-vars */
// USE WITH FIREBASE AUTH
import firebase from 'firebase';
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import loginButton from '../components/loginButton';
import navBar from '../components/navBar';
import addVocabForm from '../components/newEntryForm';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
// import { showVocabs, endpoint, getVocabs, getJavaScriptVocabs, getOtherVocabs, getPythonVocabs } from '../api/vocabData';

const init = () => {
  document.querySelector('#app').innerHTML = `

    <h1>Welcome to Vocab-YOU-lary!</h1>

    <hr />
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  navBar();

  ViewDirectorBasedOnUserAuthStatus();

  formEvents();

  domEvents();

  navigationEvents();

  // <button class="btn btn-danger" id="click-me">Login</button><br />

  // document
  //   .querySelector('#click-me')
  //   .addEventListener('click', () => console.warn('You clicked that button!'),
  //     ViewDirectorBasedOnUserAuthStatus());

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();

document.querySelector('#new-entries').addEventListener('click', (e) => {
  addVocabForm();
});
