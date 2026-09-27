import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const dynamic = "force-static";
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#ffffff",
          color: "#171717",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 16,
            background: "#171717",
            color: "#fafafa",
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          AM
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#6b6b6b" }}>
            {`${profile.role} · ${profile.location}`}
          </div>
          <div style={{ fontSize: 84, fontWeight: 600, letterSpacing: -3, marginTop: 12 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 30, color: "#6b6b6b", marginTop: 28 }}>
            Java · Spring Boot · TypeScript · React · Node.js · PostgreSQL
          </div>
        </div>
      </div>
    ),
    size
  );
}
