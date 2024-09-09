import renderToDOM from '../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
        <a class="navbar-brand title" href="#">Vocab-YOU-lary!</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="all-entries">
                All Entries <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="js-entries">JavaScript</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="python-entries">Python</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="other-entries">Other</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="new-entries">Create a new Entry</a>
            </li>
            <li>
            <input
              class="form-control mr-sm-2"
              id="search"
              placeholder="Search Vocab Entries"
              aria-label="Search"
            />
            </li>
                      <li>
          <span class="navbar-text">
          
            <button id="navbarLogout" class="btn btn-danger">SIGNOUT</button>
         
          </span>
          </li>
          </ul>

        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
