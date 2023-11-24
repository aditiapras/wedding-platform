import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./sessionProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lettre",
  description: "Personalized your wedding invitation",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
