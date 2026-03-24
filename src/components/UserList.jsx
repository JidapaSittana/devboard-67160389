import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import LoadingSpinner from "./LoadingSpinner";

//ตั้ง users รอรับชื่อที่จะดึงมา
//loading ให้ตอนแรกโหลด
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  //ดึงข้อมูล users จากเว็บในรูป json
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch {
        //ไม่แสดง error ในตัวอย่างนี้ (นักศึกษาลองเพิ่มเองได้)
      } finally {
        //เป็น false เสมอไม่ว่าจะดึงสำเร็จหรือไม่ ให้โชว์หน้าข้อมูลไม่ก็หน้าขาว
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <h2
        style={{
          color: "#2d3748",
          borderBottom: "2px solid #1e40af",
          paddingBottom: "0.5rem",
        }}
      >
        สมาชิก
      </h2>
      {/*.map ลูปข้อมูลทุกตัว ส่งชื่อกับอีเมลผ่าน props ไปให้ UserCard*/}
      {/*key userID ใส่ให้ react ทำงานเร็วขึ้นเวลาข้อมูลเปลี่ยน*/}
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default UserList;
