import './Footer.css';
import Visily from '../../assets/Visily.png';

function Footer() {
    return (
        <>
            <div className="footer"> {/* Đổi class từ header thành footer */}
                <span>Made with</span>
                <img src={Visily} alt="Biểu tượng nhỏ" className="footer-image" /> {/* Thêm class "footer-image" */}
            </div>
        </>
    );
}

export default Footer;
