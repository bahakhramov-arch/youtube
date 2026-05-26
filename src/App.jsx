import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CategoryFilter from "./components/CategoryFilter";
import VideoGrid from "./components/VideoGrid";
import { videos } from "./data/videos";

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0f0f0f" }}>
      <Header onMenuClick={() => setSidebarCollapsed((v) => !v)} />
      <Sidebar collapsed={sidebarCollapsed} />
      <main style={{
        marginLeft: sidebarCollapsed ? "72px" : "240px",
        paddingTop: "56px",
        transition: "margin-left 0.3s"
      }}>
        <div style={{
          position: "sticky",
          top: "56px",
          zIndex: 30,
          backgroundColor: "#0f0f0f",
          padding: "12px 24px"
        }}>
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        </div>
        <div style={{ padding: "16px 24px" }}>
          <VideoGrid videos={videos} />
        </div>
      </main>
    </div>
  );
}
