import React from 'react';
import { footerLinks } from 'data/footerLinks';
import ListGroup from 'components/ListGroup/ListGroup';

import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__links">
        {footerLinks.map((group, index) => (
          <ListGroup
            key={`footerlink${index}`}
            title={group.title}
            links={group.list}
          />
        ))}
      </div>
      <p className="footer__copyright">Copyright © 2020 petrbilek.com</p>
    </div>
  );
}
