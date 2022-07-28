import Dropdown from 'components/Dropdown/Dropdown';
import { navLinks } from 'data/navLinks';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      {navLinks.map((link, index) => (
        <Dropdown key={index} defaultSelected={link.title} list={link.list} />
      ))}
    </nav>
  );
}
