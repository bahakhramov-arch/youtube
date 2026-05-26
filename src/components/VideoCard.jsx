import { CheckCircle2 } from "lucide-react";

export default function VideoCard({ video }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", cursor: "pointer" }}>
      <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", aspectRatio: "16/9", backgroundColor: "#272727" }}>
        <img
          src={video.thumbnail}
          alt={video.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <span style={{
          position: "absolute", bottom: "4px", right: "4px",
          backgroundColor: "rgba(0,0,0,0.8)", color: "white",
          fontSize: "12px", padding: "2px 4px", borderRadius: "4px", fontWeight: 500,
        }}>
          {video.duration}
        </span>
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
        <img
          src={video.avatar}
          alt={video.channel}
          style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover", flexShrink: 0, marginTop: "2px" }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <p style={{
            fontSize: "14px", fontWeight: 500, color: "white",
            display: "-webkit-box", WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical", overflow: "hidden", lineHeight: 1.3,
          }}>
            {video.title}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#aaa" }}>
            <span>{video.channel}</span>
            {video.verified && <CheckCircle2 size={12} style={{ flexShrink: 0 }} />}
          </div>
          <p style={{ fontSize: "12px", color: "#aaa" }}>
            {video.views} · {video.uploaded}
          </p>
        </div>
      </div>
    </div>
  );
}
