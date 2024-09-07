import renderToDOM from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="store"></div>
    <div id="view"></div>
  </div>`;

  renderToDOM('#navigation', domString);
};

export default domBuilder;
