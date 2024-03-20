interface DataType {
   id: number;
   page: string;
   count?: string;
   icon?: string;
   title: string;
   desc: string;
}[];

const work_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      count: "01",
      title: "Select a project",
      desc: "",
   },
   {
      id: 2,
      page: "home_1",
      count: "02",
      title: "Project analysis",
      desc: "",
   },
   {
      id: 3,
      page: "home_1",
      count: "03",
      title: "Execute",
      desc: "",
   },
   {
      id: 4,
      page: "home_1",
      count: "04",
      title: "Deliver result",
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