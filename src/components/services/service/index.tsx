"use client"
import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceArea from "./ServiceArea"
import WorkArea from "@/components/homes/home-one/WorkArea"
import Testimonial from "./Testimonial"
import PricingPlan from "@/components/homes/home-one/PricingPlan"
import FooterOne from "@/layouts/footers/FooterOne"
import CtaArea from "@/components/common/CtaArea"
import { useLanguage } from "@/hooks/LanguageContext"

const Service = () => {
   const { language, setLanguage } = useLanguage(); // Use the useLanguage hook
   {language === "ar" ? "ابدأ" : "Get Started"} 
   return (
      <> 
         <HeaderOne />
         <Breadcrumb title= {language === "ar" ? "خدماتنا" : "Our Services"}  />
         <ServiceArea />
         <WorkArea />
         {/* <Testimonial /> */}
         {/* <PricingPlan /> */}
         <CtaArea />
         <FooterOne />
      </>
   )
}

export default Service
