import "./globals.scss";
import { Bungee_Shade } from "next/font/google";





const bungee = Bungee_Shade({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bungee.className}>{children}</body>
    </html>
  );
}