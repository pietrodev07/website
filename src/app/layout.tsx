import "./globals.css";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { Providers } from "@/components/providers";
import { Bricolage_Grotesque } from "next/font/google";
import { ThemeToggle } from "@/components/theme-toggle";

const bricolageFont = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My personal website by pietrodev07",
  description: "My personal website by pietrodev07",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(bricolageFont.className, "antialiased")}>
        <Providers>
          {children}
          <ThemeToggle />
        </Providers>
      </body>
    </html>
  );
}
