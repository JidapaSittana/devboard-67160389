import UserList from "../components/UserList";

//ใช้ component ที่เขียนไว้มาวาง
function ProfilePage() {
  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto", padding: "0 1rem" }}>
      <UserList />
    </div>
  );
}

export default ProfilePage;
