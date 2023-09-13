import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Counter Strike: Global Offensive',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'League Of Legends',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Valorant',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Dota 2',
      cor: '#E06B69',
    },
  ])

  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarPlayer(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id != id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime) {
    setTimes([ ...times, { ...novoTime, id: uuidv4() } ])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
        return colaborador
      }
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      <section className='times'>
        <h1>Players</h1>
        {times.map(time => 
          <Time
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDoTime}
            key={time.nome}
            id={time.id}
            nome={time.nome}
            cor={time.cor} 
            // corFundo={time.corFundo}
            colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
            aoDeletar={deletarPlayer}
          />
        )}
      </section>
      <Footer />
    </div>
  );
}

export default App;
