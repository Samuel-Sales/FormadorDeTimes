import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';  // Importando icones do react-icons, para saber a pasta eh so olhar o inicio do nome
import './Colaborador.css';

const Colaborador = (props) => {

    function favoritar() {
        props.aoFavoritar(props.id);
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => props.aoDeletar(props.id)} 
            />
            <div className='cabecalho' style={ { backgroundColor: props.corDeFundo } }>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
                <div className='favoritar'>
                    {props.favorito 
                        ? <AiFillHeart size={25} onClick={props.favoritar} /> 
                        : <AiOutlineHeart size={25} onClick={props.favoritar} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Colaborador;