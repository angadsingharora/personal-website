import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Same Newsreader as the wordmark, fetched at build time (this route is static).
async function newsreader() {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Newsreader:wght@500&text=A",
    { headers: { "User-Agent": "Mozilla/5.0" } },
  ).then((r) => r.text());
  const url = css.match(/src: url\((.+?)\)/)![1];
  return fetch(url).then((r) => r.arrayBuffer());
}

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c3f6e",
          color: "#f7f5f1",
          fontFamily: "Newsreader",
          fontSize: 46,
          paddingBottom: 4,
        }}
      >
        A
      </div>
    ),
    { ...size, fonts: [{ name: "Newsreader", data: await newsreader(), style: "normal" }] },
  );
}
