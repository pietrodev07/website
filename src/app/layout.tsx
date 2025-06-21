import "./globals.css";
import { PropsWithChildren } from "react";
import { Nunito } from "next/font/google";
import { metadataLib } from "@/lib/metadata";
import { AnalyticsTracker } from "@/components/tracker";

const font = Nunito({ subsets: ["latin"] });

export const metadata = metadataLib;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        {children}
        <AnalyticsTracker />
      </body>
    </html>
  );
}
