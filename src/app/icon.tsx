import { ImageResponse } from "next/og";

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
          background: "linear-gradient(135deg, #1e3a8a, #38bdf8)",
          color: "#fdfbf9",
          fontSize: 44,
          fontWeight: 700,
          letterSpacing: -2,
          borderRadius: 14,
        }}
      >
        A
      </div>
    ),
    size,
  );
}
