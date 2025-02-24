"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function AvatarGenerator() {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const [rounded, setRounded] = useState(60);
  const [size, setSize] = useState(120);
  const [isSvg, setIsSvg] = useState(false);

  const avatarUrl = `/api/avatar/${username}${
    isSvg ? ".svg" : ""
  }?rounded=${rounded}&size=${size}${text && isSvg ? `&text=${text}` : ""}`;

  const downloadAvatar = () => {
    if (!username) return;

    const link = document.createElement("a");
    link.href = avatarUrl;
    link.download = `${username}-avatar.${isSvg ? "svg" : "png"}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="flex flex-col gap-8 w-full max-w-3xl rounded-xl shadow-lg p-8">
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col gap-4 flex-1 min-w-[250px]">
            <label>
              Username / Seed:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter a username"
                className="w-full px-3 py-2 mt-2 border  rounded-lg text-base"
              />
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isSvg}
                onChange={(e) => setIsSvg(e.target.checked)}
              />
              SVG Format
            </label>
          </div>

          {isSvg && (
            <label>
              Text / Initials:
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add initials (SVG only)"
                maxLength={4}
                className="w-full px-3 py-2 mt-2 border  rounded-lg text-base"
              />
            </label>
          )}
        </div>

        <div className="flex flex-col gap-4 flex-1 min-w-[250px]">
          <label>
            Roundness: {rounded}
            <input
              type="range"
              min="0"
              max="120"
              value={rounded}
              onChange={(e) => setRounded(parseInt(e.target.value))}
              className="w-full mt-2"
            />
          </label>

          <label>
            Size: {size}px
            <input
              type="range"
              min="20"
              max="240"
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value))}
              className="w-full mt-2"
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        {username ? (
          <>
            <div className="w-60 h-60 flex justify-center items-center bg-card rounded-xl">
              {isSvg ? (
                <img
                  src={avatarUrl}
                  alt={`Avatar for ${username}`}
                  style={{
                    width: `${Math.min(size, 240)}px`,
                    height: `${Math.min(size, 240)}px`,
                    borderRadius: `${Math.min(rounded, 120)}px`,
                    maxWidth: "240px",
                    maxHeight: "240px",
                  }}
                />
              ) : (
                <Image
                  src={avatarUrl}
                  alt={`Avatar for ${username}`}
                  width={240}
                  height={240}
                  className="object-contain"
                  style={{
                    borderRadius: `${Math.min(rounded, 120)}px`,
                    maxWidth: "240px",
                    maxHeight: "240px",
                  }}
                />
              )}
            </div>
            <div className="bg-card px-3 py-2 rounded-lg text-sm w-full overflow-x-auto whitespace-nowrap">
              <code>{avatarUrl}</code>
            </div>
            <Button onClick={downloadAvatar}>Download</Button>
          </>
        ) : (
          <div className="w-60 h-60 flex justify-center items-center bg-card rounded-xl text-muted-foreground p-4 text-center">
            Enter a username to generate an avatar
          </div>
        )}
      </div>
    </div>
  );
}
