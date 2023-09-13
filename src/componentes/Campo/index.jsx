import './Campo.css';

const Campo = (props, { type = 'text' }) => {
    const placeholderModificada = `${props.placeholder}...`;
    
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }
    return (
        <div className="campo">
            <label>{props.label}</label>
            <input type={type} value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    );
};

export default Campo;