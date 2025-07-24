import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Space_Grotesk } from "next/font/google";
import "./globals.css";
// Import context
import ThemeProvider from "@/context/ThemeProvider";
// Import React
import React from "react";


const inter = Geist({
  variable: "--font-geist-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-geist-mono",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "social-media-app",
  description: "Social Media App with Next.js and Clerk Authentication",
  icons: {
    icon: "/assets/icons/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: `primary-text-gradient hover:text-primary-500`,
        },
      }}
    >
      <html lang="en">
        <body
          className={`${inter.variable} ${grotesk.variable} antialiased`}
          suppressHydrationWarning
        >
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
