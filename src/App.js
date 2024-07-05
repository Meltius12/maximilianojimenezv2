import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './Components/navbar';
import FluidExample from './Components/Fondo';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <ColorSchemesExample></ColorSchemesExample>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FluidExample></FluidExample>
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
      <Footer></Footer>
    </div>
  );
}

export default App;
