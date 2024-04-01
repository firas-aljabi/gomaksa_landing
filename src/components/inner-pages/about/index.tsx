"use client"
import Breadcrumb from "@/components/common/Breadcrumb"
import HomeOneAbout from "@/components/homes/home-one/About"
import ChooseArea from "@/components/homes/home-one/ChooseArea"
import FAQ from "@/components/homes/home-one/FAQ"
import Counter from "@/components/homes/home-three/Counter"
import Team from "@/components/homes/home-three/Team"
import HeaderOne from "@/layouts/headers/HeaderOne"
import Testimonial from "./Testimonial"
import SkillArea from "./SkillArea"
import Blog from "@/components/homes/home-one/Blog"
import CtaArea from "@/components/common/CtaArea"
import FooterOne from "@/layouts/footers/FooterOne"
import { useLanguage } from "@/hooks/LanguageContext"

const About = () => {
  const { language, setLanguage } = useLanguage(); // Use the useLanguage hook

  return (
    <>
      <HeaderOne />
      <Breadcrumb title={language === "ar" ? "معلومات عنا" : "About US"} />
      <HomeOneAbout />
      <ChooseArea />
     
      <CtaArea />
      <FooterOne />
    </>
  )
} 

export default About
 