// 班級基本資訊 — 修改這裡即可更新網站抬頭、banner 與頁尾
export const classInfo = {
  name: '這樣繪2A',
  enName: 'CLASS 2-A',
  school: '繪俄史藝術高等學院',
  year: '2026 學年度',
  motto: '一起創作、一起搞怪、一起長大',
  // 首頁 16:9 banner 用到的文案
  banner: {
    kicker: 'CAMPUS / STUDIO / 2026',
    titleTop: '這樣繪',
    titleBottom: '2A',
    subtitle: '三十六種顏色，一間教室的調色盤。',
  },
  // 教室環境：把照片放到 public/ 後填 photo 檔名；留空顯示色塊
  classroomPhotos: [
    { caption: '教室前門', photo: '' },
    { caption: '後方佈告欄與書櫃', photo: '' },
    { caption: '靠窗的座位區', photo: '' },
    { caption: '掃地用具櫃', photo: '' },
  ],
  // 班級大合照：照片放 public/ 後填 photo（已匯入入學大合照）
  groupPhoto: {
    caption: '班級入學大合照',
    photo: 'class-photo-1.png',
  },
}
