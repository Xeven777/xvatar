import React from "react";
import Image from "next/image";

const popularSeeds = [
  { name: "rauchg", text: "GR" },
  { name: "leerob", text: "LR" },
  { name: "vercel", text: "VC" },
  { name: "next", text: "NJ" },
  { name: "react", text: "RE" },
  { name: "typescript", text: "TS" },
  { name: "edge", text: "ED" },
  { name: "satori", text: "ST" },
];

export default function AvatarGallery() {
  return (
    <div className="grid grid-cols-auto-fill-80 gap-6 w-full p-4 rounded-xl shadow-lg">
      {popularSeeds.map((seed) => (
        <div key={seed.name} className="flex flex-col items-center gap-2">
          <Image
            src={`/api/avatar/${seed.name}.svg?text=${seed.text}`}
            alt={`Avatar for ${seed.name}`}
            width={80}
            height={80}
            className="rounded-full transition-transform hover:scale-110"
          />
          <span className="text-sm text-gray-500">{seed.name}</span>
        </div>
      ))}
    </div>
  );
}
