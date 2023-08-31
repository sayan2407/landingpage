import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import footerLogo from "../../assets/images/logo.png";
const Footer = () => {
    const pages = ['Home', 'Attroneys', 'Practice areas', 'About us'];

    return <footer>
        <div className="footer_items">
            <div className="footer_logo">
                <img src={footerLogo} width="170px" height="30px" alt="footer logo"/>

            </div>
            <div className="footer_menu">
                {
                    pages.map(page=>{
                        return <a href="#">{page}</a>
                    })
                }

            </div>
            <div className="footer_social">
                <InstagramIcon style={{color: "#E3B748"}}/>
                <FacebookIcon style={{color: "#E3B748"}}/>
                <TwitterIcon style={{color: "#E3B748"}}/>
            </div>
        </div>
        <div className="copyright_text">
            <p>@copy; 2020 Acme. All right reserved.</p>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms Of Service</a>
        </div>
    </footer>
}

export default Footer;