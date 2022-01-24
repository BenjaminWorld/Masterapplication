import { Router, Route, Link } from 'react-router-dom'
import App from '../App';


function Navbar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="">Return to home page</Link>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="">Home</Link>
              </li>
              <li class="nav-item1">
                <Link class="nav-link" to="Education">Education</Link>
              </li>
              <li class="nav-item2">
                <Link class="nav-link" to="Work_Experience">Work Experience</Link>
              </li>
              <li class="nav-item3">
                <Link class="nav-link" to="Skills">Skills</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    )
  }
  
  export default Navbar;