// eslint-disable-next-line no-unused-vars
import { deleteVocab, endpoint, getSingleVocab } from '../api/vocabData';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

// TODO Get data for viewVocab

// const getVocabDetails = (firebaseKey) => new Promise((resolve, reject) => {
//   // GET SINGLE Vocab
//   getSingleVocab(firebaseKey).then((Vocabitemect) => { // returns single Vocab itemect
//     getSingleAuthor(Vocabitemect.firebaseKey) // we nest this promise so that we can use the Vocab itemect
//       .then((authoritemect) => resolve({ ...Vocabitemect, authoritemect }));
//   }).catch(reject);
//   // GET AUTHOR
//   // Create an itemect that has Vocab data and an itemect named authoritemect
// });

const getVocabDetails = async (firebaseKey) => { // the async keyword let's JS know this is asynchronous function (promise)
  const vocabObject = await getSingleVocab(firebaseKey); // await stops the code in this function and waits for the response. This is like using .then

  return { ...vocabObject };
};

const viewVocab = (item) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
     <div class="mt-5">
        <i class="fas fa-edit btn btn-info" id="update-Vocab--${item.firebaseKey}"></i>
        <i id="delete-Vocab-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
   </div>
   <div class="text-white ms-5 details">
     <h5>${item.title}</h5>
     Language: <a>${item.language}</a>
     Created on: <a>${item.timeSubmitted}</a>
     <p>${item.definition || ''}</p>
     <hr>  
      </div>
    </div>`;

  renderToDOM('#cards', domString);
};

export { viewVocab, getSingleVocab, getVocabDetails };
