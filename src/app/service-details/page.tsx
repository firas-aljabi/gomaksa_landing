import ServiceDetails from "@/components/services/service-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Service Details Goma - IT Solution",
};
const index = () => {
   return (
      <Wrapper>
         <ServiceDetails />
      </Wrapper>
   )
}

export default index