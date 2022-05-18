import './Navbar.css';
import Navbar from './Navbar';
import logo from './logo.svg';
import './App.css';

import Hello, {TemparetureInCelcius} from './Hello';
import Demo from './Demo';
import Welcome from './Props';
import './Props.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar/>
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
        
      </header>
      
        <Hello/>
        <TemparetureInCelcius/>
        <Demo/>
        <Welcome name ="IT'S " xyz = " OK "/>
    </div>
    
  );
}

export default App;
