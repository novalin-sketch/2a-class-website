import { useEffect, useRef, useState } from 'react'

const CW = 900
const CH = 540
const TARGET = 24 // 擊落這麼多障礙物即過關
const MAX_LIVES = 3

const COLORS = {
  bg: '#0d1a14',
  star: '#21392c',
  plane: '#e6b94e',
  planeWing: '#e2674a',
  bullet: '#f3ead2',
  ob1: '#e2674a',
  ob2: '#2f9e8f',
  text: '#e8efe3',
}

export default function GameSection() {
  const canvasRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | playing | won | lost
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(MAX_LIVES)

  const keys = useRef({ left: false, right: false, fire: false })
  const game = useRef(null)
  const raf = useRef(0)

  // keyboard
  useEffect(() => {
    const down = (e) => {
      if (['ArrowLeft', 'a', 'A'].includes(e.key)) keys.current.left = true
      if (['ArrowRight', 'd', 'D'].includes(e.key)) keys.current.right = true
      if ([' ', 'Spacebar', 'ArrowUp', 'w', 'W'].includes(e.key)) keys.current.fire = true
      if (status === 'playing' && ['ArrowLeft', 'ArrowRight', 'ArrowUp', ' ', 'Spacebar'].includes(e.key)) {
        e.preventDefault()
      }
    }
    const up = (e) => {
      if (['ArrowLeft', 'a', 'A'].includes(e.key)) keys.current.left = false
      if (['ArrowRight', 'd', 'D'].includes(e.key)) keys.current.right = false
      if ([' ', 'Spacebar', 'ArrowUp', 'w', 'W'].includes(e.key)) keys.current.fire = false
    }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => {
      window.removeEventListener('keydown', down)
      window.removeEventListener('keyup', up)
    }
  }, [status])

  function startGame() {
    const stars = Array.from({ length: 40 }, () => ({
      x: Math.random() * CW,
      y: Math.random() * CH,
      s: Math.random() * 1.6 + 0.4,
    }))
    game.current = {
      player: { x: CW / 2, w: 52, h: 44 },
      bullets: [],
      obstacles: [],
      stars,
      lastShot: 0,
      spawn: 0,
      destroyed: 0,
      lives: MAX_LIVES,
      score: 0,
      frame: 0,
    }
    setScore(0)
    setLives(MAX_LIVES)
    setStatus('playing')
  }

  useEffect(() => {
    if (status !== 'playing') return
    const ctx = canvasRef.current.getContext('2d')
    const PLAYER_SPEED = 7
    const BULLET_SPEED = 12

    const rect = (a, b) =>
      a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y

    const loop = () => {
      const g = game.current
      g.frame += 1

      // player
      if (keys.current.left) g.player.x -= PLAYER_SPEED
      if (keys.current.right) g.player.x += PLAYER_SPEED
      g.player.x = Math.max(g.player.w / 2, Math.min(CW - g.player.w / 2, g.player.x))

      // shoot
      const now = g.frame
      if (keys.current.fire && now - g.lastShot > 9) {
        g.bullets.push({ x: g.player.x - 3, y: CH - 70, w: 6, h: 16 })
        g.lastShot = now
      }
      g.bullets.forEach((b) => (b.y -= BULLET_SPEED))
      g.bullets = g.bullets.filter((b) => b.y + b.h > 0)

      // spawn obstacles, difficulty ramps with score
      const interval = Math.max(26, 70 - Math.floor(g.score / 40))
      if (g.frame - g.spawn > interval) {
        g.spawn = g.frame
        const w = 38 + Math.random() * 36
        const tough = Math.random() < 0.28
        g.obstacles.push({
          x: Math.random() * (CW - w),
          y: -50,
          w,
          h: 30,
          hp: tough ? 2 : 1,
          speed: 1.7 + Math.random() * 1.6 + g.score / 700,
          color: tough ? COLORS.ob2 : COLORS.ob1,
        })
      }

      const player = {
        x: g.player.x - g.player.w / 2,
        y: CH - g.player.h - 14,
        w: g.player.w,
        h: g.player.h,
      }

      // move + collide obstacles
      for (let i = g.obstacles.length - 1; i >= 0; i--) {
        const o = g.obstacles[i]
        o.y += o.speed
        // bullet hits
        for (let j = g.bullets.length - 1; j >= 0; j--) {
          if (rect(g.bullets[j], o)) {
            g.bullets.splice(j, 1)
            o.hp -= 1
            if (o.hp <= 0) {
              g.obstacles.splice(i, 1)
              g.score += 10
              g.destroyed += 1
            }
            break
          }
        }
        if (!g.obstacles[i]) continue
        // reached bottom
        if (o.y > CH) {
          g.obstacles.splice(i, 1)
          g.lives -= 1
          continue
        }
        // hit player
        if (rect(o, player)) {
          g.obstacles.splice(i, 1)
          g.lives -= 1
        }
      }

      // sync HUD
      if (g.score !== score) setScore(g.score)
      if (g.lives !== lives) setLives(g.lives)

      // ---- draw ----
      ctx.fillStyle = COLORS.bg
      ctx.fillRect(0, 0, CW, CH)
      g.stars.forEach((s) => {
        s.y += s.s
        if (s.y > CH) { s.y = 0; s.x = Math.random() * CW }
        ctx.fillStyle = COLORS.star
        ctx.fillRect(s.x, s.y, s.s, s.s)
      })

      // obstacles
      g.obstacles.forEach((o) => {
        ctx.fillStyle = o.color
        ctx.fillRect(o.x, o.y, o.w, o.h)
        ctx.fillStyle = 'rgba(255,255,255,0.25)'
        ctx.fillRect(o.x, o.y, o.w, 5)
      })

      // bullets
      ctx.fillStyle = COLORS.bullet
      g.bullets.forEach((b) => ctx.fillRect(b.x, b.y, b.w, b.h))

      // player plane (triangle body + wings)
      const px = g.player.x
      const py = CH - 14
      ctx.fillStyle = COLORS.planeWing
      ctx.fillRect(px - 26, py - 16, 52, 10)
      ctx.fillStyle = COLORS.plane
      ctx.beginPath()
      ctx.moveTo(px, py - g.player.h)
      ctx.lineTo(px - 18, py)
      ctx.lineTo(px + 18, py)
      ctx.closePath()
      ctx.fill()

      // progress bar (destroyed / target)
      ctx.fillStyle = 'rgba(255,255,255,0.15)'
      ctx.fillRect(20, 18, CW - 40, 8)
      ctx.fillStyle = COLORS.bullet
      ctx.fillRect(20, 18, ((CW - 40) * Math.min(g.destroyed, TARGET)) / TARGET, 8)

      // win / lose checks
      if (g.destroyed >= TARGET) {
        setScore(g.score)
        setStatus('won')
        return
      }
      if (g.lives <= 0) {
        setLives(0)
        setScore(g.score)
        setStatus('lost')
        return
      }

      raf.current = requestAnimationFrame(loop)
    }

    raf.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  // touch control helpers
  const press = (k, v) => (e) => {
    e.preventDefault()
    keys.current[k] = v
  }

  return (
    <section className="game-section" id="game">
      <div className="section-head">
        <span className="section-index">00</span>
        <h2 className="section-title">空中作戰：飛機小遊戲</h2>
      </div>
      <p className="section-sub">操控小飛機，擊落 {TARGET} 個障礙物即可過關。別讓障礙物撞到你或飛過底線。</p>

      <div className="game-frame">
        <div className="game-hud">
          <span>SCORE&nbsp;&nbsp;{String(score).padStart(4, '0')}</span>
          <div className="hud-stats">
            <span>LIVES&nbsp;&nbsp;{'▮'.repeat(Math.max(lives, 0)) || '—'}</span>
            <span>TARGET&nbsp;&nbsp;{TARGET}</span>
          </div>
        </div>

        <div className="game-canvas-wrap">
          <canvas ref={canvasRef} width={CW} height={CH} />
          {status !== 'playing' && (
            <div className="game-overlay">
              {status === 'idle' && (
                <>
                  <h3>空中作戰</h3>
                  <p>方向鍵 ← → 移動，空白鍵射擊。擊落 {TARGET} 個障礙物過關。</p>
                  <button className="btn-play" onClick={startGame}>開始遊戲</button>
                </>
              )}
              {status === 'won' && (
                <>
                  <h3 className="win">過關！</h3>
                  <p>得分 {score}。你成功守住了天空。</p>
                  <button className="btn-play" onClick={startGame}>再玩一次</button>
                </>
              )}
              {status === 'lost' && (
                <>
                  <h3 className="lose">任務失敗</h3>
                  <p>得分 {score}。再接再厲，守住底線。</p>
                  <button className="btn-play" onClick={startGame}>重新挑戰</button>
                </>
              )}
            </div>
          )}
        </div>

        <div className="touch-controls">
          <button onTouchStart={press('left', true)} onTouchEnd={press('left', false)}>◀ 左</button>
          <button onTouchStart={press('fire', true)} onTouchEnd={press('fire', false)}>射擊</button>
          <button onTouchStart={press('right', true)} onTouchEnd={press('right', false)}>右 ▶</button>
        </div>
      </div>

      <div className="game-keys">
        <span><span className="key-cap">←</span><span className="key-cap">→</span> 移動</span>
        <span><span className="key-cap">空白鍵</span> 射擊</span>
        <span>手機可用下方按鈕操作</span>
      </div>
    </section>
  )
}
