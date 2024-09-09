import firebase from 'firebase';
import { signOut } from '../utils/auth';
import { getVocabs, showVocabs } from '../api/vocabData';

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#login-form-container').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signOut);
  document.querySelector('#navbarLogout').addEventListener('click', signOut);
  document.querySelector('#google-auth').style.display = 'none';

  if (domString.includes('SIGNOUT')) {
    document.querySelector('#navigation').style.display = 'block';
    document.querySelector('#cards').style.display = 'flex';
    document.querySelector('#welcome').style.display = 'none';
    document.querySelector('#google-auth').style.backgroundColor = 'red';
    document.querySelector('#google-auth').style.border = 'none';
    //     // document.querySelector('#google-auth').style.position = 'abosolute';
    //     // document.querySelector('#google-auth').style.alignSelf = 'right';
    getVocabs(`${firebase.auth().currentUser.uid}`).then(showVocabs);
  }
};

export default logoutButton;
