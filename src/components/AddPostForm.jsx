import { useState } from "react";

function AddPostForm({ onAddPost }) {
  const [title, setTitle] = useState(""); //สร้างที่เก็บข้อมูล 2ที่คือ titleและ bodyเอาไว้จำว่าผู้ใช้พิมพ์อะไรลงไปในฟอร์มบ้าง
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); //สั่งไม่ให้หน้าเว็บ Refreshเองเวลากดส่งฟอร์ม
    if (!title.trim() || !body.trim()) return; //ป้องกันการส่งช่องว่าง

    onAddPost({ title, body }); //ส่งข้อมูลที่พิมพ์เสร็จกลับไปให้คอมโพเนนต์หลักใช้งานต่อ
    setTitle(""); //เคลียร์ formหลังส่ง
    setBody("");
  }
  //Challenge Task2
  //เช็คว่าเหลือน้อยกว่า10ตัวหรือยังก็คือต้องพิมพ์เกิน 90ตัว เอาไว้ไปใช้เปลี่ยนเป็นสีแดงตอนใกล้เกิน 100
  const isNearLimit = title.length > 90;

  return (
    <form
      onSubmit={handleSubmit} //ถ้ากดปุ่มโพสต์หรือ Enterในฟอร์ม ให้เรียกฟังก์ชัน handleSubmit ที่เตรียมไว้ข้างบน
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1.5rem",
        background: "#f7fafc",
      }}
    >
      <h3 style={{ margin: "0 0 0.75rem", color: "#2d3748" }}>
        เพิ่มโพสต์ใหม่
      </h3>

      <div style={{ marginBottom: "0.5rem" }}>
        <input
          type="text"
          placeholder="หัวข้อโพสต์"
          value={title} //ให้หัวข้อในช่องพิมพ์ตรงกับ State ที่เก็บไว้
          onChange={(e) => setTitle(e.target.value)} //ทุกครั้งพิมพ์ให้เอาตัวอักษรใหม่เก็บใน setTitle
          maxLength={100} //ตั้งแม็กไว้ไม่ให้พิมพ์เกิน 100 ตัว
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "0.5rem",
            border: "1px solid #cbd5e0",
            borderRadius: "4px",
            fontSize: "1rem",
            boxSizing: "border-box",
          }}
        />
        {/*Challenge Task2*/}
        {/*โชว์เลขนับอักษรในเว็บ, เป็นสีเป็นแดงถ้าใกล้ถึงลิมิตก็คือฟังก์ชัน isNearLimit เป็นจริง*/}
        <div
          style={{
            textAlign: "right",
            fontSize: "0.8rem",
            color: isNearLimit ? "red" : "gray",
            marginTop: "4px",
          }}
        >
          {/*ตัวนับอักษร*/}
          {title.length}/100
        </div>
      </div>

      {/*เหมือนช่องหัวข้อ แต่เก็บข้อมูลยาวกว่า*/}
      <textarea
        placeholder="เนื้อหาโพสต์"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={3}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "0.75rem",
          border: "1px solid #cbd5e0",
          borderRadius: "4px",
          fontSize: "1rem",
          resize: "vertical",
          boxSizing: "border-box",
        }}
      />

      <button
        type="submit"
        style={{
          background: "#1e40af",
          color: "white",
          border: "none",
          padding: "0.5rem 1.5rem",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        โพสต์
      </button>
    </form>
  );
}

export default AddPostForm;
