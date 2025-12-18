import { AboutUs } from "@/components";

export const metadata = {
  title: "About Us | Marginplus Group",
  description: " Our vision is to make agriculture across Africa structured, profitable, and inclusive, creating shared wealth, impact, and opportunity for every farming community.",
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

export default function AboutUsPage() {
  return <AboutUs />;
}
