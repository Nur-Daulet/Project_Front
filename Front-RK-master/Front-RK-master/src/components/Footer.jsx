import '../css/Footer.css';
import pic from '../img/Brand-name.png';
import yt from '../img/yt.png';
import ig from '../img/ig.png';
import fb from '../img/fb.png';
import tw from '../img/tw.png';


function Footer() {
  return (
    <div className="Footer">
        <div className='footeR'>
            <div className="footer-item"><img src={pic} alt="photo" height="28px"></img></div>
            <div className="footer-item">
                <h5>HOW IT WORKS</h5>
                <h4>Buying a Car</h4>
                <h4>Seling a Car</h4>
                <h4>Finalizing the Sele</h4>
                <h4>FAQs</h4>
            </div>
            <div className="footer-item">
                <h5>SELLERS</h5>
                <h4>Submit Your Car</h4>
                <h4>Photography Guide</h4>
            </div>
            <div className="footer-item">
                <h5>HELPULL LINKS</h5>
                <h4>Support</h4>
                <h4>Shop C&B Merch</h4>
            </div>
            <div className="footer-item">
                <div className='socials'>
                    <a><img src={yt} alt="photo" height="34px"></img></a>
                    <a><img src={ig} alt="photo" height="34px"></img></a>
                    <a><img src={fb} alt="photo" height="34px"></img></a>
                    <a><img src={tw} alt="photo" height="34px"></img></a>
                </div>
                <h5 className='black-h5'>© Copyright 2022 Cars and Bids LLC</h5>
                <h5 className='black-h5'>Terms of Use Privacy Policy</h5>
            </div>
        </div>
    </div>
  );
}

export default Footer;