import Progress from "@/components/common/Progress";

interface DataType {
   title: string;
   percentage: number;
}[];

const skill_data: DataType[] = [
   {
      title: "App development",
      percentage: 85,
   },
   {
      title: "It solution",
      percentage: 90,
   },
   {
      title: "Web development",
      percentage: 95,
   },
   {
      title: "Smart home",
      percentage: 100,
   },
]

const Skillbar = () => {
   return (
      <>
         {skill_data.map((item, i) => (
            <div key={i} className="single-progressbar">
               <h6>{item.title}</h6>
               <div className="progress-item" id="progress-running">
                  <Progress finish={item.percentage} />
               </div>
            </div>
         ))}
      </>
   )
}

export default Skillbar;
