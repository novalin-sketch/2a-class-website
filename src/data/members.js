// 個人介紹資料 — 一人一個物件，同學各自編輯自己的區塊
//
// 欄位說明：
//   name        姓名
//   nickname    綽號（可留空）
//   title       職位 / 身分（可留空）
//   bio         自我介紹，想寫什麼都可以
//   tags        標籤（興趣、特質…），陣列
//   links       想放的連結，陣列：{ label: '顯示文字', url: '網址' }
//   photo       照片檔名（放在 public/photos/ 內）。
//               ⚠️ 規定：照片只能穿「校園服裝」——制服、運動服，
//                  或競賽相關服裝（例如比賽用的女僕裝 cosplay）。
//               留空則自動以姓名首字產生色塊頭像。
//   uniform     照片服裝類型：'制服' | '運動服' | '競賽服'
//
// 第一位通常放班導，其餘為同學。

export const members = [
  {
    name: '王美惠',
    nickname: '惠惠老師',
    title: '班導師',
    bio: '教國文，相信每個孩子都有自己的光。最愛在週記裡跟大家聊天，討厭遲交作業（但會原諒你）。',
    tags: ['國文', '溫柔但嚴格', '愛喝手搖'],
    links: [{ label: '班級共筆', url: '#' }],
    photo: '',
    uniform: '制服',
    teacher: true,
  },
  { name: '陳柏宇', nickname: '宇哥', title: '班長', bio: '把全班揪在一起的人。擅長排活動流程，籃球場上也很罩。', tags: ['領導', '籃球', '愛排程'], links: [{ label: 'Instagram', url: '#' }], photo: '', uniform: '運動服' },
  { name: '林思妤', nickname: '小妤', title: '副班長', bio: '行事曆控，待辦清單從不漏掉一條。喜歡畫畫跟貓。', tags: ['畫畫', '貓派', '細心'], links: [{ label: '作品集', url: '#' }, { label: 'Threads', url: '#' }], photo: '', uniform: '制服' },
  { name: '黃柏翰', nickname: '阿翰', title: '風紀股長', bio: '看起來兇其實很善良，午休糾察隊隊長。', tags: ['正義感', '健身', '冷面笑將'], links: [], photo: '', uniform: '運動服' },
  { name: '張雅婷', nickname: '婷婷', title: '學藝股長', bio: '壁報設計擔當，配色直覺超準。手帳愛好者。', tags: ['設計', '手帳', '攝影'], links: [{ label: 'Pinterest', url: '#' }], photo: '', uniform: '制服' },
  { name: '吳承恩', nickname: '恩恩', title: '康樂股長', bio: '班上的開心果，活動沒有他就少一味。會彈吉他。', tags: ['吉他', '搞笑', '熱血'], links: [{ label: 'YouTube', url: '#' }], photo: '', uniform: '運動服' },
  { name: '劉子瑜', nickname: '瑜瑜', title: '衛生股長', bio: '掃具分配公正無私，最受不了地上有紙屑。', tags: ['整潔', '料理', '植物'], links: [], photo: '', uniform: '制服' },
  { name: '蔡宗翰', nickname: '翰翰', title: '總務股長', bio: '班費記帳到小數點，Excel 用得比誰都熟。', tags: ['理財', '桌遊', '可靠'], links: [{ label: '記帳分享', url: '#' }], photo: '', uniform: '制服' },
  { name: '鄭家豪', nickname: '阿豪', title: '體育股長', bio: '班際賽報名常勝軍，百米跑超快。', tags: ['田徑', '熱血', '吃很多'], links: [], photo: '', uniform: '運動服' },
  { name: '謝沛蓁', nickname: '蓁蓁', title: '資訊股長', bio: '班網就是我做的！喜歡寫小程式跟拍 vlog。', tags: ['程式', '剪片', '科技宅'], links: [{ label: 'GitHub', url: '#' }, { label: '個人網站', url: '#' }], photo: '', uniform: '制服' },
  { name: '李宜庭', nickname: '庭庭', bio: '安靜的閱讀者，書包裡永遠有一本小說。', tags: ['閱讀', '寫作'], links: [{ label: '方格子', url: '#' }], photo: '', uniform: '制服' },
  { name: '周冠廷', nickname: '廷廷', bio: '電競魂，反應速度全班第一。', tags: ['電競', '物理'], links: [{ label: 'Twitch', url: '#' }], photo: '', uniform: '運動服' },
  { name: '許心怡', nickname: '怡怡', bio: '烘焙小達人，下課常帶餅乾分大家。', tags: ['烘焙', '可愛系'], links: [{ label: '甜點帳', url: '#' }], photo: '', uniform: '制服' },
  { name: '楊志明', nickname: '阿明', bio: '修東西高手，班上電器壞了找他就對了。', tags: ['DIY', '機械'], links: [], photo: '', uniform: '運動服' },
  { name: '郭婉婷', nickname: '婉婷', bio: '熱舞社主力，運動會表演的編舞者。', tags: ['熱舞', '音樂'], links: [{ label: '舞蹈影片', url: '#' }], photo: '', uniform: '競賽服' },
  { name: '何俊賢', nickname: '阿賢', bio: '數學小老師，解題思路超清楚。', tags: ['數學', '圍棋'], links: [], photo: '', uniform: '制服' },
  { name: '曾雅琪', nickname: '琪琪', bio: '英文超溜，夢想是當口譯員。', tags: ['英文', '旅行'], links: [{ label: '語言交換', url: '#' }], photo: '', uniform: '制服' },
  { name: '邱建宏', nickname: '宏宏', bio: '攝影社社員，總在角落默默拍下大家。', tags: ['攝影', '單車'], links: [{ label: '相簿', url: '#' }], photo: '', uniform: '運動服' },
  { name: '葉佩珊', nickname: '珊珊', bio: '愛唱歌，校歌比賽指定領唱。', tags: ['唱歌', '合唱團'], links: [{ label: 'cover 帳', url: '#' }], photo: '', uniform: '制服' },
  { name: '潘冠霖', nickname: '霖霖', bio: '科展常客，對化學實驗超有熱情。', tags: ['化學', '科展'], links: [{ label: '科展報告', url: '#' }], photo: '', uniform: '競賽服' },
  { name: '蕭詠晴', nickname: '晴晴', bio: '插畫接案中，班服圖案是我設計的。', tags: ['插畫', '繪圖板'], links: [{ label: 'IG 畫帳', url: '#' }], photo: '', uniform: '制服' },
  { name: '羅志偉', nickname: '偉偉', bio: '排球隊舉球員，默契擔當。', tags: ['排球', '團隊'], links: [], photo: '', uniform: '運動服' },
  { name: '賴怡君', nickname: '君君', bio: '愛貓如命，志願是當獸醫。', tags: ['動物', '生物'], links: [{ label: '貓咪日常', url: '#' }], photo: '', uniform: '制服' },
  { name: '高銘宏', nickname: '銘宏', bio: '熱衷天文，會帶望遠鏡來看流星雨。', tags: ['天文', '攝影'], links: [], photo: '', uniform: '運動服' },
  { name: '江欣穎', nickname: '欣欣', bio: '手作飾品在小市集擺攤過。', tags: ['手作', '市集'], links: [{ label: '蝦皮賣場', url: '#' }], photo: '', uniform: '制服' },
  { name: '董彥廷', nickname: '彥廷', bio: '辯論社一辯，邏輯清晰嘴砲也強。', tags: ['辯論', '時事'], links: [], photo: '', uniform: '競賽服' },
  { name: '范瑋琪', nickname: '瑋琪', bio: '熱愛桌球，曾拿縣賽第三名。', tags: ['桌球', '甜食'], links: [{ label: '比賽影片', url: '#' }], photo: '', uniform: '運動服' },
  { name: '游凱翔', nickname: '凱翔', bio: '吉他社團長，午休常開小型演唱會。', tags: ['吉他', '創作'], links: [{ label: 'StreetVoice', url: '#' }], photo: '', uniform: '運動服' },
  { name: '簡品妍', nickname: '品妍', bio: '愛拍底片相機，喜歡記錄日常光影。', tags: ['底片', '文青'], links: [{ label: '底片帳', url: '#' }], photo: '', uniform: '制服' },
  { name: '宋柏勳', nickname: '柏勳', bio: '機器人社，程式跟硬體都會碰。', tags: ['機器人', '程式'], links: [{ label: '專題影片', url: '#' }], photo: '', uniform: '競賽服' },
  { name: '徐若瑄', nickname: '若瑄', bio: '校刊社編輯，採訪寫稿一把罩。', tags: ['寫作', '採訪'], links: [{ label: '校刊專欄', url: '#' }], photo: '', uniform: '制服' },
  { name: '方俊傑', nickname: '俊傑', bio: '足球隊前鋒，進球後愛擺招牌動作。', tags: ['足球', '熱血'], links: [], photo: '', uniform: '運動服' },
  { name: '袁雅文', nickname: '雅文', bio: '志工社常客，假日去淨灘跟陪伴長者。', tags: ['志工', '公益'], links: [{ label: '志工紀錄', url: '#' }], photo: '', uniform: '制服' },
  { name: '盧子晴', nickname: '子晴', bio: '咖啡因驅動的數學狂，喜歡解難題。', tags: ['數學', '咖啡'], links: [], photo: '', uniform: '制服' },
  { name: '石承翰', nickname: '承翰', bio: '熱舞社 popping，運動會炒熱全場。', tags: ['街舞', '音樂'], links: [{ label: '舞蹈帳', url: '#' }], photo: '', uniform: '競賽服' },
  { name: '湯佳穎', nickname: '佳穎', bio: '生物課最認真的人，標本畫得超精細。', tags: ['生物', '繪圖'], links: [], photo: '', uniform: '制服' },
  { name: '田宥安', nickname: '宥安', bio: '桌遊愛好者，自己設計過一套卡牌。', tags: ['桌遊', '設計'], links: [{ label: '設計分享', url: '#' }], photo: '', uniform: '運動服' },
]
