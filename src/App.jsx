import { Routes, Route, NavLink } from 'react-router-dom'
import Overview from './pages/Overview.jsx'
import Members from './pages/Members.jsx'
import Stories from './pages/Stories.jsx'
import Seating from './pages/Seating.jsx'
import { classInfo } from './data/classInfo.js'

const marqueeItems = [
  classInfo.name,
  classInfo.enName,
  classInfo.school,
  classInfo.year,
  classInfo.motto,
]

function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((t, i) => (
          <span key={i}>◆&nbsp;&nbsp;{t}</span>
        ))}
      </div>
    </div>
  )
}

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? 'nav-link nav-link-active' : 'nav-link'
  return (
    <header className="site-header">
      <NavLink to="/" className="brand">
        {classInfo.name}
        <span className="brand-en">{classInfo.enName}</span>
      </NavLink>
      <nav className="nav">
        <NavLink to="/" end className={linkClass}>班級總覽</NavLink>
        <NavLink to="/members" className={linkClass}>個人介紹</NavLink>
        <NavLink to="/seating" className={linkClass}>座位表</NavLink>
        <NavLink to="/stories" className={linkClass}>奇聞趣事</NavLink>
      </nav>
    </header>
  )
}

export default function App() {
  return (
    <div className="app">
      <Marquee />
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/members" element={<Members />} />
          <Route path="/seating" element={<Seating />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <div>
            <div className="footer-brand">{classInfo.name} · {classInfo.enName}</div>
            <p className="footer-note">{classInfo.school} · {classInfo.year}</p>
          </div>
          <p className="footer-note">本網站僅供班級紀念使用，嚴禁歧視、霸凌等不當言論。</p>
        </div>
      </footer>
    </div>
  )
}
