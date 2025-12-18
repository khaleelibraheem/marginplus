import localFont from "next/font/local";
import "./globals.css";
import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";
import { Providers } from "@/context";
import { ToastContainer } from "react-toastify";

const Gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/Gilroy-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-UltraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Marginplus Group",
  description: "Marginplus organizes farmers into structured clusters and connects them to training, finance, insurance, and premium markets.",
  openGraph: {
    images: "/images/og-image.png",
  },
  keywords: [
    "Marginplus Group",
    "structured farming clusters",
    "agriculture clusters Nigeria",
    "farmer training",
    "agri finance",
    "farm input financing",
    "crop insurance Nigeria",
    "agriculture market access",
    "premium buyers agriculture",
    "smallholder farmers",
    "agri community development",
    "agri tech Nigeria",
    "agriculture support services",
  ],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Gilroy.className} antialiased`}>
        <Providers>
          <header>
            <HeaderSection />
          </header>

          <main>{children}</main>

          <footer>
            <FooterSection />
          </footer>
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
