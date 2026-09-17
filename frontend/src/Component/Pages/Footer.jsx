import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const socials = [
  { href: 'https://github.com/aryank730', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/aryank730', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://x.com/aryan_k7_', icon: <BsTwitterX />, label: 'Twitter' },
];

const Footer = () => {
  return (
    <footer className="bg-ink text-text px-6 md:px-12 pt-16 pb-8 border-t border-line">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="font-display text-xl font-semibold text-text">Aryan Katiyar</h2>
          <p className="text-muted text-sm mt-3 leading-relaxed">
            MERN Stack Developer building full-stack platforms end to end — from API design to production
            deployment.
          </p>
          <div className="flex gap-3 mt-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="border border-line p-2 rounded-sm hover:border-accent hover:text-accent transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex md:items-center">
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center rounded-sm border border-line px-5 py-3 font-medium text-text hover:border-accent hover:text-accent transition"
          >
            Contact us
          </NavLink>
        </div>

        <div>
          <h3 className="font-mono text-xs text-muted uppercase tracking-wide mb-3">Contact</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-accent"><FaEnvelope /></span>
              <span>aryanktr730@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent"><FaPhone /></span>
              <span>+91 6387291201</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent"><FaMapMarkerAlt /></span>
              <span>Noida Sec 135, Uttar Pradesh, India</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8 border-line max-w-5xl mx-auto" />

      <div className="max-w-5xl mx-auto text-sm text-muted">
        © 2026 <span className="font-medium text-text">Aryan K.</span> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;