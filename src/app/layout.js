import { Geist } from "next/font/google";
import "./globals.css";

import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Footer from "./components/footer";
import ChatWidget from "./components/chat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Thiruvadisoolam",
  description: "The Land of Devi & Divinity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="relative overflow-x-hidden">
        <Sidebar />
        <div className="flex flex-col min-h-screen z-0 relative">
          {/* <Header /> */}
          <main className="flex-1 p-4">{children}</main>
          <ChatWidget />
          <Footer />
        </div>
      </body>
    </html>
  );
}
