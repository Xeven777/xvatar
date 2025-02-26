import React from "react";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const popularSeeds = [
  { name: "Anish", text: "AN" },
  { name: "vercel", text: "VC" },
  { name: "next", userLogo: true },
  { name: "react", text: "RE" },
  { name: "typescript", userLogo: true },
  { name: "edge", text: "EG" },
  { name: "satori", text: "ST" },
  { name: "username", userLogo: true },
  { name: "random1", text: "R1" },
  { name: "random2", userLogo: true },
  { name: "random3" },
  { name: "github", text: "GH" },
];

export default function AvatarGallery() {
  return (
    <Card>
      <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {popularSeeds.map((seed) => (
          <div key={seed.name} className="flex flex-col items-center gap-2">
            {seed.text ? (
              <img
                src={`/api/avatar/${seed.name}.svg?text=${seed.text}`}
                alt={`Avatar for ${seed.name}`}
                style={{
                  width: "100px",
                  height: "100px",
                }}
                className="rounded-full transition-transform hover:scale-105 ease-in-out"
              />
            ) : seed.userLogo ? (
              <Image
                src={`/api/avatar/${seed.name}.svg?userLogo=true`}
                alt={`Avatar for ${seed.name}`}
                width={100}
                height={100}
                className="rounded-full transition-transform hover:scale-105 ease-in-out"
              />
            ) : (
              <Image
                src={`/api/avatar/${seed.name}`}
                alt={`Avatar for ${seed.name}`}
                width={100}
                height={100}
                className="rounded-full transition-transform hover:scale-105 ease-in-out"
              />
            )}
            <span className="text-sm text-muted-foreground">{seed.name}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
