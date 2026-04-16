import BannerSection from "../components/home/BannerSection"
import ContentSection from "../components/home/ContentSection"
import ServicesSection from "../components/home/ServicesSection"
import BrandSection from "../components/home/BrandSection"

export default function Home() {
  return (
    <section className="bg-[#faf4ec] ">
      <BannerSection />
      <ContentSection />
      <ServicesSection />
      <BrandSection />
    </section>
  );
}
