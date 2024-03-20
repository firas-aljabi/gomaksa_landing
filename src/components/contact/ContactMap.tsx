import ContactForm from "../forms/ContactForm"

const ContactMap = () => {
   return (
      <>
         <div className="g-map-inner">
         <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2937014.3212289066!2d-82.996216!3d40.367474!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8836d47d3e6e143d%3A0x93ae9f3c121acef2!2sOhio%2C%20USA!5e0!3m2!1sen!2sus!4v1647457887456!5m2!1sen!2sus"
  width="600"
  height="600" // Changed height from 450 to 600
  loading="lazy"
  ></iframe>
         </div>
         <div className="g-map-contact">
            <div className="row justify-content-end">
               <div className="col-lg-5 col-md-7 mb-3">
                
               </div>
            </div>
         </div>
      </>
   )
}

export default ContactMap
