import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { generateGradient } from "@/lib/gradient";

export const runtime = "edge";

export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text");
  const size = Number(searchParams.get("size") || "120");
  const rounded = Number(searchParams.get("rounded") || "60");
  const animation = searchParams.get("animate") === "true";

  const [username, type] = params.name.split(".");
  const fileType = type?.includes("svg") ? "svg" : "png";

  const gradient = await generateGradient(username || `${Math.random()}`);

  // Animation attributes for SVG (only applied if animation is requested)
  const animationAttrs =
    animation && fileType === "svg"
      ? {
          children: (
            <>
              <animate
                attributeName="x"
                values="0;0"
                dur="3s"
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                from="0 0.5 0.5"
                to="360 0.5 0.5"
                dur="8s"
                repeatCount="indefinite"
              />
            </>
          ),
        }
      : {};

  const avatar = (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
          {...animationAttrs}
        >
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
      {fileType === "svg" && !!text ? (
        <text
          x="50%"
          y="50%"
          alignmentBaseline="central"
          dominantBaseline="central"
          textAnchor="middle"
          fill="#fff"
          fontFamily="system-ui, sans-serif"
          fontSize={Math.min(size * 0.5, (size * 0.9) / text.length)}
          fontWeight="bold"
        >
          {text}
        </text>
      ) : null}
    </svg>
  );

  if (fileType === "svg") {
    return new Response(avatar.toString(), {
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
