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
      
      <div className='App-header' id='Portfolio'>
        <h1>Portfolio</h1>
      <ControlledCarousel></ControlledCarousel>
      </div>
      <section3 className='App-header' id='Sobremí' >
      <h1>Sobre mí</h1>
      <h2>Soy Maximiliano, tengo 18 años y siempre he sido apasionado por la ciencia y
                la tecnología. Desde pequeño, me ha fascinado entender cómo funcionan las cosas
                a mi alrededor, desarmando y reconstruyendo aparatos electrónicos en mi casa. En
                el colegio, destaco en materias como matemáticas y física, y disfruto de los
                desafíos y problemas que estas asignaturas me presentan. Soy una persona curiosa
                y creativa, siempre buscando nuevas soluciones y mejoras para problemas
                cotidianos.</h2>
      </section3>
      <Form id='Form'></Form>
      <Footer></Footer>
    </div>
  );
}

export default App;
