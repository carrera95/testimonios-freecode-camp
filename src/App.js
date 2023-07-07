import './App.css';
import {Testimonio} from './componentes/Testimonio'
import {Testimonio1} from './componentes/Testimonio1';

function App() {
  const obj = {
    name: 'josue',
    pais: 'mexico',
    imagen: 'jose',
    cargo: 'ingeniero en controlla',
    empresa: 'Controlla',
    testimonio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto lo dicen los alumnos </h1>
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='jose'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida'
        />
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='aylin'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        />
        <Testimonio1 
          {...obj}
        />
      </div>
    </div>
  );
}

export default App;
