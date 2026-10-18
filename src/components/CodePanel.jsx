import profile from '../data/profile';

// A small, readable "developer.js" panel built from profile.js, so it never goes out of date.
export default function CodePanel() {
  const open = profile.now.some((n) => n.open);

  return (
    <figure className="code" aria-label={`${profile.name}, ${profile.title}. Stack: ${profile.stack.join(', ')}.`}>
      <figcaption className="code-tab">
        <span className="code-dots" aria-hidden="true"><i /><i /><i /></span>
        developer.js
      </figcaption>
      <pre aria-hidden="true">
        <code>
          <span className="t-kw">const</span> developer <span className="t-p">=</span> <span className="t-p">{'{'}</span>
          {'\n  '}name<span className="t-p">:</span> <span className="t-str">"{profile.name}"</span><span className="t-p">,</span>
          {'\n  '}role<span className="t-p">:</span> <span className="t-str">"{profile.title}"</span><span className="t-p">,</span>
          {'\n  '}stack<span className="t-p">:</span> <span className="t-p">[</span>
          {profile.stack.map((s, i) => (
            <span key={s}>
              <span className="t-str">"{s}"</span>
              {i < profile.stack.length - 1 && <span className="t-p">, </span>}
            </span>
          ))}
          <span className="t-p">],</span>
          {'\n  '}openToWork<span className="t-p">:</span> <span className="t-bool">{String(open)}</span><span className="t-p">,</span>
          {'\n'}<span className="t-p">{'}'}</span><span className="t-p">;</span>
        </code>
      </pre>
    </figure>
  );
}
