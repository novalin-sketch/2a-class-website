import { members } from '../data/members.js'
import Avatar from '../components/Avatar.jsx'

function Field({ label, value }) {
  if (!value) return null
  return (
    <div className="mf-row">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  )
}

function Chips({ value }) {
  if (!value) return null
  const items = value.split(/[、，,\s]+/).filter(Boolean)
  return (
    <div className="member-tags">
      {items.map((t, i) => (
        <span className="tag" key={i}>{t}</span>
      ))}
    </div>
  )
}

function MemberCard({ m }) {
  const meta = [m.species, m.gender].filter(Boolean).join(' · ')
  const stats = [
    m.height && `身高 ${m.height}`,
    m.weight && `體重 ${m.weight}`,
    m.birthday && `生日 ${m.birthday}`,
  ].filter(Boolean)

  return (
    <article className={`member-card${m.teacher ? ' member-card-teacher' : ''}`}>
      <div className="member-head">
        <Avatar name={m.name} photo={m.photo} folder="photos" size={88} />
        <div className="member-id">
          <div className="member-name">
            {m.name}
            {typeof m.seat === 'number' && m.seat > 0 && (
              <span className="member-seat">#{m.seat}</span>
            )}
          </div>
          {m.title && <div className="member-title">{m.title}</div>}
          {meta && <div className="member-meta-line">{meta}</div>}
        </div>
      </div>

      {stats.length > 0 && (
        <div className="member-stats">
          {stats.map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      )}

      {m.subjects && (
        <div className="member-subjects">
          <span className="mf-label">喜歡科目</span>
          <Chips value={m.subjects} />
        </div>
      )}

      <dl className="member-fields">
        <Field label="參加社團" value={m.club} />
        <Field label="喜歡" value={m.likes} />
        <Field label="討厭" value={m.dislikes} />
        <Field label="特殊疾病" value={m.condition} />
      </dl>

      {m.note && <p className="member-note">{m.note}</p>}
    </article>
  )
}

export default function Members() {
  const teachers = members.filter((m) => m.teacher)
  const students = members.filter((m) => !m.teacher)

  return (
    <div className="page">
      <section className="hero">
        <p className="hero-kicker">PORTRAITS / {members.length} PEOPLE</p>
        <h1 className="hero-title">個人介紹</h1>
        <p className="hero-motto">繪俄史藝術高等學院 2年A班，班導師 1 位、同學 {students.length} 位。</p>
      </section>

      {teachers.length > 0 && (
        <section className="block">
          <div className="section-head">
            <span className="section-index">01</span>
            <h2 className="section-title">班導師</h2>
          </div>
          <div className="members-grid">
            {teachers.map((m) => (
              <MemberCard m={m} key={m.name} />
            ))}
          </div>
        </section>
      )}

      <section className="block">
        <div className="section-head">
          <span className="section-index">02</span>
          <h2 className="section-title">同學們</h2>
        </div>
        <p className="section-sub">
          依座號排列。內容由本人提供，嚴禁歧視、霸凌等不當言論。
        </p>
        <div className="members-grid">
          {students.map((m) => (
            <MemberCard m={m} key={m.seat} />
          ))}
        </div>
      </section>
    </div>
  )
}
