import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
// import selectVocab from './selectBy';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
        <form id="${obj.firebaseKey ? `update-Vocab--${obj.firebaseKey}` : 'submit-Vocab'}" class="mb-4">
            <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Vocab Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Enter Vocab Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>

        <label for="language">Select Language or Tech</label>
      <div class="form-floating mb-3">
        <select class="form-select" id="language" aria-label="Default select example" required>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button type="submit" id="form-submit" class="btn btn-primary mt-3">Submit Vocab</button>
    </form>`;

  renderToDOM('#cards', domString);
  // selectVocab(`${obj.language || ''}`);
};

export default addVocabForm;

/* <div class="form-group">
<label for="definition">Language/Tech</label>
<input type="text" class="form-control" placeholder="Enter Vocab Language or Tech" id="language">${obj.language || ''}</input>
</div> */
