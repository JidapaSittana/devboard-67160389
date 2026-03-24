import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import LoadingSpinner from "./LoadingSpinner";
import { useFavorites } from "../context/FavoritesContext";
import PostCount from "./PostCount";

function PostList() {
  const { favorites, toggleFavorite } = useFavorites();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  //useEffect ดึงข้อมูลจาก API ทันทีตอนเปิดเว็บ
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("ดึงข้อมูลไม่สำเร็จ");
        const data = await res.json();
        //เอาแค่ 20 รายการแรก
        setPosts(data.slice(0, 20));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []); //[] = ทำครั้งเดียว

  //.filter เอาเฉพาะโพสต์ที่ชื่อตรงกับคำที่พิมพ์ในช่องค้นหา
  //.toLowerCase ไม่สนจะตัวเล็กใหญ๋
  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) return <LoadingSpinner />;

  if (error)
    return (
      <div
        style={{
          padding: "1.5rem",
          background: "#fff5f5",
          border: "1px solid #fc8181",
          borderRadius: "8px",
          color: "#c53030",
        }}
      >
        เกิดข้อผิดพลาด: {error}
      </div>
    );

  return (
    <div>
      <h2
        style={{
          color: "#2d3748",
          borderBottom: "2px solid #1e40af",
          paddingBottom: "0.5rem",
        }}
      >
        โพสต์ล่าสุด
      </h2>

      {/*ช่องค้นหา*/}
      <input
        type="text"
        placeholder="ค้นหาโพสต์..."
        value={search}
        //อัปเดตคำค้นหาทุกครั้งที่ผู้ใช้พิมพ์
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem 0.75rem",
          border: "1px solid #cbd5e0",
          borderRadius: "6px",
          fontSize: "1rem",
          marginBottom: "1rem",
          boxSizing: "border-box",
        }}
      />
      {/*เรียกใช้component จำนวนโพสต์*/}
      <PostCount count={filtered.length} />

      {/*เท่ากับ0 หาไม่เจอ*/}
      {filtered.length === 0 && (
        <p style={{ color: "#718096", textAlign: "center", padding: "2rem" }}>
          ไม่พบโพสต์ที่ค้นหา
        </p>
      )}

      {/*.map ลูปรายการที่กรองแล้วไปแสดงผ่านcomponent<PostCard />อีกที*/}
      {filtered.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          isFavorite={favorites.includes(post.id)}
          onToggleFavorite={() => toggleFavorite(post.id)}
        />
      ))}
    </div>
  );
}

export default PostList;
