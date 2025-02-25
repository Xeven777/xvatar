import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeTogglebutton from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Container, Github } from "lucide-react";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gradient Avatar Generator",
  description: "Generate beautiful gradient avatars for your applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class">
          <ThemeTogglebutton className="absolute top-2 right-6" />
          <Button
            className="absolute top-2 right-20"
            variant={"ghost"}
            asChild
            size={"icon"}
          >
            <a
              title="View on Github"
              href="https://github.com/Xeven777/xvatar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </Button>
          <Button
            className="absolute top-2 right-32"
            variant={"ghost"}
            asChild
            size={"icon"}
          >
            <a
              title="View on NPM"
              href="https://www.npmjs.com/package/xvatar-sdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Container />
            </a>
          </Button>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
