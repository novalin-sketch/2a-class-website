import { Routes, Route, NavLink } from 'react-router-dom'
import Overview from './pages/Overview.jsx'
import Members from './pages/Members.jsx'
import Stories from './pages/Stories.jsx'
import { classInfo } from './data/classInfo.js'

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? 'nav-link nav-link-active' : 'nav-link'
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <NavLink to="/" className="brand">
          <span className="brand-dot" />
          {classInfo.name}
        </NavLink>
        <nav className="nav">
          <NavLink to="/" end className={linkClass}>班級總覽</NavLink>
          <NavLink to="/members" className={linkClass}>個人介紹</NavLink>
          <NavLink to="/stories" className={linkClass}>奇聞趣事</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/members" element={<Members />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <p>{classInfo.name} · {classInfo.school} · {classInfo.year}</p>
        <p className="footer-note">本網站僅供班級紀念使用 · 嚴禁歧視、霸凌等不當言論</p>
      </footer>
    </div>
  )
}
