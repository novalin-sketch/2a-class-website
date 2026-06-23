import { members } from '../data/members.js'
import Avatar from '../components/Avatar.jsx'

function uniformLabel(u) {
  return u ? `📷 ${u}` : ''
}

function MemberCard({ m }) {
  return (
    <article className={`member-card${m.teacher ? ' member-card-teacher' : ''}`}>
      <div className="member-head">
        <Avatar name={m.name} photo={m.photo} folder="photos" size={88} />
        <div className="member-id">
          <div className="member-name">
            {m.name}
            {m.nickname && <span className="member-nick">「{m.nickname}」</span>}
          </div>
          {m.title && <div className="member-title">{m.title}</div>}
          {m.uniform && <div className="member-uniform">{uniformLabel(m.uniform)}</div>}
        </div>
      </div>

      {m.bio && <p className="member-bio">{m.bio}</p>}

      {m.tags && m.tags.length > 0 && (
        <div className="member-tags">
          {m.tags.map((t) => (
            <span className="tag" key={t}>#{t}</span>
          ))}
        </div>
      )}

      {m.links && m.links.length > 0 && (
        <div className="member-links">
          {m.links.map((l, i) => (
            <a className="member-link" href={l.url} key={i} target="_blank" rel="noreferrer">
              🔗 {l.label}
            </a>
          ))}
        </div>
      )}
    </article>
  )
}

export default function Members() {
  const teachers = members.filter((m) => m.teacher)
  const students = members.filter((m) => !m.teacher)

  return (
    <div className="page">
      <section className="hero hero-sm">
        <h1 className="hero-title">個人介紹</h1>
        <p className="hero-motto">一人一格，內容由本人自由發揮 · 共 {members.length} 人</p>
      </section>

      {teachers.length > 0 && (
        <section className="block">
          <h2 className="section-title">班導師</h2>
          <div className="members-grid">
            {teachers.map((m) => (
              <MemberCard m={m} key={m.name} />
            ))}
          </div>
        </section>
      )}

      <section className="block">
        <h2 className="section-title">同學們</h2>
        <p className="section-sub">
          照片規定：僅限校園服裝（制服、運動服，或競賽相關服裝）。內容嚴禁歧視、霸凌等不當言論。
        </p>
        <div className="members-grid">
          {students.map((m) => (
            <MemberCard m={m} key={m.name} />
          ))}
        </div>
      </section>
    </div>
  )
}
