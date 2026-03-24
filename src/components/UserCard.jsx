function UserCard({ name, email }) {
  //ดึงตัวอักษรแรกชื่อนามสกุลมาทำโปรไฟล์ชื่อ
  const initials = name
    .split(" ") //แยกชื่อกับนามสกุลด้วยช่อง
    .map((n) => n[0]) //ลูปเอาตัวแรกชื่อ นามสกุลออกมา
    .join(""); //รวมตัวแรกเข้าด้วยกัน

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
        background: "white",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          background: "#1e40af",
          color: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "0.9rem",
        }}
      >
        {initials}
      </div>
      <div>
        {/*แยกสีชื่อกับเมล*/}
        <div style={{ fontWeight: "bold", color: "#2d3748" }}>{name}</div>
        <div style={{ fontSize: "0.85rem", color: "#718096" }}>{email}</div>
      </div>
    </div>
  );
}

export default UserCard;
