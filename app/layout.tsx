import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JLPT Practice Test | N5–N1 Japanese Proficiency",
  description:
    "Test your Japanese language proficiency with JLPT-style questions covering vocabulary, grammar, reading, and listening for levels N5 through N1.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white min-h-screen antialiased">{children}</body>
    </html>
  );
}
