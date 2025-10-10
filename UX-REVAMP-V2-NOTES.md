# Agent Desktop — UX/UI Revamp V2
- หน้า Compare เทียบเก่า/ใหม่ชัดเจน (อ้างอิงสไลด์ Week11)
- ปุ่มสถานะ + คีย์ลัด F2/F3/F4 + Toast feedback
- Router แยกหน้า Home / Compare / Team
- Design tokens + คอมโพเนนต์ (Button/Badge/Card)

การเชื่อมกับ Electron:
1) ใช้โฟลเดอร์นี้เป็น renderer หรือคัดลอกเฉพาะ `src/ui` ไปใส่ในโปรเจกต์เดิม
2) import `./ui/design-system.css` และใช้คอมโพเนนต์จาก `./ui/components`
3) ปุ่มที่ต้องการคีย์ลัด ใส่ `data-action="available|wrapup|break"`
4) ผูก WebSocket จริงเพื่ออัปเดตสถานะ

Run:
```bash
npm install
npm start
```
