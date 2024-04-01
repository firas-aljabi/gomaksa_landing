
"use client"
import { useLanguage } from "@/hooks/LanguageContext";

const ContactArea = () => {
   const { language, setLanguage } = useLanguage(); // Use the useLanguage hook

   return (
      <div className="team-area info-box-two pd-top-115 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-md-9">
                  <div className="section-title text-center">
                     <h5 className="sub-title double-line">{language === "ar" ? "التواصل"  : "Contact"}</h5>
                     <h2 className="title">{language === "ar" ? "ابقى على تواصل"  : "Get in touch"}</h2>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-lg-4 col-md-6">
                  <div className="single-contact-inner text-center">
                     <div className="icon-box">
                        <i className="icomoon-pin"></i>
                     </div>
                     <div className="details-wrap">
                        <div className="details-inner">
                           <h3>{language === "ar" ? "عنوان المكتب"  : "Office address"}</h3>
                           <p>{language === "ar" ? "شارع السوق رقم N.، جناح 1006545"  : "Market Avenue N.,Suite 100,6545"}</p>
                           <p>{language === "ar" ? "كانتون الشمالية، أوهايو 44721"  : "North Canton ,Ohio44721"}</p>

                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="single-contact-inner text-center">
                     <div className="icon-box">
                        <i className=" icomoon-email"></i>
                     </div>
                     <div className="details-wrap">
                        <div className="details-inner">
                           <h3>{language === "ar" ? "البريد الالكتروني"  : "Email Address"}</h3>
                           <p>support@gomaksa.com</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="single-contact-inner text-center">
                     <div className="icon-box">
                        <i className=" icomoon-telephone"></i>
                     </div>
                     <div className="details-wrap">
                        <div className="details-inner">
                           <h3>{language === "ar" ? "رقم الهاتف"  : "Phone Number"}</h3>
                           <p>+1(570)2129021 </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactArea
