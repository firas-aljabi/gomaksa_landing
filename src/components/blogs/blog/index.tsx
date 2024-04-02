import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BlogArea from "./BlogArea"
import FooterOne from "@/layouts/footers/FooterOne"

const Blog = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Our blog post" />
      <BlogArea />
      <FooterOne />
    </>
  )
}

export default Blog
