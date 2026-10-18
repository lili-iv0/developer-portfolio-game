import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import Hud from './Hud';
import PixelSprite from './PixelSprite';
import { useGame } from '../game/GameContext';
import profile from '../data/profile';

// Pixel laptop logo (edit the rows or colours to change it)
const laptop = {
  palette: { o: '#15123f', b: '#3a2cc0', h: '#8b86ec', g: '#5fe3a1', y: '#ffd257', L: '#d8d8ec' },
  map: [
    '.oooooooooooo.',
    '.obbbbbbbbbbo.',
    '.obhhbbbbbbbo.',
    '.obbggbbbbbbo.',
    '.obbbbyybbbbo.',
    '.obbggggbbbbo.',
    '.obbbbbbbbbbo.',
    '.oooooooooooo.',
    'oLLLLLLLLLLLLo',
    '.oooooooooooo.',
  ],
};

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { sound, toggleSound } = useGame();
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark" aria-hidden="true" style={{ background: 'transparent', boxShadow: 'none', margin: 0 }}>
            <PixelSprite map={laptop.map} palette={laptop.palette} size={3} />
          </span>
          <span className="brand-name">{profile.name}</span>
        </Link>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={close}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className={`chip sfx ${sound ? 'active' : ''}`}
            aria-pressed={sound}
            onClick={toggleSound}
            title="Toggle 8-bit sound effects"
          >
            SFX {sound ? 'ON' : 'OFF'}
          </button>
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      <Hud />
    </header>
  );
}