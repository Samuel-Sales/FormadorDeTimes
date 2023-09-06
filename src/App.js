import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer';

function App() {
  const times = [
    {
      nome: 'Counter Strike: Global Offensive',
      corDestaque: '#57C278',
      corFundo: '#D9F7E9'
    },
    {
      nome: 'League Of Legends',
      corDestaque: '#A6D157',
      corFundo: '#E8F8E2'
    },
    {
      nome: 'Valorant',
      corDestaque: '#A6D157',
      corFundo: '#F4EEEE'
    },
    {
      nome: 'Dota 2',
      corDestaque: '#E06B69',
      corFundo: '#FDE7E8'
    },
    // {
    //   nome: 'UX e Design',
    //   corDestaque: '#DB6EBF',
    //   corFundo: '#FAE9F5'
    // },
    // {
    //   nome: 'Mobile',
    //   corDestaque: '#FFBA05',
    //   corFundo: '#FFF5D9'
    // },
    // {
    //   nome: 'Inovacao e Gestao',
    //   corDestaque: '#FF8A29',
    //   corFundo: '#FFEEDF'
    // },
  ]

  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corDestaque={time.corDestaque} 
        corFundo={time.corFundo}
        colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
      />)}
      <Footer />
    </div>
  );
}

export default App;
