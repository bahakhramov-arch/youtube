import { Menu, Search, Mic, Video, Grid3X3, Bell } from "lucide-react";

const styles = {
  header: {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "0 16px", height: "56px", backgroundColor: "#0f0f0f",
  },
  left: { display: "flex", alignItems: "center", gap: "16px" },
  iconBtn: {
    padding: "8px", borderRadius: "50%", backgroundColor: "transparent",
    color: "white", display: "flex", alignItems: "center", justifyContent: "center",
  },
  center: { display: "flex", alignItems: "center", gap: "8px", flex: 1, maxWidth: "600px", margin: "0 16px" },
  searchBox: {
    display: "flex", flex: 1, alignItems: "center",
    border: "1px solid #303030", borderRadius: "9999px", overflow: "hidden",
    backgroundColor: "#121212",
  },
  input: {
    flex: 1, backgroundColor: "transparent", padding: "8px 16px",
    fontSize: "14px", color: "white", outline: "none", border: "none",
  },
  searchBtn: {
    padding: "8px 16px", backgroundColor: "#222", borderLeft: "1px solid #303030",
    color: "white", display: "flex", alignItems: "center",
  },
  right: { display: "flex", alignItems: "center", gap: "8px" },
  avatar: { width: "32px", height: "32px", borderRadius: "50%", cursor: "pointer", objectFit: "cover" },
};

export default function Header({ onMenuClick }) {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <button onClick={onMenuClick} style={styles.iconBtn}>
          <Menu size={20} />
        </button>
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
          <svg viewBox="0 0 90 20" width="90" height="20" fill="none">
            <rect width="26" height="20" rx="5" fill="#FF0000" />
            <polygon points="11,6 20,10 11,14" fill="white" />
            <text x="30" y="15" fontSize="16" fontWeight="bold" fill="white" fontFamily="Roboto,sans-serif">Premium</text>
          </svg>
        </a>
      </div>

      <div style={styles.center}>
        <div style={styles.searchBox}>
          <input type="search" placeholder="Search" style={styles.input} />
          <button style={styles.searchBtn}>
            <Search size={18} />
          </button>
        </div>
        <button style={styles.iconBtn}>
          <Mic size={20} />
        </button>
      </div>

      <div style={styles.right}>
        <button style={styles.iconBtn}><Video size={20} /></button>
        <button style={styles.iconBtn}><Grid3X3 size={20} /></button>
        <button style={styles.iconBtn}><Bell size={20} /></button>
        <img src="https://picsum.photos/seed/me/32/32" alt="avatar" style={styles.avatar} />
      </div>
    </header>
  );
}
