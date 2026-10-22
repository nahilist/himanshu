import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.personName}, ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f7f7f5", color: "#171717", padding: "72px 84px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28 }}><strong>{SITE.name}</strong><span>Portfolio · 2026</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}><div style={{ fontSize: 78, fontWeight: 800, letterSpacing: "-4px" }}>{SITE.personName}</div><div style={{ fontSize: 42, color: "#525252" }}>{SITE.role}</div></div>
      <div style={{ display: "flex", fontSize: 24, color: "#737373" }}>AI/ML systems · Frontend experiences · Selected case studies</div>
    </div>,
    size,
  );
}

