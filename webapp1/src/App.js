import logo from './logo.svg';
import './css/App.css';
import StyledNavbar from "./components/Navbar"
import SearchForm from "./components/SearchForm"
import {header, footer, body} from 'react-bootstrap';
function App() {
  return (
    <div>
        <header>
            <StyledNavbar/>
        </header>
      <body class="container" style={{border: "solid"}}>
      <SearchForm>

      </SearchForm>
      </body>
      <footer>
         <p>hehe</p>
      </footer>
    </div>
  );
}

export default App;
