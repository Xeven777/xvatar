import Image from "next/image";
import AvatarGenerator from "@/components/AvatarGenerator";
import AvatarGallery from "@/components/AvatarGallery";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="px-8 max-w-7xl mx-auto">
      <div className="absolute -top-40 left-0 rounded-full bg-primary/30 -z-10 h-36 w-full blur-3xl"></div>

      <main className="min-h-screen py-8 flex-1 flex flex-col justify-start items-center gap-12">
        <h1 className="tracking-tighter leading-none text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-primary text-center mt-14">
          Gradient Avatar Generator
        </h1>

        <AvatarGenerator />

        <div className="w-full max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2 mb-4 w-fit bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text py-4">
            Featured Examples
          </h2>
          <AvatarGallery />
        </div>

        <div className="w-full max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2 mb-4 bg-gradient-to-r from-blue-500 w-fit to-teal-500 text-transparent bg-clip-text py-4">
            Usage Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Card className="cursor-pointer hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle>Basic Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Get started with a simple username:</p>
                <code className="block bg-muted px-3 py-2 rounded-lg text-sm overflow-x-auto my-4">
                  {process.env.NEXT_PUBLIC_DOMAIN}/api/avatar/xeven777
                </code>
                <div className="flex justify-center mt-4">
                  <Image
                    src="/api/avatar/xeven777"
                    alt="Basic avatar"
                    loading="lazy"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle>With Initials</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Add text to your avatar:</p>
                <code className="block bg-muted px-3 py-2 rounded-lg text-sm overflow-x-auto my-4">
                  {process.env.NEXT_PUBLIC_DOMAIN}
                  /api/avatar/username.svg?text=GR
                </code>
                <div className="flex justify-center mt-4">
                  <Image
                    src="/api/avatar/rauchg.svg?text=GR"
                    alt="Avatar with initials"
                    loading="lazy"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle>Custom Shape</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Change the roundness:</p>
                <code className="block bg-muted px-3 py-2 rounded-lg text-sm overflow-x-auto my-4">
                  {process.env.NEXT_PUBLIC_DOMAIN}
                  /api/avatar/newusername?rounded=20
                </code>
                <div className="flex justify-center mt-4">
                  <Image
                    src="/api/avatar/vercel?rounded=20"
                    loading="lazy"
                    alt="Square avatar"
                    width={64}
                    height={64}
                    className="rounded-[20%]"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle>Custom Size</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Change the dimensions:</p>
                <code className="block bg-muted px-3 py-2 rounded-lg text-sm overflow-x-auto my-4">
                  {process.env.NEXT_PUBLIC_DOMAIN}/api/avatar/username?size=200
                </code>
                <div className="flex justify-center mt-4">
                  <Image
                    src="/api/avatar/large?size=64"
                    alt="Larger avatar"
                    loading="lazy"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle>User Logo</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Add a user icon:</p>
                <code className="block bg-muted px-3 py-2 rounded-lg text-sm overflow-x-auto my-4">
                  {process.env.NEXT_PUBLIC_DOMAIN}
                  /api/avatar/diddy?userLogo=true
                </code>
                <div className="flex justify-center mt-4">
                  <Image
                    src="/api/avatar/diddy?userLogo=true"
                    loading="lazy"
                    alt="Avatar with user logo"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle>User Logo</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Add a user icon:</p>
                <code className="block bg-muted px-3 py-2 rounded-lg text-sm overflow-x-auto my-4">
                  {process.env.NEXT_PUBLIC_DOMAIN}
                  /api/avatar/coolest.svg?userLogo=true
                </code>
                <div className="flex justify-center mt-4">
                  <Image
                    src="/api/avatar/coolest.svg?userLogo=true"
                    loading="lazy"
                    alt="Avatar with user logo"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="w-full max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2 mb-4 w-fit bg-gradient-to-r from-green-400 via-lime-500 to-yellow-400 text-transparent bg-clip-text py-4">
            Using the Sdk
          </h2>
          <div className="grid grid-cols-1 gap-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <code className="block bg-muted px-3 py-2 rounded-lg text-sm overflow-x-auto">
                  npm install xvatar-sdk
                </code>
                <code className="block bg-muted px-3 py-2 rounded-lg text-sm overflow-x-auto mt-2">
                  yarn add xvatar-sdk
                </code>
                <code className="block bg-muted px-3 py-2 rounded-lg text-sm overflow-x-auto mt-2">
                  pnpm add xvatar-sdk
                </code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Basic Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <pre className="flex-1 w-full">
                    <code className="block bg-muted px-3 py-2 rounded-lg text-sm overflow-x-auto">
                      {`import { generateAvatar } from "xvatar-sdk";

// Generate a simple avatar
const avatarUrl = generateAvatar({ 
  username: "johndoe" 
  });`}
                    </code>
                  </pre>
                  <Image
                    src="/api/avatar/johndoe"
                    alt="Basic avatar example"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Advanced Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <pre className="flex-1 w-full">
                    <code className="block bg-muted px-3 py-2 rounded-lg text-sm overflow-x-auto">
                      {`// All available options

const customAvatar = generateAvatar({
  username: "scarlett",    // Required: Seed for the avatar
  size: 300,             // Optional: Size in pixels (default: 140)
  format: "svg",         // Optional: 'png' or 'svg' (default: 'png')
  rounded: 80,           // Optional: Corner roundness (default: 70)
  userLogo: true,        // Optional: Add user icon (default: false)
  text: "JD"            // Optional: Add text/initials (SVG only)
  });`}
                    </code>
                  </pre>
                  <Image
                    src="/api/avatar/scarlett.svg?rounded=80&userLogo=true"
                    alt="Advanced avatar example"
                    width={100}
                    height={100}
                    className="rounded-[20%]"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Examples</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <p className="mb-2">Professional Avatar:</p>
                  <div className="flex flex-wrap gap-4 items-center">
                    <pre className="flex-1 w-full">
                      <code className="block bg-muted px-3 py-2 rounded-lg text-sm overflow-x-auto">
                        {`generateAvatar({
  username: "ceo@company.com",
  size: 500,
  rounded: 100,
  text: "CEO"
  })`}
                      </code>
                    </pre>
                    <Image
                      src="/api/avatar/ceo@company.com?size=100&text=CEO"
                      alt="Professional avatar example"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="mb-2">Social Media Profile:</p>
                  <div className="flex flex-wrap gap-4 items-center">
                    <pre className="flex-1 w-full">
                      <code className="block bg-muted px-3 py-2 rounded-lg text-sm overflow-x-auto">
                        {`generateAvatar({
  username: "cool_user_123",
  size: 200,
  format: "svg",
  userLogo: true      // Add user icon
  })`}
                      </code>
                    </pre>
                    <Image
                      src="/api/avatar/cool_user_123?userLogo=true"
                      alt="Social media avatar example"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="flex flex-wrap flex-1 font-semibold tracking-tight py-8 border-t text-muted-foreground w-full items-center justify-center gap-6 mt-10">
        <p>
          Gradient Avatars - Built by{" "}
          <a
            href="https://git.new/anish"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Anish
          </a>
        </p>
        |{" "}
        <a
          href="https://github.com/Xeven777/xvatar"
          className="hover:text-primary hover:underline"
        >
          Github
        </a>
        |{" "}
        <a
          href="https://www.npmjs.com/package/xvatar-sdk"
          className="hover:text-primary hover:underline"
        >
          NPM
        </a>
      </footer>
    </div>
  );
}
