import localFont from "next/font/local";
import "./globals.css";
import Provider from "@/components/Provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "GUL | Home Page",
  description: "Website untuk Program Agrotourism Leuwimalang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/logo-2.jpg" type="image/png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
