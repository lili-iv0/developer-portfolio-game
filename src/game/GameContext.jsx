import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const KEY = 'portfolio-game-v1';
export const TOTAL_COINS = 5;

export const ACHIEVEMENTS = {
  start: { title: 'Game Start', text: 'Welcome, player. Look around and explore.' },
  about: { title: 'Meet the Player', text: 'You read the character sheet.' },
  projects: { title: 'Level Select', text: 'You opened the project stages.' },
  contact: { title: 'Say Hello', text: 'You found the contact terminal.' },
  coins: { title: 'Coin Collector', text: 'You found all the coins on the title screen.' },
  all: { title: '100% Complete', text: 'Every achievement unlocked. Thanks for playing!' },
};

const PAGE_KEYS = { '/': 'start', '/about': 'about', '/projects': 'projects', '/contact': 'contact' };

const blank = { coins: [], visited: [], unlocked: [], sound: false };

function load() {
  try {
    return { ...blank, ...JSON.parse(localStorage.getItem(KEY) || '{}') };
  } catch {
    return blank;
  }
}

let audio;
const SFX = { coin: [988, 1319], ach: [523, 659, 784, 1047], click: [330] };
function beep(name) {
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    const t0 = audio.currentTime;
    SFX[name].forEach((freq, i) => {
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      osc.type = 'square';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.04, t0 + i * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + (i + 1) * 0.09);
      osc.connect(gain);
      gain.connect(audio.destination);
      osc.start(t0 + i * 0.09);
      osc.stop(t0 + (i + 1) * 0.09);
    });
  } catch {
    /* audio unavailable */
  }
}

const GameContext = createContext(null);
export const useGame = () => useContext(GameContext);

export function GameProvider({ children }) {
  const { pathname } = useLocation();
  const [state, setState] = useState(load);
  const [toasts, setToasts] = useState([]);
  const [resets, setResets] = useState(0);
  const ref = useRef(state);
  ref.current = state;

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* storage unavailable */
    }
  }, [state]);

  const play = useCallback((name) => {
    if (ref.current.sound) beep(name);
  }, []);

  const pushToast = useCallback((a) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t.slice(-2), { id, ...a }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4800);
  }, []);

  const unlock = useCallback(
    (id) => {
      const s = ref.current;
      if (s.unlocked.includes(id)) return;
      const next = { ...s, unlocked: [...s.unlocked, id] };
      ref.current = next;
      setState(next);
      pushToast(ACHIEVEMENTS[id]);
      play('ach');
      const rest = Object.keys(ACHIEVEMENTS).filter((k) => k !== 'all');
      if (id !== 'all' && rest.every((k) => next.unlocked.includes(k))) setTimeout(() => unlock('all'), 1200);
    },
    [pushToast, play]
  );

  // Visiting a page counts as progress.
  useEffect(() => {
    const key = PAGE_KEYS[pathname];
    if (!key) return;
    const s = ref.current;
    if (!s.visited.includes(key)) {
      const next = { ...s, visited: [...s.visited, key] };
      ref.current = next;
      setState(next);
    }
    const t = setTimeout(() => unlock(key), key === 'start' ? 900 : 350);
    return () => clearTimeout(t);
  }, [pathname, resets, unlock]);

  const collectCoin = useCallback(
    (id) => {
      const s = ref.current;
      if (s.coins.includes(id)) return;
      const next = { ...s, coins: [...s.coins, id] };
      ref.current = next;
      setState(next);
      play('coin');
      if (next.coins.length >= TOTAL_COINS) setTimeout(() => unlock('coins'), 500);
    },
    [play, unlock]
  );

  const toggleSound = useCallback(() => {
    const next = { ...ref.current, sound: !ref.current.sound };
    ref.current = next;
    setState(next);
    if (next.sound) beep('click');
  }, []);

  const reset = useCallback(() => {
    const next = { ...blank, sound: ref.current.sound };
    ref.current = next;
    setState(next);
    setToasts([]);
    setResets((n) => n + 1);
  }, []);

  const xp = Math.min(100, state.visited.length * 15 + state.coins.length * 8);
  const level = 1 + state.unlocked.length;

  const value = useMemo(
    () => ({ ...state, xp, level, toasts, collectCoin, toggleSound, reset, play }),
    [state, xp, level, toasts, collectCoin, toggleSound, reset, play]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
