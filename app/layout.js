import localFont from "next/font/local";
import "./globals.css";
import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";


const Gilroy = localFont({
  src: [
    {
      path: "../public/fonts/Gilroy-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-UltraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Marginplus: Smartly Invest in Nigerian Agriculture",
  description: "Secure, high-return agricultural investments in Nigeria. Our platform offers vetted opportunities with up to 35% returns, combining profit with impact.",
  openGraph: {
    images: 'https://marginplus.ng/og-marginplus.png',
},
  keywords: [
    "Agricultural investment Nigeria", 
    "Invest in Nigerian agriculture",
    "SEC licenced investments Nigeria", 
    "Secure agriculture investment platforms",
    "Impactful opportunities Nigeria"
  ],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Gilroy.className} antialiased`}>
        <header>
          <HeaderSection />
        </header>
        <main>{children}</main>
        <footer>
          <FooterSection />
        </footer>
      </body>
    </html>
  );
}
