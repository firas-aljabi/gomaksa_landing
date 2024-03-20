import About from "@/components/inner-pages/about";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "goma IT Solution ",
};
const index = () => {
   return (
      <Wrapper>
         <About />
      </Wrapper>
   )
}

export default index