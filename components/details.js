// eslint-disable-next-line no-unused-vars
import { deleteVocab, endpoint, getSingleVocab } from '../api/vocabData';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const getVocabDetails = async (firebaseKey) => { // the async keyword let's JS know this is asynchronous function (promise)
  const vocabObject = await getSingleVocab(firebaseKey); // await stops the code in this function and waits for the response. This is like using .then

  return { ...vocabObject };
};

const viewVocab = (item) => {
  clearDom();

  const domString = `
  <div class="card" style="width: 60rem;">
<div class="card-body">
  <h5 class="card-title">${item.title}</h5>
  <h6 class="card-subtitle mb-2 text-muted">Language: ${item.language}</h6>
   <h4 class="card-subtitle mb-2 text-muted">Created on: ${item.timeSubmitted}</h4>
   <hr>
     <p class="card-text bold">${item.definition}</p>
  <i class="btn btn-success fas fa-eye" id="view-Vocab-btn--${item.firebaseKey}"></i>
  <i class="fas fa-edit btn btn-info" id="update-Vocab--${item.firebaseKey}"></i>
  <i id="delete-Vocab-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
</div>
</div>`;

  renderToDOM('#cards', domString);
};

export { viewVocab, getSingleVocab, getVocabDetails };
