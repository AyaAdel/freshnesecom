import './HeaderInfo.css';

export default function HeaderInfo() {
  return (
    <div className="header-info">
      <div className="header-info__left-side">
        <a href="#">Chat with us</a>
        <span>+420 336 775 664</span>
        <span>info@freshnesecom.com</span>
      </div>
      <div className="header-info__right-side">
        <a href="#">Blog</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
      </div>
    </div>
  );
}
