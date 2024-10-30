import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";



 

const gilroy = localFont({
  src: "./fonts/Gilroy-ExtraBold.otf",
  variable: "--font-gilroy",
  weight: "100 900",
});
const hanson = localFont({
  src: "./fonts/hanson-bold.ttf",
  variable: "--font-hanson",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilroy.variable} ${hanson.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-5PRM970FQB" />
    </html>
  );
}
