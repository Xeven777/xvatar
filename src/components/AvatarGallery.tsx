import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

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
    <div className={styles.gallery}>
      {popularSeeds.map((seed) => (
        <div key={seed.name} className={styles.galleryItem}>
          <Image
            src={`/api/avatar/${seed.name}.svg?text=${seed.text}`}
            alt={`Avatar for ${seed.name}`}
            width={80}
            height={80}
            className={styles.galleryAvatar}
          />
          <span className={styles.galleryName}>{seed.name}</span>
        </div>
      ))}
    </div>
  );
}
