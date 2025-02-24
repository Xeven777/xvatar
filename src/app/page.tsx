import Image from "next/image";
import styles from "./page.module.css";
import AvatarGenerator from "@/components/AvatarGenerator";
import AvatarGallery from "@/components/AvatarGallery";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Gradient Avatar Generator</h1>

        <AvatarGenerator />

        <div className={styles.gallerySection}>
          <h2>Featured Avatars</h2>
          <AvatarGallery />
        </div>

        <div className={styles.usageSection}>
          <h2>Usage Guide</h2>
          <div className={styles.usageGrid}>
            <div className={styles.usageCard}>
              <h3>Basic Usage</h3>
              <p>Get started with a simple username:</p>
              <code>https://yourdomain.com/api/avatar/username</code>
              <div className={styles.exampleAvatar}>
                <Image
                  src="/api/avatar/rauchg"
                  alt="Basic avatar"
                  width={64}
                  height={64}
                  className={styles.avatar}
                />
              </div>
            </div>

            <div className={styles.usageCard}>
              <h3>With Initials</h3>
              <p>Add text to your avatar:</p>
              <code>
                https://yourdomain.com/api/avatar/username.svg?text=GR
              </code>
              <div className={styles.exampleAvatar}>
                <Image
                  src="/api/avatar/rauchg.svg?text=GR"
                  alt="Avatar with initials"
                  width={64}
                  height={64}
                  className={styles.avatar}
                />
              </div>
            </div>

            <div className={styles.usageCard}>
              <h3>Custom Shape</h3>
              <p>Change the roundness:</p>
              <code>https://yourdomain.com/api/avatar/username?rounded=20</code>
              <div className={styles.exampleAvatar}>
                <Image
                  src="/api/avatar/vercel?rounded=20"
                  alt="Square avatar"
                  width={64}
                  height={64}
                  className={styles.avatarSquare}
                />
              </div>
            </div>

            <div className={styles.usageCard}>
              <h3>Custom Size</h3>
              <p>Change the dimensions:</p>
              <code>https://yourdomain.com/api/avatar/username?size=200</code>
              <div className={styles.exampleAvatar}>
                <Image
                  src="/api/avatar/next?size=64"
                  alt="Larger avatar"
                  width={64}
                  height={64}
                  className={styles.avatar}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Gradient Avatars - Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js App Router
          </a>
        </p>
      </footer>
    </div>
  );
}
