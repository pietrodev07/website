import "./globals.css";
import { PropsWithChildren } from "react";
import { metadataLib } from "@/lib/metadata";
import { MuseoModerno } from "next/font/google";

const font = MuseoModerno({ subsets: ["latin"] });

export const metadata = metadataLib;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>{children}</body>
    </html>
  );
}
