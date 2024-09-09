/* eslint-disable no-undef */
import firebase from 'firebase';
import {
  getVocabs, getSingleVocab, showVocabs, deleteVocab
} from '../api/vocabData';
import addVocabForm from '../components/newEntryForm';
import { viewVocab, getVocabDetails } from '../components/details';

const domEvents = () => {
  document.querySelector('#cards').addEventListener('click', (e) => {
    // View vocab
    if (e.target.id.includes('view-Vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getVocabDetails(firebaseKey).then(viewVocab);
    }

    // CLICK EVENT FOR DELETING Vocab
    if (e.target.id.includes('delete-Vocab-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocabs(`${firebase.auth().currentUser.uid}`).then(showVocabs);
        });
      }
    }

    // // CLICK EVENT FOR add vocab form
    // if (e.target.id.includes('add-Vocab-btn')) {
    //   addVocabForm();
    // }
    // CLICK EVENT FOR EDITING vocab
    if (e.target.id.includes('update-Vocab')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj));
    }
  });
};

export default domEvents;
