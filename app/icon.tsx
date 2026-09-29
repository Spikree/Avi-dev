import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#E5622A",
          border: "4px solid #2A1A11",
          color: "#2A1A11",
          borderRadius: 32,
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        AM
      </div>
    ),
    size
  );
}
