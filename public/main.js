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

// document.querySelector('#cards').addEventListener('click', (e) => {
//   addVocabForm();
// });

// There should be four(?) sets of filter buttons to sort the cards by language.

// const filter = (array, typeString) => {
//   const someArray = [];

//   array.forEach((item) => {
//     if (item.type === typeString) {
//       someArray.push(item);
//     }
//   });
//   return someArray;
// };

// const allButton = document.querySelector('#all-entries');
// const jsButton = document.querySelector('#js-entries');
// const pythonButton = document.querySelector('#python-entries');
// const otherButton = document.querySelector('#other-entries');

// const languageString = fetch(`${endpoint}/entries.json?orderBy="language"&equalTo="Python"}"`);

// allButton.addEventListener('click', () => {
//   // eslint-disable-next-line no-undef
//   showVocabs(pets);
// });

// jsButton.addEventListener('click', () => {
//   // eslint-disable-next-line no-undef
//   const jsArmy = filter(pets, 'JavaScript');
//   showVocabs(jsArmy);
// });

// pythonButton.addEventListener('click', () => {
//   const pythonArmy = filter(languageString, 'Python');
//   showVocabs(pythonArmy);
// });

// otherButton.addEventListener('click', () => {
//   // eslint-disable-next-line no-undef
//   const otherArmy = filter(pets, 'Other');
//   showVocabs(otherArmy);
// });

// Pets should be languages somehow
