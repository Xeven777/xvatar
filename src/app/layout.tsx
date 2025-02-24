import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeTogglebutton from "@/components/ui/ThemeToggle";

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
