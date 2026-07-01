import { classInfo } from '../data/classInfo.js'
import { roles } from '../data/roles.js'
import GameSection from '../components/GameSection.jsx'

const b = classInfo.banner

export default function Overview() {
  return (
    <div className="page">
      {/* 16:9 Banner */}
      <section className="banner">
        <span className="banner-shape s-circle" />
        <span className="banner-shape s-tri" />
        <span className="banner-shape s-ring" />

        <p className="banner-kicker">{b.kicker}</p>
        <h1 className="banner-title">
          <span className="fill-c1">{b.titleTop}</span>
          <br />
          <span className="stroke">{b.titleBottom}</span>
        </h1>
        <p className="banner-sub">{b.subtitle}</p>
        <div className="banner-meta">
          {classInfo.name}
          <br />
          {classInfo.school}
          <br />
          {classInfo.year}
        </div>

        <a className="scroll-cue" href="#game">
          SCROLL
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      {/* Mini game */}
      <GameSection />

      {/* Roles */}
      <section className="block">
        <div className="section-head">
          <span className="section-index">01</span>
          <h2 className="section-title">班級職位</h2>
        </div>
        <p className="section-sub">各個職位由誰擔任</p>
        <div className="roles-grid">
          {roles.map((r) => (
            <div className="role-card" key={r.title}>
              <div className="role-title">{r.title}</div>
              <div className="role-holder">{r.holder}</div>
              <div className="role-desc">{r.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Classroom */}
      <section className="block">
        <div className="section-head">
          <span className="section-index">02</span>
          <h2 className="section-title">教室環境</h2>
        </div>
        <p className="section-sub">我們每天生活的地方</p>
        <div className="photo-grid">
          {classInfo.classroomPhotos.map((p, i) => (
            <figure className="photo-card" key={i}>
              {p.photo ? (
                <img src={p.photo} alt={p.caption} />
              ) : (
                <div className="ph">{p.caption}</div>
              )}
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Group photo */}
      <section className="block">
        <div className="section-head">
          <span className="section-index">03</span>
          <h2 className="section-title">班級大合照</h2>
        </div>
        <p className="section-sub">{classInfo.groupPhoto.caption}</p>
        <figure className="group-photo">
          {classInfo.groupPhoto.photo ? (
            <img src={classInfo.groupPhoto.photo} alt={classInfo.groupPhoto.caption} />
          ) : (
            <div className="ph">GROUP PHOTO</div>
          )}
          <figcaption>把合照放到 public/ 後，於 src/data/classInfo.js 填入檔名即可顯示</figcaption>
        </figure>
      </section>
    </div>
  )
}
