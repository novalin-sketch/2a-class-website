// 頭像元件：有照片就顯示照片，沒有就用姓名首字產生柔和色塊
const palette = [
  '#fca5a5', '#fdba74', '#fcd34d', '#86efac', '#67e8f9',
  '#93c5fd', '#c4b5fd', '#f0abfc', '#a5b4fc', '#5eead4',
]

function colorFromName(name) {
  let sum = 0
  for (const ch of name) sum += ch.charCodeAt(0)
  return palette[sum % palette.length]
}

export default function Avatar({ name = '', photo = '', folder = 'photos', size = 96 }) {
  const initial = name ? name.slice(0, 1) : '?'
  const style = { width: size, height: size, fontSize: size * 0.4 }
  if (photo) {
    return (
      <img
        className="avatar avatar-photo"
        src={`${folder}/${photo}`}
        alt={name}
        style={{ width: size, height: size }}
      />
    )
  }
  return (
    <div className="avatar avatar-initial" style={{ ...style, background: colorFromName(name) }}>
      {initial}
    </div>
  )
}
