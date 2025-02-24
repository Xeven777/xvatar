import Image from "next/image";
import AvatarGenerator from "@/components/AvatarGenerator";
import AvatarGallery from "@/components/AvatarGallery";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="px-8 max-w-7xl mx-auto">
      <main className="min-h-screen py-8 flex-1 flex flex-col justify-start items-center gap-12">
        <h1 className="leading-tight tracking-tighter text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary text-center">
          Gradient Avatar Generator
        </h1>

        <AvatarGenerator />

        <div className="w-full max-w-3xl">
          <h2>Featured Avatars</h2>
          <AvatarGallery />
        </div>

        <div className="w-full max-w-3xl">
          <h2>Usage Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Basic Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Get started with a simple username:</p>
                <code className="block bg-muted px-3 py-2 rounded-lg text-sm overflow-x-auto my-4">
                  https://yourdomain.com/api/avatar/username
                </code>
                <div className="flex justify-center mt-4">
                  <Image
                    src="/api/avatar/rauchg"
                    alt="Basic avatar"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>With Initials</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Add text to your avatar:</p>
                <code className="block bg-muted px-3 py-2 rounded-lg text-sm overflow-x-auto my-4">
                  https://yourdomain.com/api/avatar/username.svg?text=GR
                </code>
                <div className="flex justify-center mt-4">
                  <Image
                    src="/api/avatar/rauchg.svg?text=GR"
                    alt="Avatar with initials"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Shape</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Change the roundness:</p>
                <code className="block bg-muted px-3 py-2 rounded-lg text-sm overflow-x-auto my-4">
                  https://yourdomain.com/api/avatar/username?rounded=20
                </code>
                <div className="flex justify-center mt-4">
                  <Image
                    src="/api/avatar/vercel?rounded=20"
                    alt="Square avatar"
                    width={64}
                    height={64}
                    className="rounded-[20%]"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Size</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Change the dimensions:</p>
                <code className="block bg-muted px-3 py-2 rounded-lg text-sm overflow-x-auto my-4">
                  https://yourdomain.com/api/avatar/username?size=200
                </code>
                <div className="flex justify-center mt-4">
                  <Image
                    src="/api/avatar/next?size=64"
                    alt="Larger avatar"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="flex flex-1 py-8 border-t  justify-center items-center w-full">
        <p>
          Gradient Avatars - Built by{" "}
          <a
            href="https://anish7.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Anish
          </a>
        </p>
      </footer>
    </div>
  );
}
