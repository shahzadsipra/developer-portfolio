'use client'
import localFont from "next/font/local";

export const geistSans = localFont({
    src: "./GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
  });
  export const geistMono = localFont({
    src: "./GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
  });

   const gilroy = localFont({
    src: "./Gilroy-ExtraBold.otf",
    variable: "--font-gilroy",
    weight: "100 900",
  });
 const hanson = localFont({
    src: "./hanson-bold.ttf",
    variable: "--font-hanson",
    weight: "100 900",
  });

  export const fontGilroy =gilroy.variable;
  export const fontHanson =hanson.variable;
