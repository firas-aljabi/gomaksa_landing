interface DataType {
   id: number;
   title: string;
   nav_links: {
      link: string;
      title: string
   }[];
}[];
       const language = typeof window !== 'undefined' ? localStorage.getItem("lann") : null;

const footer_data: DataType[] = [
   {
      id: 1,
      title: `${language === "ar" ? "الخدمات"  : "Service"}` ,
      nav_links: [
         { link: "service", title: `${language === "ar" ? "تصميم الويب"  : "Web design"}` },
         { link: "service", title: `${language === "ar" ?  "التسويق الرقمي"  : "Digital marketing"}` },
         { link: "service", title: `${language === "ar" ?  "ادارة برمجية"  : "It management"}` },
         { link: "service", title: `${language === "ar" ?  "ادارة برمجية"  : "Cloud services"}` },
         { link: "service", title: `${language === "ar" ?  "التعلم الالي"  : "Machine learning"}` },
      ],
   },
   {
      id: 2,
      title: `${language === "ar" ? "روابط مفيد"  : "Useful link"}`,
      nav_links: [
         { link: "about", title: `${language === "ar" ? "عنا"  : "About Us"}` },
         // { link: "team", title: "Team" },
         // { link: "project", title: "Portfolio" },
         { link: "service", title: `${language === "ar" ? "الخدمات"  : "Service"}` },
         { link: "contact", title: `${language === "ar" ? "تواصل معنا"  : "Contact Us"}` },
      ]
   },
]

export default footer_data;