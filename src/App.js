import './App.css';
import ListaDeTareas from './Componentes/ListaDeTareas';
import LogoCrispdevps from './Componentes/logo-crispdevps.jsx';
import TareaFormulario from './Componentes/TareaFormulario';

function App() {
  return (
    <div className="App">
      <div className='container-logo'>
       <LogoCrispdevps  />
      </div>
      <div className='lista-principal'>
        <h1> Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
