import Image from "next/image"
import Count from "@/components/common/Count";

import aboutShape_1 from "@/assets/img/about/1sm.webp";
import aboutShape_2 from "@/assets/img/about/1s.webp";
import aboutImg_1 from "@/assets/img/about/826.700.webp";

interface ContentType {
   sub_title: string;
   title: string;
   desc_1: JSX.Element;
   desc_2: JSX.Element;
  
}

const abount_content: ContentType = {
   sub_title: "About US",
   title: "Welcome to GOMA Your Gateway to a Smarter Future in smart solutions",
   desc_1: (<>GOMA, a leading name in smart solutions, proudly serves Saudi Arabia with innovative technology designed to transform your life. We are passionate about empowering individuals and businesses to embrace the potential of a connected future, offering a comprehensive range of services that cater to both smart home and network needs</>),
   desc_2: (<></>),
}

const { sub_title, title, desc_1, desc_2 } = abount_content;

const About = () => {
   return (
      <div className="about-area pd-top-100">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-8">
                  <div className="about-mask-bg-wrap about-mask-bg-wrap-1 mb-4 mb-lg-0">
                
                     <div className="thumb">
                        <Image src={aboutImg_1} alt="img" />
                     </div>
                  </div>
               </div>

               <div className="col-lg-6 align-self-center">
                  <div className="section-title px-lg-5 mb-0">
                     <h5 className="sub-title right-line">{sub_title}</h5>
                     <h2 className="title">{title}</h2>
                     <p className="content">{desc_1}</p>
                     <p className="content-strong mt-3">{desc_2}</p>
                     <div className="exp-wrap mt-3">
                        <div className="row">
                         
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
