# 我們這一班 · 班級網站

用 React + Vite 製作的班級紀念網站，白底乾淨風格。共三個頁面：

- **班級總覽** — 各職位由誰擔任、教室環境、班級大合照
- **個人介紹** — 一人一格的個人資料卡（含自我介紹、標籤、連結）
- **奇聞趣事** — 隨手塗鴉、競賽紀錄、短文、教室日誌（可分類篩選）

## 開始使用

```bash
npm install
npm run dev      # 本機開發，瀏覽器開 http://localhost:5173
npm run build    # 產生可部署的 dist/
npm run preview  # 預覽 build 結果
```

## 怎麼改成自己的內容

所有內容都集中在 `src/data/`，不用碰程式碼就能編輯：

| 檔案 | 內容 |
| --- | --- |
| `src/data/classInfo.js` | 班級名稱、學校、教室照片、合照 |
| `src/data/roles.js` | 班級職位與擔任者 |
| `src/data/members.js` | 每位同學的個人介紹（一人一個物件） |
| `src/data/stories.js` | 奇聞趣事貼文 |

## 放照片

把圖片檔放到對應資料夾，再於 data 檔填入「檔名」即可：

- 個人照片 → `public/photos/`，填到 members 的 `photo`
- 奇聞趣事圖 → `public/stories/`，填到 stories 的 `image`
- 教室／合照 → `public/`

未填照片時會自動顯示色塊頭像或表情符號占位。

## 照片與內容規範

- 個人照片**僅限校園服裝**：制服、運動服，或競賽相關服裝（如比賽用的 cosplay）。
- 所有內容**嚴禁歧視、霸凌**等不當言論。

> 目前資料皆為範例假資料，請替換成班上真實內容。
