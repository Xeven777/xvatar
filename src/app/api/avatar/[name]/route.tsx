import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { generateGradient } from "@/lib/gradient";

export const runtime = "edge";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text");
  const size = Number(searchParams.get("size") || "140");
  const rounded = Number(searchParams.get("rounded") || "70");

  const [username, type] = (await params).name.split(".");
  const fileType = type?.includes("svg") ? "svg" : "png";

  const gradient = await generateGradient(username || `${Math.random()}`);

  const avatar = (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={gradient.fromColor} />
          <stop offset="100%" stopColor={gradient.toColor} />
        </linearGradient>
      </defs>
      <rect
        fill="url(#gradient)"
        x="0"
        y="0"
        width={size}
        height={size}
        rx={rounded}
        ry={rounded}
      />
    </svg>
  );

  if (fileType === "svg") {
    const textElement =
      fileType === "svg" && !!text
        ? `<text
          x="50%"
          y="49%"
          alignment-baseline="central"
          dominant-baseline="central"
          text-anchor="middle"
          fill="#fff"
          font-family="system-ui, sans-serif"
          font-size="${Math.min(size * 0.4, (size * 0.8) / text.length)}"
          font-weight="bold"
        >${text}</text>`
        : "";

    const svgString = `<?xml version="1.0" encoding="UTF-8"?>
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${gradient.fromColor}" />
            <stop offset="100%" stop-color="${gradient.toColor}" />
          </linearGradient>
        </defs>
        <rect
          fill="url(#gradient)"
          x="0"
          y="0"
          width="${size}"
          height="${size}"
          rx="${rounded}"
          ry="${rounded}"
        />
        ${textElement}
      </svg>`;

    return new Response(svgString, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=604800, immutable",
      },
    });
  }

  return new ImageResponse(avatar, {
    width: size,
    height: size,
  });
}
