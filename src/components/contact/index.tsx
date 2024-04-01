
"use client"
import HeaderOne from "@/layouts/headers/HeaderOne"
import Breadcrumb from "../common/Breadcrumb"
import ContactArea from "./ContactArea"
import ContactMap from "./ContactMap"
import CtaArea from "../common/CtaArea"
import FooterOne from "@/layouts/footers/FooterOne"
import { useLanguage } from "@/hooks/LanguageContext"

const Contact = () => {
  const { language, setLanguage } = useLanguage(); // Use the useLanguage hook

  return (
    <>
      <HeaderOne />
      <Breadcrumb title={language === "ar" ? "التواصل"  : "Contact"} />
      <ContactArea />
      <ContactMap />
      <CtaArea />
      <FooterOne />
    </>
  )
}

export default Contact
