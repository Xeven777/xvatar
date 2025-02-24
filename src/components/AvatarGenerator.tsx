"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../page.module.css";

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
    <div className={styles.generator}>
      <div className={styles.generatorControls}>
        <div className={styles.controlsGroup}>
          <label>
            Username / Seed:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter a username"
              className={styles.input}
            />
          </label>

          <div className={styles.formatToggle}>
            <label>
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
                className={styles.input}
              />
            </label>
          )}
        </div>

        <div className={styles.controlsGroup}>
          <label>
            Roundness: {rounded}
            <input
              type="range"
              min="0"
              max="120"
              value={rounded}
              onChange={(e) => setRounded(parseInt(e.target.value))}
              className={styles.slider}
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
              className={styles.slider}
            />
          </label>
        </div>
      </div>

      <div className={styles.generatorPreview}>
        {username ? (
          <>
            <div className={styles.avatarPreview}>
              <Image
                src={avatarUrl}
                alt={`Avatar for ${username}`}
                width={240}
                height={240}
                className={styles.previewImage}
                style={{
                  borderRadius: `${Math.min(rounded, 120)}px`,
                  maxWidth: "240px",
                  maxHeight: "240px",
                }}
              />
            </div>
            <div className={styles.previewUrl}>
              <code>{avatarUrl}</code>
            </div>
            <button onClick={downloadAvatar} className={styles.downloadButton}>
              Download
            </button>
          </>
        ) : (
          <div className={styles.placeholderPreview}>
            Enter a username to generate an avatar
          </div>
        )}
      </div>
    </div>
  );
}
