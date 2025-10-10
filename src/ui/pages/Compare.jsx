import React from 'react';
import { Button } from '../components';

const Box = ({title, children}) => (
  <div className="card">
    <h3 style={{marginTop:0}}>{title}</h3>
    {children}
  </div>
);

export default function Compare(){
  return (
    <div className="container">
      <div className="grid grid-2">
        <Box title="Old UI (ตัวอย่างปัญหา)">
          <ul>
            <li>ปุ่มเปลี่ยนสถานะเล็ก/หายาก</li>
            <li>ไม่มีคีย์ลัด (ต้องคลิกหลายครั้ง)</li>
            <li>ไม่มี feedback ตอนเปลี่ยนสถานะ</li>
            <li>สีไม่สอดคล้อง (อ่านยาก)</li>
          </ul>
          <div style={{marginTop:12}}>
            <button style={{height:28}}>Available</button>
            <button style={{height:28}}>Wrap-up</button>
            <button style={{height:28}}>Break</button>
          </div>
        </Box>
        <Box title="New UI (ตามสไลด์ Week11)">
          <ul>
            <li>ปุ่มใหญ่ ชัดเจน 1–2 คลิก</li>
            <li>คีย์ลัด F2/F3/F4</li>
            <li>Toast/เสียง (ต่อเพิ่มได้) แจ้งผลลัพธ์</li>
            <li>สี/คอนทราสต์ผ่าน WCAG AA</li>
          </ul>
          <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
            <Button kind="primary">Start (Available)</Button>
            <Button kind="secondary">Wrap-up</Button>
            <Button kind="danger">Break</Button>
          </div>
        </Box>
      </div>
    </div>
  );
}
