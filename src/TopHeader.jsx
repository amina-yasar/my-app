import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './TopHeader.css';

function HoverLink({ href, ariaLabel, children, style = {}, ...props }) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      style={{
        fontSize: style.fontSize || 'inherit', 
        ...style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {children}
    </a>
  );
}

function TopHeader() {
  return (
    <div className="top-header"> 
      <div className="left-section">
        <HoverLink href="tel:+923156614990">
          <FaPhoneAlt />
          <span>+92 315 66149 90</span>
        </HoverLink>

        <span>|</span>

        <HoverLink href="mailto:info@orphanage.org">
          <FaEnvelope />
          <span>info@orphanage.org</span>
        </HoverLink>
      </div>

      <div className="right-section">
        <HoverLink href="#" ariaLabel="Facebook" style={{ fontSize: '1.1rem', gap: 0 }}>
          <FaFacebookF />
        </HoverLink>
        <HoverLink href="#" ariaLabel="Instagram" style={{ fontSize: '1.1rem', gap: 0 }}>
          <FaInstagram />
        </HoverLink>
        <HoverLink href="#" ariaLabel="LinkedIn" style={{ fontSize: '1.1rem', gap: 0 }}>
          <FaLinkedinIn />
        </HoverLink>
        <HoverLink href="#" ariaLabel="YouTube" style={{ fontSize: '1.1rem', gap: 0 }}>
          <FaYoutube />
        </HoverLink>
      </div>
    </div>
  );
}

export default TopHeader;
