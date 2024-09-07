import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { getVocabs, showVocabs } from '../api/vocabData';

const startApp = (user) => {
  domBuilder(user); // ADD USER SO THAT YOU CAN UPDATE CALLS
  domEvents(user); // ADD USER SO THAT YOU CAN UPDATE CALLS
  formEvents(user); // ADD USER SO THAT YOU CAN UPDATE CALLS
  navBar();
  logoutButton();
  navigationEvents();

  // TODO: Put all Vocabs on the DOM on App load
  getVocabs(user.uid).then((Vocabs) => showVocabs(Vocabs));
};

export default startApp;
