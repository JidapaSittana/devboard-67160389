import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import ProfilePage from "./pages/ProfilePage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    //วางไว้นอกสุดเพราะให้ทุกตัวเข้าถึงข้อมูบรายการโปรดได้
    <FavoritesProvider>
      {/*คุมประวัติเข้าชม ให้ใช้ปุ่มBack/Forwardได้*/}
      <BrowserRouter>
        {/*วางไว้นอก routes ให้ navbar โชว์ตลอดไม่ว่าอยู่หน้าไหน*/}
        <Navbar />
        {/*เป็นเหมือนสวิตช์ ทำให้โชว์ component ตาม URL ที่เลือก*/}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
