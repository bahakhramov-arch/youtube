import { categories } from "../data/videos";

export default function CategoryFilter({ active, onChange }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", overflowX: "auto", paddingBottom: "4px" }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          style={{
            flexShrink: 0,
            padding: "6px 12px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
            backgroundColor: active === cat ? "#fff" : "#272727",
            color: active === cat ? "#000" : "#fff",
            border: "none",
            transition: "background-color 0.2s",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
