"use client"
import Count from "@/components/common/Count"
import counter_data from "@/data/CounterData"
import VideoPopup from "@/modals/VideoPopup"
import { useState } from "react";

const Counter = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="counter-area bg-overlay-black pd-top-110 pd-bottom-110" style={{ backgroundImage: `url(/assets/img/bg/826.700(2).webp)` }}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-5">
                     <div className="section-title style-white">
                        <h2 className="title">We Care About Your Important Things</h2>
                     </div>
                  </div>
               </div>
             
            </div>
         </div>
         {/* video modal start */}
        
         {/* video modal end */}
      </>
   )
}

export default Counter
