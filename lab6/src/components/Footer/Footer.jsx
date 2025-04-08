import './Footer.css';
import Visily from '../../assets/Visily.png';

function Footer() {
    return (
        <>
            <div className="footer"> 
                <span>Made with</span>
                <img src={Visily} alt="Biểu tượng nhỏ" className="footer-image" />
            </div>
        </>
    );
}

export default Footer;
