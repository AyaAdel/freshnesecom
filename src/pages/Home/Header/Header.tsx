import SearchProducts from 'components/SearchProducts/SearchProducts';
import Navbar from 'pages/Home/Navbar/Navbar';
import Cart from 'components/Cart/Cart';
import Brand from 'assets/brand.svg';
import User from 'assets/user.svg';

import './Header.css';
import HeaderInfo from '../HeaderInfo/HeaderInfo';

export default function Header() {
  return (
    <>
      <HeaderInfo />
      <div className="header">
        <img src={Brand} />
        <SearchProducts />
        <div className="header__right-side">
          <img src={User} className="icon" />
          <Cart />
        </div>
      </div>
      <Navbar />
    </>
  );
}
