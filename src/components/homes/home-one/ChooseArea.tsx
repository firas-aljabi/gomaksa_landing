"use client"
import Image from "next/image"

import aboutShape_1 from "@/assets/img/about/2sm.webp";
import aboutShape_2 from "@/assets/img/about/2s.webp";
import aboutImg_1 from "@/assets/img/banner/4G.png";
import { useLanguage } from "@/hooks/LanguageContext";

const ChooseArea = () => {
   const { language, setLanguage } = useLanguage(); // Use the useLanguage hook

   return (
      <div className="why-choose pd-top-100 pd-bottom-100">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-8 order-lg-last">
               <div className="thumb">
                        <Image src={aboutImg_1} alt="img" />
                     </div>
               </div>
               
               <div className="col-lg-6 order-lg-first align-self-center">
                  <div className="section-title px-lg-5 mb-0">
                     <h5 className="sub-title right-line">{language === "ar" ? " لماذا تختارنا" : "Why Choose Us"}</h5>
                     <h2 className="title">{language === "ar" ? "نحن ننفذ أفكارنا من البداية إلى النهاية" : "We execute our ideas form the start to finish."}</h2>
                     <p className="content">{language === "ar" ? "الخبرة المحلية والرؤية العالمية: باعتبارنا شركة سعودية نفخر بها، فإننا نمتلك فهمًا عميقًا للسوق المحلية واحتياجاته المحددة. ويتم الجمع بين هذا التركيز المحلي والالتزام بالبقاء في طليعة التطورات التكنولوجية العالمية، مما يضمن حصولك على الحلول المتاحة الأكثر تقدمًا وفعالية" : "Local Expertise, Global Vision: As a proudly Saudi Arabian company, we possess a deepunderstanding of the local market and its specific needs. This local focus is combined with acommitment to staying at the forefront of global technological advancements, ensuring youreceive the most advanced and effective solutions available"}</p>
                     <div className="choose-wrap mt-4">
                        <div className="media single-choose-inner">
                           <div className="media-left">
                              <div className="icon">
                                 <i className="icomoon-gear"></i>
                              </div>
                           </div>
                           <div className="media-body">
                              <h4>{language === "ar" ? "شريكك الموثوق" : "Your Trusted Partner"}</h4>
                              <p>{language === "ar" ? "جوما ملتزمة بتجاوز توقعاتك. نحن نقدم خدمة عملاء استثنائية ودعمًا فنيًا موثوقًا وصيانة مستمرة لضمان حصولك على أقصى استفادة من استثمارك في الحلول الذكية. فريقنا موجود دائمًا لإرشادك خلال كل خطوة من رحلتك" : "GOMA is dedicated to exceeding your expectations. We provide exceptional customer service, reliable technical support, and ongoing maintenance to ensure you get the most out of your smart solution investment. Our team is always here to guide you through every step of the journey"} </p>
                           </div>
                        </div>
                        <div className="media single-choose-inner mb-3">
                           <div className="media-left">
                              <div className="icon">
                                 <i className="icomoon-time"></i>
                              </div>
                           </div>
                           <div className="media-body">
                              <h4>{language === "ar" ? "حلول مصممة خصيصًا لك" : "Solutions Crafted for You"}</h4>
                              <p> {language === "ar" ? "نحن نؤمن بالتجارب المخصصة. يتعاون فريقنا معك بشكل وثيق لفهم متطلباتك الفريدة وتطوير حلول مخصصة تتكامل بسلاسة مع البنية التحتية وسير العمل الحالية لديك" : "We believe in tailored experiences. Our team collaborates closely with you to understand your unique requirements and develop customized solutions that seamlessly integrate with your existing infrastructure and workflows"} </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ChooseArea
