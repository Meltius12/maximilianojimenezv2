import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './Components/navbar';
import FluidExample from './Components/Fondo';
import Footer from './Components/Footer';
import ControlledCarousel from './Components/Courosel';
function App() {
  return (
    <div className="App">
      <ColorSchemesExample></ColorSchemesExample>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FluidExample></FluidExample>
      </header>
      
      <div className='Section'>
      <ControlledCarousel></ControlledCarousel>
      </div>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
