function LoadingSpinner() {
  return (
    //จัดให้ทุกอย่างอยู่กึ่งกลางจอ
    //เว้นระยะห่างรอบๆ ไม่ให้ตัวโหลดไปเบียดกับเนื้อหา
    <div style={{ textAlign: "center", padding: "3rem", color: "#718096" }}>
      <div
        style={{
          display: "inline-block",
          width: "40px",
          height: "40px",
          border: "4px solid #e2e8f0",
          borderTopColor: "#1e40af",
          borderRadius: "50%",
          //หมุน 0.8s ต่อรอบ หมุนคงที่ หมุนเรื่อยๆจนกว่าcomponentจะหายจากจอ
          animation: "spin 0.8s linear infinite",
        }}
      />
      <p style={{ marginTop: "1rem" }}>กำลังโหลด...</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      {/*เขียน CSS เข้าไปใน React, สั่งให้หมุน 360 องศา*/}
    </div>
  );
}

export default LoadingSpinner;
