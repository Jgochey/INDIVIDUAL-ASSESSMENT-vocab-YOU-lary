import client from '../utils/client';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const endpoint = client.databaseURL;

// GET ALL Vocabs
const getVocabs = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// GET Python Vocabs
const getPythonVocabs = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json?orderBy="language"&equalTo="Python"&orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// GET JavaScript Vocabs
const getJavaScriptVocabs = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json?orderBy="language"&equalTo="JavaScript"&orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// GET Other Vocabs
const getOtherVocabs = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json?orderBy="language"&equalTo="Other"&orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// CREATE Vocab
const createVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET SINGLE Vocab
const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// DELETE Vocab
const deleteVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE Vocab
const updateVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const showVocabs = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.language}</h6>
         <h4 class="card-subtitle mb-2 text-muted">${item.timeSubmitted}</h4>
           <p class="card-text bold">${item.definition}</p>
        <i class="btn btn-success fas fa-eye" id="view-Vocab-btn--${item.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-Vocab--${item.firebaseKey}"></i>
        <i id="delete-Vocab-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>
    </div>`;
  });
  renderToDOM('#cards', domString);
};

export {
  getVocabs,
  createVocab,
  getSingleVocab,
  deleteVocab,
  updateVocab,
  showVocabs,
  endpoint,
  getOtherVocabs,
  getJavaScriptVocabs,
  getPythonVocabs,
};
