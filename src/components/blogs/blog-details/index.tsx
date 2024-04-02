import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BlogDetailsArea from "./BlogDetailsArea"
import FooterOne from "@/layouts/footers/FooterOne"

const BlogDetails = () => {
   return (
      <>
         <HeaderOne />
         <Breadcrumb title="Our blog Details" />
         <BlogDetailsArea />
         <FooterOne/>
      </>
   )
}

export default BlogDetails
