import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './Components/navbar';
import FluidExample from './Components/Fondo';
import Footer from './Components/Footer';
import ControlledCarousel from './Components/Courosel';
import Form  from './Components/Form';
function App() {
  return (
    <div className="App">
      <ColorSchemesExample></ColorSchemesExample>
      <header className="App-header">
        <FluidExample></FluidExample>
        <h1>Maximiliano Jimenez</h1>
        <h2>Tecnico Informatico</h2>
      </header>
      
      <div className='App-header' id='home'>
        <h1>Portfolio</h1>
      <ControlledCarousel></ControlledCarousel>
      </div>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}

export default App;
