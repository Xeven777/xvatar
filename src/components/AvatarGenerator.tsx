"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Copy, Download } from "lucide-react";

export default function AvatarGenerator() {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const [rounded, setRounded] = useState(120);
  const [size, setSize] = useState(240);
  const [isSvg, setIsSvg] = useState(false);
  const [userLogo, setUserLogo] = useState(false);

  const avatarUrl = `/api/avatar/${username}${
    isSvg ? ".svg" : ""
  }?rounded=${rounded}&size=${size}${text && isSvg ? `&text=${text}` : ""}${
    userLogo ? "&userLogo=true" : ""
  }`;

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
    <Card className="w-full max-w-4xl mb-8 shadow-lg">
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 md:p-8">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-4 w-full">
              <div className="space-y-2">
                <Label htmlFor="username">Username / Seed</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter a username"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="svg"
                  checked={isSvg}
                  onCheckedChange={(checked) => setIsSvg(checked as boolean)}
                />
                <Label htmlFor="svg">SVG Format</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="userLogo"
                  checked={userLogo}
                  onCheckedChange={(checked) => setUserLogo(checked as boolean)}
                />
                <Label htmlFor="userLogo">Add User Logo</Label>
              </div>
            </div>

            {isSvg && !userLogo && (
              <div className="space-y-2 w-full">
                <Label htmlFor="text">Text / Initials</Label>
                <Input
                  id="text"
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Add initials (SVG only)"
                  maxLength={4}
                />
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6 flex-1">
            <div className="space-y-2">
              <Label>Roundness: {rounded}</Label>
              <Slider
                min={0}
                max={120}
                step={1}
                value={[rounded]}
                onValueChange={(value) => setRounded(value[0])}
              />
            </div>

            <div className="space-y-2">
              <Label>Size: {size}px</Label>
              <Slider
                min={20}
                max={240}
                step={1}
                value={[size]}
                onValueChange={(value) => setSize(value[0])}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          {username ? (
            <>
              <div className="size-60 rounded-full flex justify-center items-center relative">
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
                <Button
                  className="absolute right-0 bottom-0"
                  onClick={downloadAvatar}
                  variant={"ghost"}
                  size={"icon"}
                >
                  <Download size={18} />
                </Button>
              </div>
              <Card className="w-full relative break-words">
                <CardContent className="px-4">
                  <code className="text-sm overflow-x-auto">
                    {process.env.NEXT_PUBLIC_DOMAIN}
                    {avatarUrl}
                  </code>
                </CardContent>
                <Button
                  className="absolute right-0 bottom-0"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${process.env.NEXT_PUBLIC_DOMAIN}${avatarUrl}`
                    );
                    alert("Copied to clipboard!");
                  }}
                  variant={"ghost"}
                  size={"icon"}
                >
                  <Copy size={18} />
                </Button>
              </Card>
            </>
          ) : (
            <Card className="size-60 bg-primary/5 flex justify-center items-center text-muted-foreground p-4 text-center">
              Enter a username to generate an avatar
            </Card>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
