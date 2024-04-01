interface DataType {
   id: number;
   page: string;
   count?: string;
   icon?: string;
   title: string;
   desc: string;
}[];
const language = typeof window !== 'undefined' ? localStorage.getItem("lann") : null;
const work_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      count: "01",
      title: `${language === "ar" ? "اختر مشروعًا"  : "Select a project"}`,
      desc: "",
   },
   {
      id: 2,
      page: "home_1",
      count: "02",
      title: `${language === "ar" ? "تحليل المشروع"  : "Project analysis"}`,
      desc: "",
   },
   {
      id: 3,
      page: "home_1",
      count: "03",
      title: `${language === "ar" ? "ينفذ" : "Execute"}`,
      desc: "",
   },
   {
      id: 4,
      page: "home_1",
      count: "04",
      title: `${language === "ar" ? "تسليم النتيجة" : "Deliver result"}`,
      desc: "",
   },

   // home_2

   {
      id: 1,
      page: "home_2",
      icon: "icomoon-project",
      title: "Select a project",
      desc: "",
   },
   {
      id: 2,
      page: "home_2",
      icon: "icomoon-analysis",
      title: "Project analysis",
      desc: "",
   },
   {
      id: 3,
      page: "home_2",
      icon: "icomoon-gear",
      title: "Execute",
      desc: "",
   },
   {
      id: 4,
      page: "home_2",
      icon: "icomoon-approval",
      title: "Deliver result",
      desc: "",
   },
]

export default work_data;