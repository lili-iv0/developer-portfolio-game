import { sprites } from '../data/sprites';

export default function PixelSprite({ name, map, palette, size = 4, label, className = '' }) {
  const sprite = name ? sprites[name] : { map, palette };
  const rows = sprite.map;
  const h = rows.length;
  const w = rows[0].length;
  const cells = [];

  rows.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      const fill = sprite.palette[ch];
      if (fill) cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1.02" height="1.02" style={{ fill }} />);
    });
  });

  return (
    <svg
      className={`sprite ${className}`}
      width={w * size}
      height={h * size}
      viewBox={`0 0 ${w} ${h}`}
      shapeRendering="crispEdges"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {cells}
    </svg>
  );
}
