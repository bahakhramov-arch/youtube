import { Home, TrendingUp, Youtube, Film, BookMarked, Clock, ThumbsUp, ChevronDown, Gamepad2 } from "lucide-react";
import { subscriptions } from "../data/videos";

const mainLinks = [
  { icon: Home, label: "Home" },
  { icon: TrendingUp, label: "Trends" },
  { icon: Youtube, label: "Subscriptions" },
  { icon: Film, label: "Originals" },
];

const libraryLinks = [
  { icon: BookMarked, label: "Library" },
  { icon: Clock, label: "History" },
  { icon: ThumbsUp, label: "Your videos" },
  { icon: Film, label: "Your movies" },
  { icon: Clock, label: "Watch later" },
];

const linkStyle = {
  display: "flex", alignItems: "center", gap: "24px",
  padding: "10px 12px", borderRadius: "12px", color: "white",
  fontSize: "14px", fontWeight: 500, textDecoration: "none",
};

const sectionTitle = {
  fontSize: "12px", fontWeight: 700, color: "white",
  textTransform: "uppercase", letterSpacing: "0.05em",
  padding: "4px 24px", marginBottom: "8px",
};

const divider = { height: "1px", backgroundColor: "#272727", margin: "12px" };

function NavLink({ icon: Icon, label, collapsed }) {
  return (
    <a href="#" style={linkStyle}>
      <Icon size={20} style={{ flexShrink: 0 }} />
      {!collapsed && <span>{label}</span>}
    </a>
  );
}

export default function Sidebar({ collapsed }) {
  const sidebarStyle = {
    position: "fixed", left: 0, top: "56px", bottom: 0,
    width: collapsed ? "72px" : "240px",
    display: "flex", flexDirection: "column",
    overflowY: "auto", backgroundColor: "#0f0f0f",
    zIndex: 40, paddingBottom: "24px",
    transition: "width 0.3s",
  };

  return (
    <aside style={sidebarStyle}>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "8px 12px 0" }}>
        {mainLinks.map((l) => <NavLink key={l.label} icon={l.icon} label={l.label} collapsed={collapsed} />)}
      </div>

      {!collapsed && (
        <>
          <div style={divider} />
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "0 12px" }}>
            {libraryLinks.map((l) => <NavLink key={l.label} icon={l.icon} label={l.label} collapsed={false} />)}
            <a href="#" style={linkStyle}>
              <ChevronDown size={20} />
              <span>Show more</span>
            </a>
          </div>

          <div style={divider} />
          <p style={sectionTitle}>Subscriptions</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "0 12px" }}>
            {subscriptions.map((s) => (
              <a key={s.name} href="#" style={{ ...linkStyle, gap: "16px", color: "#aaa" }}>
                <img src={s.avatar} alt={s.name} style={{ width: "24px", height: "24px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                <span>{s.name}</span>
              </a>
            ))}
            <a href="#" style={{ ...linkStyle, gap: "16px", color: "#aaa" }}>
              <ChevronDown size={20} />
              <span>Show 47 more</span>
            </a>
          </div>

          <div style={divider} />
          <p style={sectionTitle}>More from YouTube</p>
          <div style={{ padding: "0 12px" }}>
            <NavLink icon={Gamepad2} label="Gaming" collapsed={false} />
          </div>
        </>
      )}
    </aside>
  );
}
