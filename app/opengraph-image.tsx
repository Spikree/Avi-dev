import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const dynamic = "force-static";
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const paper = "#F4EAD5";
const ink = "#2A1A11";
const stripes = ["#EFAA31", "#E5622A", "#A93A14", "#6B4226"];

// Mirrors the site's hero: striped sun, big name, racing stripes. (Satori only
// draws one text-shadow and has no bold weight, so no stacked shadow here.)
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: paper,
          color: ink,
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 70,
            top: 60,
            width: 400,
            height: 400,
            display: "flex",
            borderRadius: 200,
            backgroundImage: "linear-gradient(180deg, #EFAA31, #E5622A 55%, #A93A14)",
          }}
        />
        {/* Paper-coloured bars cut the lower half of the sun */}
        {[
          [275, 6],
          [305, 10],
          [338, 14],
          [373, 18],
          [410, 24],
        ].map(([top, height]) => (
          <div
            key={top}
            style={{
              position: "absolute",
              right: 70,
              top,
              width: 400,
              height,
              background: paper,
            }}
          />
        ))}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "90px 80px",
            position: "relative",
          }}
        >
          <div style={{ fontSize: 24, letterSpacing: 6, color: "#A93A14" }}>
            SOFTWARE ENGINEER · GLASGOW, UK
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 24,
              fontSize: 104,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: -3,
            }}
          >
            <div>Avishkar</div>
            <div>Mahalingpure.</div>
          </div>
          <div style={{ marginTop: 40, fontSize: 32, color: "#5B4334" }}>
            Full stack · Java · TypeScript · React
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {stripes.map((color) => (
            <div key={color} style={{ height: 14, background: color }} />
          ))}
        </div>
      </div>
    ),
    size,
  );
}
