import { createContext, useContext, useState } from "react";

// 1. สร้าง context object
//สร้างที่เก็บข้อมูลกลางให้ component อื่นมาดึงไปใช้
const FavoritesContext = createContext();

// 2. Provider component — ครอบ App ทั้งหมด
//บริการข้อมูลเอาไปล้อมแอปฯไว้
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  //.includes เช็คว่าโพสต์มีอยู่ในรายการโปรดหรือยัง
  //ถ้ามีใช้ .filter ลบไอดีออก, ไม่มีใช้ prev เพิ่มไอดีเข้า
  function toggleFavorite(postId) {
    setFavorites((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId],
    );
  }

  //ส่งทั้งรายชื่อหัวใจกับฟังก์ชันหัวใจออกให้คนอื่นใช้
  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// 3. Custom hook สำหรับใช้งาน context ง่าย ๆ
//component อื่นจะใช้พิมพ์แค่ const {fav..}
export function useFavorites() {
  return useContext(FavoritesContext);
}
