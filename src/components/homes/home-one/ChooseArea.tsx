import Image from "next/image"

import aboutShape_1 from "@/assets/img/about/2sm.webp";
import aboutShape_2 from "@/assets/img/about/2s.webp";
import aboutImg_1 from "@/assets/img/about/2m.webp";

const ChooseArea = () => {
   return (
      <div className="why-choose pd-top-100 pd-bottom-100">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-8 order-lg-last">
                  <div className="about-mask-bg-wrap about-mask-bg-wrap-2 mb-4 mb-lg-0">
                     
                     <div className="thumb">
                        <Image src={aboutImg_1} alt="img" />
                     </div>
                  </div>
               </div>
               
               <div className="col-lg-6 order-lg-first align-self-center">
                  <div className="section-title px-lg-5 mb-0">
                     <h5 className="sub-title right-line">Why Choose Us</h5>
                     <h2 className="title">We execute our ideas form the start to finish.</h2>
                     <p className="content">Local Expertise, Global Vision: As a proudly Saudi Arabian company, we possess a deep
understanding of the local market and its specific needs. This local focus is combined with a
commitment to staying at the forefront of global technological advancements, ensuring you
receive the most advanced and effective solutions available.
</p>
                     <div className="choose-wrap mt-4">
                        <div className="media single-choose-inner">
                           <div className="media-left">
                              <div className="icon">
                                 <i className="icomoon-gear"></i>
                              </div>
                           </div>
                           <div className="media-body">
                              <h4>Your Trusted Partner</h4>
                              <p>GOMA is dedicated to exceeding your expectations. We provide exceptional customer service, reliable technical support, and ongoing maintenance to ensure you get the most out of your smart solution investment. Our team is always here to guide you through every step of the journey </p>
                           </div>
                        </div>
                        <div className="media single-choose-inner mb-3">
                           <div className="media-left">
                              <div className="icon">
                                 <i className="icomoon-time"></i>
                              </div>
                           </div>
                           <div className="media-body">
                              <h4>Solutions Crafted for You</h4>
                              <p> We believe in tailored experiences. Our team collaborates closely with you to understand your unique requirements and develop customized solutions that seamlessly integrate with your existing infrastructure and workflows. </p>
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
