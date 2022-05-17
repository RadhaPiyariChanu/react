import './Navbar.css';
import Navbar from './Navbar';
import logo from './logo.svg';
import './App.css';
import ClockWithHooks from './ClockwWthHooks';
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
          Hello <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link col-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ClockWithHooks/>
        <Hello/>
        <TemparetureInCelcius/>
        <Demo/>
        <Welcome name ="IT'S " xyz = " OK "/>
        
        
        
       </header>
    </div>
  );
}

export default App;
