import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import ToasterProvider from "./providers/ToasterProvider";

import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import SearchModal from "./components/modals/SearchModal";
import RentModal from "./components/modals/RentModal";

import getCurrentUser from "./actions/getCurrentUser";

import ClientOnly from "./components/common/ClientOnly";
import Navbar from "./components/navbar/Navbar";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone developed by Blake Zajac",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />

          <LoginModal />
          <RegisterModal />
          <RentModal />
          <SearchModal />

          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pt-28 pb-20">{children}</div>
      </body>
    </html>
  );
}
