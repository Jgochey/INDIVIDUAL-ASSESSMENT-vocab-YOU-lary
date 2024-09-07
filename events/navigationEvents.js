/* eslint-disable no-undef */
import firebase from 'firebase';
import {
  getVocabs, showVocabs, getJavaScriptVocabs, getPythonVocabs, getOtherVocabs
} from '../api/vocabData';
// import { emptyvocabs, showvocabs } from '../pages/vocabs';
// import renderToDOM from '../utils/renderToDom';

// navigation events
const navigationEvents = () => {
  // Show all Vocabs
  document.querySelector('#all-entries').addEventListener('click', () => {
    getVocabs(`${firebase.auth().currentUser.uid}`).then(showVocabs);
  });

  // Show JavaScript Vocabs
  document.querySelector('#js-entries').addEventListener('click', () => {
    getJavaScriptVocabs(`${firebase.auth().currentUser.uid}`).then(showVocabs);
  });

  // Show Python Vocabs
  document.querySelector('#python-entries').addEventListener('click', () => {
    getPythonVocabs(`${firebase.auth().currentUser.uid}`).then(showVocabs);
  });

  // Show Other Vocabs
  document.querySelector('#other-entries').addEventListener('click', () => {
    getOtherVocabs(`${firebase.auth().currentUser.uid}`).then(showVocabs);
  });

  // STRETCH: SEARCH
  // document.querySelector('#search').addEventListener('keyup', (e) => {
  //   const searchValue = document.querySelector('#search').value.toLowerCase();
  //   console.warn(searchValue);

  //   // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
  //   if (e.keyCode === 13) {
  //     // MAKE A CALL TO THE API TO FILTER ON THE vocabS
  //     // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
  //     // OTHERWISE SHOW THE STORE

  //     document.querySelector('#search').value = '';
  //   }
  // });
};

export default navigationEvents;
