//รับค่า count ตัวเลขจำนวนโพสต์มาจาก component หลักผ่าน Props
function PostCount({ count }) {
  return (
    <p style={{ color: "#718096", fontSize: "0.9rem", marginBottom: "1rem" }}>
      โพสต์ทั้งหมด: {count} รายการ
    </p>
  );
}

export default PostCount;
