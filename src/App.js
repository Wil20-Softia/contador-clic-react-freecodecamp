import Logo from './imagenes/freecodecamp-logo.png';
import './App.css';
import Boton from './Componentes/Boton';
import Contador from './Componentes/Contador';
import React from 'react';

class App extends React.Component{
  constructor(){
      super();
      this.state = {
          numClics: 0 
      };

      /* Para que permanesca el reconocimiento del this
      para que se sepa que el metodo pertence a la clase*/

      this.manejarClic = this.manejarClic.bind(this);
      this.reiniciarContador = this.reiniciarContador.bind(this);
  }
  manejarClic(){
      this.setState(({numClics}) => ({ numClics: numClics + 1 }));
  }
  reiniciarContador(){
      this.setState({ numClics: 0 });
  }
  render(){
    return (
      <div className="App">
        <div className="freecodecamp-logo-contenedor">
          <img 
              className='freecodecamp-logo'
              src={Logo}
              alt='Logo de freeCodeCamp' 
          />
        </div>
        <div className='contenedor-principal'>
          <Contador numClics={this.state.numClics} />
          <Boton
              texto='Clic'
              esBotonDeClic={true} 
              manejarClic={this.manejarClic} />

          <Boton
              texto='Reiniciar'
              esBotonDeClic={false} 
              manejarClic={this.reiniciarContador} />
        </div>
      </div>
    );
  }
}

export default App;
