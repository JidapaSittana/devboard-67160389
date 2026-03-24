import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

//ดึงข้อมูล Commentsจาก APIนอกมาแสดงอิงตาม IDของโพสต์นั้นๆ
//comments เก็บรายการ Commentsที่ดึงมาเริ่มต้นเป็นอาเรย์ว่าง[]
//loading เช็คว่าข้อมูลกำลังโหลดอยู่ไหม เริ่มต้นเป็น true โหลดทันทีที่เปิดหน้า
//error เก็บข้อความแจ้งเตือน เผื่อกรณีที่ดึงข้อมูลไม่สำเร็จ
function CommentList({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //ฟังก์ชันที่ทำงานอัตโนมัติตอนคอมโพเนนต์ถูกแสดง
    async function fetchComments() {
      //พยายามดึงข้อมูล ถ้าสำเร็จเอาข้อมูลไปเก็บใน setComments
      try {
        setLoading(true);
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        );
        //ขอข้อมูลจากURL ของAPI ใส่ ${postId} เข้าไปเพื่อให้ได้คอมเมนต์ที่ตรงกับโพสต์นั้นๆ
        if (!res.ok) throw new Error("ดึงความคิดเห็นไม่สำเร็จ");
        const data = await res.json();
        setComments(data);
      } catch (err) {
        //ถ้าดึงไม่สำเร็จให้เก็บข้อความใน setError
        setError(err.message);
      } finally {
        //สำเร็จหรือไม่สำเร็จให้สั่ง setLoading(false) ให้เลิกโหลดได้แล้วข้อมูลมาแล้ว
        setLoading(false);
      }
    }
    fetchComments();
  }, [postId]); // fetch ใหม่ทุกครั้งที่ postId เปลี่ยน

  if (loading)
    return <p style={{ color: "#718096" }}>กำลังโหลดความคิดเห็น...</p>;
  if (error) return <p style={{ color: "#c53030" }}>{error}</p>;

  return (
    <div style={{ marginTop: "0.75rem" }}>
      <strong style={{ color: "#4a5568" }}>
        ความคิดเห็น ({comments.length})
      </strong>
      {/*.map() วนลูปเอาข้อมูล comment มาสร้างกล่องคอมเมนต์แสดงชื่อคนโพสต์,เนื้อหา*/}
      {comments.map((comment) => (
        <div
          key={comment.id}
          style={{
            background: "#f7fafc",
            borderRadius: "6px",
            padding: "0.5rem 0.75rem",
            marginTop: "0.5rem",
            fontSize: "0.85rem",
          }}
        >
          <div style={{ fontWeight: "bold", color: "#2d3748" }}>
            {comment.name}
          </div>
          <div style={{ color: "#718096" }}>{comment.body}</div>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
