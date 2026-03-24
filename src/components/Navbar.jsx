import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function Navbar() {
  //ดึงข้อมูล favorites จาก Context ให้ Navbar รู้ว่ากดถูกใจไปกี่อัน
  //ไม่ต้องส่งค่าผ่าน Props หลายชั้น
  const { favorites } = useFavorites();

  return (
    <nav
      style={{
        background: "#1e40af",
        color: "white",
        padding: "1rem 2rem",
        //ชื่อเว็บซ้ายสุด, ตัวหนังสือตรงกลางแนวตั้ง
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/*link to เปลี่ยนหน้าแล้วไม่ Refresh*/}
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <h1 style={{ margin: 0, fontSize: "1.5rem" }}>DevBoard</h1>
      </Link>

      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          หน้าหลัก
        </Link>
        <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
          สมาชิก
        </Link>
        <Link
          to="/favorites"
          style={{
            color: "white",
            textDecoration: "none",
            //ถูกใจ>0 เปลี่ยนพื้นหลังเป็นแดง
            background: favorites.length > 0 ? "#e53e3e" : "transparent",
            padding: "0.25rem 0.75rem",
            borderRadius: "20px",
            fontSize: "0.9rem",
          }}
        >
          {/*&&แสดงตัวเลข*/}
          ❤️ ถูกใจ {favorites.length > 0 && `(${favorites.length})`}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
