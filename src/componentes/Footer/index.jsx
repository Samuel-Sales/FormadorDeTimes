import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='icones'>
                <img src="/imagens/fb.png" alt="Facebook" />
                <img src="/imagens/tw.png" alt="Twitter" />
                <img src="/imagens/ig.png" alt="Instagram" />
            </div>
            <div>
                <img src="/imagens/logo.png" alt="organo" />
            </div>
            <div>
                <h3 className='text'>Desenvolvido por Samuel Sales</h3>
            </div>
        </footer>
    );
};

export default Footer;