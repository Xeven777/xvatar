import React from "react";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const popularSeeds = [
  { name: "rauchg", text: "RG" },
  { name: "leerob" },
  { name: "vercel", text: "VC" },
  { name: "next" },
  { name: "react", text: "RE" },
  { name: "typescript", text: "TS" },
  { name: "edge", text: "EG" },
  { name: "satori", text: "ST" },
];

export default function AvatarGallery() {
  return (
    <Card>
      <CardContent className="grid grid-cols-4 gap-6 p-4">
        {popularSeeds.map((seed) => (
          <div key={seed.name} className="flex flex-col items-center gap-2">
            {seed.text ? (
              <img
                src={`/api/avatar/${seed.name}.svg?text=${seed.text}`}
                alt={`Avatar for ${seed.name}`}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50px",
                }}
              />
            ) : (
              <Image
                src={`/api/avatar/${seed.name}`}
                alt={`Avatar for ${seed.name}`}
                width={100}
                height={100}
                className="rounded-full transition-transform hover:scale-110"
              />
            )}
            <span className="text-sm text-muted-foreground">{seed.name}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
