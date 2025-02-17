import logo from './logo.svg';
import './App.css';
import { Button , Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button as="a" variant="success">
          this is a button 
        </Button>
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </header>
    </div>
  );
}

export default App;
