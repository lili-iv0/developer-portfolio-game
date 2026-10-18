import { useState } from 'react';
import PixelSprite from './PixelSprite';
import { TOTAL_COINS, useGame } from '../game/GameContext';

// Pseudo-random but fixed star positions (no layout jumping between renders).
const rand = (n) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};
const STARS = Array.from({ length: 46 }, (_, i) => ({
  left: rand(i + 1) * 100,
  top: rand(i + 60) * 58,
  delay: rand(i + 120) * 4,
  big: rand(i + 9) > 0.82,
}));

const CLOUDS = [
  { top: '9%', size: 5, dur: 70, delay: -20 },
  { top: '30%', size: 4, dur: 95, delay: -60 },
  { top: '17%', size: 6, dur: 120, delay: -95 },
];

// Where the collectible coins hide. TOTAL_COINS in GameContext must match this list.
const COINS = [
  { id: 'c1', style: { left: '2.5%', top: '2%' } },
  { id: 'c2', style: { left: '47%', top: '6%' } },
  { id: 'c3', style: { right: '4%', top: '34%' } },
  { id: 'c4', style: { left: '38%', bottom: '104px' } },
  { id: 'c5', style: { right: '19%', bottom: '118px' } },
];

// The animated "title screen" background: sky, clouds, ground, props, a little player.
export default function Scene() {
  const { coins, collectCoin, play } = useGame();
  const [pops, setPops] = useState([]);
  const [jump, setJump] = useState(false);
  const left = TOTAL_COINS - coins.length;

  function pick(c) {
    collectCoin(c.id);
    const id = Date.now() + c.id;
    setPops((p) => [...p, { id, style: c.style }]);
    setTimeout(() => setPops((p) => p.filter((x) => x.id !== id)), 800);
  }

  function hop() {
    play('click');
    setJump(true);
    setTimeout(() => setJump(false), 500);
  }

  return (
    <>
      <div className="scene" aria-hidden="true">
        <div className="scene-bg">
        {STARS.map((s, i) => (
          <span
            key={i}
            className={`star ${s.big ? 'star-big' : ''}`}
            style={{ left: `${s.left}%`, top: `${s.top}%`, animationDelay: `${s.delay}s` }}
          />
        ))}
        <div className="orb"><PixelSprite name="orb" size={8} /></div>
        {CLOUDS.map((c, i) => (
          <div key={i} className="cloud" style={{ top: c.top, animationDuration: `${c.dur}s`, animationDelay: `${c.delay}s` }}>
            <PixelSprite name="cloud" size={c.size} />
          </div>
        ))}
        <div className="props">
          <div className="prop" style={{ left: '4%' }}><PixelSprite name="tree" size={7} /></div>
          <div className="prop prop-md" style={{ left: '13%' }}><PixelSprite name="bush" size={6} /></div>
          <div className="prop prop-md" style={{ left: '63%' }}><PixelSprite name="bush" size={5} /></div>
          <div className="prop" style={{ right: '5%' }}><PixelSprite name="tree" size={6} /></div>
          <div className="prop prop-md" style={{ right: '14%' }}><PixelSprite name="chest" size={5} /></div>
        </div>
        <div className="ground" />
        </div>
      </div>

      {/* Interactive layer sits above the page content so coins and the player stay clickable. */}
      <div className="scene-fx">
      <div className="player">
        {left > 0 ? (
          <p className="bubble">Psst! {left} coin{left > 1 ? 's are' : ' is'} hiding on this screen.</p>
        ) : (
          <p className="bubble">You found every coin!</p>
        )}
        <button type="button" className={`player-btn ${jump ? 'jump' : ''}`} onClick={hop} aria-label="Make the pixel player jump">
          <PixelSprite name="hero" size={6} />
        </button>
      </div>

      {COINS.map(
        (c) =>
          !coins.includes(c.id) && (
            <button key={c.id} type="button" className="coin-pick" style={c.style} onClick={() => pick(c)} aria-label="Collect a hidden coin">
              <PixelSprite name="coin" size={5} />
            </button>
          )
      )}
      {pops.map((p) => (
        <span key={p.id} className="coin-pop" style={p.style} aria-hidden="true">+1</span>
      ))}
      </div>
    </>
  );
}
