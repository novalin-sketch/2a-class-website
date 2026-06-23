import { useState } from 'react'
import { stories, storyFilters } from '../data/stories.js'

function StoryCard({ s }) {
  return (
    <article className="story-card">
      <div className="story-media">
        {s.image ? (
          <img src={`stories/${s.image}`} alt={s.title} className="story-img" />
        ) : (
          <div className="story-placeholder">{s.emoji || '📌'}</div>
        )}
        <span className="story-type">{s.type}</span>
      </div>
      <div className="story-body">
        <h3 className="story-title">{s.title}</h3>
        <div className="story-meta">{s.author} · {s.date}</div>
        {s.body && <p className="story-text">{s.body}</p>}
      </div>
    </article>
  )
}

export default function Stories() {
  const [filter, setFilter] = useState('全部')
  const shown = filter === '全部' ? stories : stories.filter((s) => s.type === filter)

  return (
    <div className="page">
      <section className="hero hero-sm">
        <h1 className="hero-title">奇聞趣事</h1>
        <p className="hero-motto">塗鴉、競賽、短文、教室日誌 — 我們的日常碎片</p>
      </section>

      <div className="filter-bar">
        {storyFilters.map((f) => (
          <button
            key={f}
            className={`filter-btn${filter === f ? ' filter-btn-active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="stories-grid">
        {shown.map((s, i) => (
          <StoryCard s={s} key={i} />
        ))}
      </div>

      {shown.length === 0 && <p className="empty">這個分類還沒有貼文，快來投稿吧！</p>}
    </div>
  )
}
