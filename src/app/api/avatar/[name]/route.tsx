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
  const userLogo = searchParams.get("userLogo") === "true";
  const [username, type] = (await params).name.split(".");
  const fileType = type?.includes("svg") ? "svg" : "png";
  const gradient = await generateGradient(username || `${Math.random()}`);
  const { fromColor, toColor, rotation, isRadial } = gradient;
  const gradientTransform = `rotate(${rotation})`;

  if (fileType === "svg") {
    const logoElement = userLogo
      ? `
        <g transform="translate(${size / 2 - size * 0.35}, ${
          size / 2 - size * 0.35
        })">
          <circle cx="${size * 0.35}" cy="${size * 0.23}" r="${
          size * 0.14
        }" fill="white"/>
          <path d="M${size * 0.56} ${size * 0.6} a${size * 0.23} ${
          size * 0.23
        } 0 0 0-${size * 0.46} 0" fill="white"/>
        </g>
      `
      : "";

    const textElement =
      text && !userLogo
        ? `<text x="50%" y="53%" dominant-baseline="middle" text-anchor="middle"  font-size="${Math.min(
            size * 0.4,
            (size * 0.8) / text.length
          )}" fill="#fff" font-family="Arial, sans-serif" font-weight="bold">${text}</text>`
        : "";

    const svgString = `
      <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="${fromColor}" />
            <stop offset="100%" stop-color="${toColor}" />
          </radialGradient>
          <linearGradient id="gradLinear" gradientTransform="${gradientTransform}">
            <stop offset="0%" stop-color="${fromColor}" />
            <stop offset="100%" stop-color="${toColor}" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" rx="${rounded}" ry="${rounded}" fill="url(#${
      isRadial ? "grad" : "gradLinear"
    })" />
        ${userLogo ? logoElement : textElement}
      </svg>
    `;

    return new Response(svgString, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=604800, immutable",
      },
    });
  }

  const avatar = (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${rounded}%`,
        background: isRadial
          ? `radial-gradient(circle, ${fromColor}, ${toColor})`
          : `linear-gradient(${rotation}deg, ${fromColor}, ${toColor})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {userLogo ? (
        <svg
          width={size * 0.8}
          height={size * 0.8}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          stroke="white"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="5" />
          <path d="M20 21a8 8 0 0 0-16 0" />
        </svg>
      ) : text ? (
        <span
          style={{
            color: "#fff",
            fontSize: `${size / 4}px`,
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {text}
        </span>
      ) : null}
    </div>
  );

  return new ImageResponse(avatar, {
    width: size,
    height: size,
  });
}
