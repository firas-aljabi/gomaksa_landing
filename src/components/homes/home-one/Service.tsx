import service_data from "@/data/ServiceData"
import Link from "next/link"

const Service = () => {
   return (
      <div className="service-area bg-overlay pd-top-120 pd-bottom-90"
         style={{ backgroundImage: `url('/assets/img/bg/3.webp')` }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-4">
                  <div className="section-title border-radius-5 p-35 bg-base style-white mb-lg-0">
                     <h2 className="title mt-4">Turn your home into a haven of comfort and security:
</h2>
                     <p className="content"> Smart Solutions: Imagine a home that anticipates your needs. Adjust lights, control
temperature, and manage appliances with ease through our integrated smart home systems.
From voice-activated assistants to connected devices, we create a personalized ecosystem
of convenience. </p>
                     <p className="content"> Security Systems: Your peace of mind is our priority. GOMA provides advanced security
solutions to safeguard your loved ones and belongings. Choose from a variety of options,
including CCTV cameras with remote viewing capabilities, intelligent access control systems,
and sophisticated burglar alarms. We customize each system to match your specific
requirements, ensuring optimal protection.
</p>
                     <div className="btn-wrap mt-4 pt-1 mb-4">
                        <Link className="it-btn btn-small btn-border-white mt-2 me-2" href="/contact">Contact Us</Link>
                        <Link className="it-btn btn-small btn-black mt-2" href="/service">All Service</Link>
                     </div>
                  </div>
               </div>

               <div className="col-lg-8">
                  <div className="row">
                     {service_data.filter((items) => items.page === "home_1").map((item) => (
                        <div key={item.id} className="col-md-6">
                           <div className="single-service-inner style-white text-center">
                              <div className="icon-box">
                                 <i className={item.icon} ></i>
                              </div>
                              <div className="details">
                                 <h3><Link href="/service-details">{item.title}</Link></h3>
                                 <p>{item.desc}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Service
