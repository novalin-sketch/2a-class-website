import { useState } from 'react'
import { seating } from '../data/seating.js'
import { members } from '../data/members.js'
import Avatar from '../components/Avatar.jsx'

// 以姓名查 member 資料
const memberByName = Object.fromEntries(members.map((m) => [m.name, m]))

export default function Seating() {
  const [selected, setSelected] = useState(null)
  const sel = selected ? memberByName[selected] : null

  let seatNo = 0

  return (
    <div className="page">
      <section className="hero">
        <p className="hero-kicker">SEATING MAP / CLASSROOM</p>
        <h1 className="hero-title">座位表</h1>
        <p className="hero-motto">{seating.note}，點座位看看是誰。</p>
      </section>

      <div className="classroom">
        <div className="podium">{seating.podium}</div>

        <div className="seat-grid">
          {seating.layout.map((row, ri) =>
            row.map((name, ci) => {
              seatNo += 1
              const m = name ? memberByName[name] : null
              const isActive = selected === name
              if (!name) {
                return <div className="seat seat-empty" key={`${ri}-${ci}`}>空位</div>
              }
              return (
                <button
                  type="button"
                  key={`${ri}-${ci}`}
                  className={`seat${isActive ? ' seat-active' : ''}`}
                  onClick={() => setSelected(isActive ? null : name)}
                >
                  <span className="seat-no">{seatNo}</span>
                  <Avatar name={name} photo={m?.photo} folder="photos" size={40} />
                  <span className="seat-name">{name}</span>
                </button>
              )
            })
          )}
        </div>
        <p className="classroom-hint">— 教室前方（黑板）—</p>
      </div>

      {sel && (
        <aside className="seat-detail">
          <div className="seat-detail-head">
            <Avatar name={sel.name} photo={sel.photo} folder="photos" size={64} />
            <div>
              <div className="member-name">
                {sel.name}
                {typeof sel.seat === 'number' && sel.seat > 0 && (
                  <span className="member-seat">#{sel.seat}</span>
                )}
              </div>
              {[sel.species, sel.gender].filter(Boolean).length > 0 && (
                <div className="member-meta-line">
                  {[sel.species, sel.gender].filter(Boolean).join(' · ')}
                </div>
              )}
            </div>
            <button className="seat-detail-close" onClick={() => setSelected(null)}>關閉</button>
          </div>
          <dl className="member-fields" style={{ marginTop: '14px' }}>
            {sel.subjects && (
              <div className="mf-row"><dt>喜歡科目</dt><dd>{sel.subjects}</dd></div>
            )}
            {sel.likes && (
              <div className="mf-row"><dt>喜歡</dt><dd>{sel.likes}</dd></div>
            )}
            {sel.club && (
              <div className="mf-row"><dt>社團</dt><dd>{sel.club}</dd></div>
            )}
          </dl>
        </aside>
      )}
    </div>
  )
}
