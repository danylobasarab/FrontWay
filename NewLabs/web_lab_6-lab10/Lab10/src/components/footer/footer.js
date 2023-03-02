import './footer.css'
import logo from "../../images/logo3.jpg";

export default function Footer(){
    return(
        <footer className="footer-block">
             <a href="/home">
                 <img src={logo} className="img_logo" alt="logo" />
            </a>
            <div className="footer-item">
                <a className="footer-link" href="">Company</a>
            </div>
            <div className="footer-item">
                <a className="footer-link" href="">About us</a>
            </div>
            <div className="footer-item">
                <a className="footer-link" href="">Contact us</a>
            </div>
            <div className="footer-item">
                <a className="footer-link" href="">Help</a>
            </div>
        
        </footer>
    )
    
}

