import firebase from 'firebase';
import {
  createVocab, updateVocab, getVocabs, showVocabs
} from '../api/vocabData';
import getTimeStamp from '../components/getTimeStamp';

const formEvents = () => {
  document.querySelector('#cards').addEventListener('submit', (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A Vocab
    if (e.target.id.includes('submit-Vocab')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        timeSubmitted: getTimeStamp(),
        uid: `${firebase.auth().currentUser.uid}`,
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocabs(`${firebase.auth().currentUser.uid}`).then(showVocabs);
        });
      });
    }

    // CLICK EVENT FOR EDITING A Vocab
    if (e.target.id.includes('update-Vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        timeSubmitted: getTimeStamp(),
        uid: `${firebase.auth().currentUser.uid}`,
        firebaseKey,
      };

      updateVocab(payload).then(() => {
        getVocabs(`${firebase.auth().currentUser.uid}`).then(showVocabs);
      });
    }
  });
};

export default formEvents;
