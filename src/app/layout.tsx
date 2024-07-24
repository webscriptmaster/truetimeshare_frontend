import { Hanken_Grotesk, Plus_Jakarta_Sans } from "next/font/google";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import StoreProvider from "@/contexts/StoreProvider";

const hankenGrotesk = Hanken_Grotesk({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  fallback: ["Helvetica", "Arial", "sans-serif"],
  subsets: ["latin"],
  variable: "--font-hanken-grotesk"
});

const robotoMono = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  fallback: ["Helvetica", "Arial", "sans-serif"],
  subsets: ["latin"],
  variable: "--font-roboto-mono"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hankenGrotesk.variable} ${robotoMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>

      <body className={robotoMono.className} style={{ minWidth: 400 }}>
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ToastContainer />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
