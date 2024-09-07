import renderToDOM from '../utils/renderToDom';
import { getVocabs } from '../api/vocabData';

const selectVocab = (vocabId) => {
  let domString = `<label for="vocab">Select a vocab</label>
    <select class="form-control" id="vocab_id" required>
    <option value="">Select a vocab</option>`;

  getVocabs().then((vocabsArray) => {
    vocabsArray.forEach((vocab) => {
      domString += `
          <option
            value="${vocab.firebaseKey}"
            ${vocabId === vocab.firebaseKey ? 'selected' : ''}>
              ${vocab.language}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#cards', domString);
  });
};

export default selectVocab;
