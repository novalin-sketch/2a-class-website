import { classInfo } from '../data/classInfo.js'
import { roles } from '../data/roles.js'

export default function Overview() {
  return (
    <div className="page">
      <section className="hero">
        <p className="eyebrow">{classInfo.school} · {classInfo.year}</p>
        <h1 className="hero-title">{classInfo.name}</h1>
        <p className="hero-motto">{classInfo.motto}</p>
      </section>

      <section className="block">
        <h2 className="section-title">班級職位</h2>
        <p className="section-sub">各個職位由誰擔任</p>
        <div className="roles-grid">
          {roles.map((r) => (
            <div className="role-card" key={r.title}>
              <div className="role-emoji">{r.emoji}</div>
              <div className="role-body">
                <div className="role-title">{r.title}</div>
                <div className="role-holder">{r.holder}</div>
                <div className="role-desc">{r.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="block">
        <h2 className="section-title">教室環境</h2>
        <p className="section-sub">我們每天生活的地方</p>
        <div className="photo-grid">
          {classInfo.classroomPhotos.map((p, i) => (
            <figure className="photo-card" key={i}>
              <div className="photo-placeholder">{p.emoji}</div>
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="block">
        <h2 className="section-title">班級大合照</h2>
        <p className="section-sub">{classInfo.groupPhoto.caption}</p>
        <figure className="group-photo">
          <div className="group-photo-placeholder">{classInfo.groupPhoto.emoji}</div>
          <figcaption>把合照放到 public/ 後，於 src/data/classInfo.js 填入檔名即可顯示</figcaption>
        </figure>
      </section>
    </div>
  )
}
