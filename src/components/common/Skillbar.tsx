import Progress from "@/components/common/Progress";
import { useLanguage } from "@/hooks/LanguageContext";

interface DataType {
   title: string;
   percentage: number;
}[];


const Skillbar = () => {
   const { language, setLanguage } = useLanguage(); // Use the useLanguage hook
   const skill_data: DataType[] = [
      {
         title: `${language === "ar" ? "تطوير التطبيقات"  : "App development"}`,
         percentage: 85, 
      },
      {
         title: `${language === "ar" ? " الحلول البرمجية"  : "It solution"}`,
         percentage: 90,
      },
      {
         title: `${language === "ar" ? "تطوير الويب"  : "Web development"}`,
         percentage: 95,
      },
      {
         title: `${language === "ar" ? "البيوت الذكية"  : "Smart home"}`,
         percentage: 100,
      },
   ]
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
