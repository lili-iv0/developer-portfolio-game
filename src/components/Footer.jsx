import { Link } from 'react-router-dom';
import PixelSprite from './PixelSprite';
import { useGame } from '../game/GameContext';
import profile from '../data/profile';

export default function Footer() {
  const { reset } = useGame();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {new Date().getFullYear()} {profile.name}. Thanks for playing!
        </p>

        <nav className="footer-links" aria-label="Footer">
          <Link to="/projects">Projects</Link>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <button type="button" className="btn btn-ghost btn-sm" onClick={reset}>New game</button>
        </nav>
      </div>
    </footer>
  );
}
