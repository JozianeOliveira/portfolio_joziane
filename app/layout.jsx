import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
  display: "swap",
});

export const metadata = {
  title: "Portfolio Joziane Oliveira",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={jetbrainsMono.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
