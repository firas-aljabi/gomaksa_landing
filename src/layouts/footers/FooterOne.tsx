"use client"
import SocialIcon from "@/components/common/SocialIcon"
import { useLanguage } from "@/hooks/LanguageContext";
import Link from "next/link"
interface DataType {
   id: number;
   title: string;
   nav_links: {
      link: string;
      title: string
   }[];
}[];
const FooterOne = () => {
   const { language, setLanguage } = useLanguage(); // Use the useLanguage hook
   const footer_data: DataType[] = [
      {
         id: 1,
         title: `${language === "ar" ? "الخدمات"  : "Service"}` ,
         nav_links: [
            { link: "service", title: `${language === "ar" ? "تصميم الويب"  : "Web design"}` },
            { link: "service", title: `${language === "ar" ?  "التسويق الرقمي"  : "Digital marketing"}` },
            { link: "service", title: `${language === "ar" ?  "ادارة برمجية"  : "It management"}` },
            { link: "service", title: `${language === "ar" ?  "ادارة برمجية"  : "Cloud services"}` },
            { link: "service", title: `${language === "ar" ?  "التعلم الالي"  : "Machine learning"}` },
         ],
      },
      {
         id: 2,
         title: `${language === "ar" ? "روابط مفيد"  : "Useful link"}`,
         nav_links: [
            { link: "about", title: `${language === "ar" ? "عنا"  : "About Us"}` },
            // { link: "team", title: "Team" },
            // { link: "project", title: "Portfolio" },
            { link: "service", title: `${language === "ar" ? "الخدمات"  : "Service"}` },
            { link: "contact", title: `${language === "ar" ? "تواصل معنا"  : "Contact Us"}` },
         ]
      },
   ]
   return (
      <footer className="footer-area bg-black bg-cover" style={{ backgroundImage: `url('/assets/img/bg/2.webp')` }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-md-6">
                  <div className="widget widget_about">
                     <h4 className="widget-title">{language === "ar" ? "عن الشركة"  : "About company"}</h4>
                     <div className="details">
                        <p>{language === "ar" ? "العنوان"  : "Address"}</p>
                        <p>{language === "ar" ? "شارع السوق N.، جناح 1006545"  : "Market Avenue N.,Suite 100,6545"}</p>
                           <p>{language === "ar" ? "كانتون الشمالية، أوهايو 44721"  : "North Canton ,Ohio44721"}</p>

                        {/* <ul className="social-media">
                           <SocialIcon />
                        </ul> */}
                     </div>
                  </div>
               </div>

               {footer_data.map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6">
                     <div className="widget widget_nav_menu">
                        <h4 className="widget-title">{item.title}</h4>
                        <ul>
                           {item.nav_links.map((menu, i) => (
                              <li key={i}><Link href={menu.link}>{menu.title}</Link></li>
                           ))}
                        </ul>
                     </div>
                  </div>
               ))}

               <div className="col-lg-3 col-md-6">
                  <div className="widget widget_subscribe">
                     <h4 className="widget-title">{language === "ar" ? "سعداء لمساعدتك"  : "Happy To Help You"} </h4>
                    
                  </div>
               </div>
            </div>
         </div>
         
         <div className="footer-bottom text-center">
            <div className="container">
               <div className="row">
                  <div className="col-md-12 align-self-center">
                     <p>© 2024. All Rights Reserved</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
