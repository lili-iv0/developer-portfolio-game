import PixelSprite from './PixelSprite';
import { TOTAL_COINS, useGame } from '../game/GameContext';

export default function Hud() {
  const { coins, xp, level } = useGame();

  return (
    <div className="hud">
      <div className="container hud-inner">
        <div className="hud-item" title="Lives">
          <span className="hud-label">Lives</span>
          <span className="hearts" aria-label="3 lives">
            {[0, 1, 2].map((i) => (
              <PixelSprite key={i} name="heart" size={3} />
            ))}
          </span>
        </div>

        <div className="hud-item" title="Coins found on the title screen">
          <PixelSprite name="coin" size={3} />
          <span className="hud-num">
            {coins.length}/{TOTAL_COINS}
          </span>
          <span className="sr-only">coins collected</span>
        </div>

        <div className="hud-item hud-xp" title="Explore pages and find coins to earn XP">
          <span className="hud-label">LV {level}</span>
          <div
            className="xp-bar"
            role="progressbar"
            aria-label="Exploration progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={xp}
          >
            <div className="xp-fill" style={{ width: `${xp}%` }} />
          </div>
          <span className="hud-num hud-xp-num">{xp >= 100 ? 'MAX' : `${xp} XP`}</span>
        </div>
      </div>
    </div>
  );
}
