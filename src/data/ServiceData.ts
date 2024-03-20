import { StaticImageData } from "next/image";

import serviceIcon_1 from "@/assets/img/home-cyber/service/826.700(2).webp";
import serviceIcon_2 from "@/assets/img/home-cyber/service/service-02.webp";
import serviceIcon_3 from "@/assets/img/home-cyber/service/service-03.webp";
import serviceIcon_4 from "@/assets/img/home-cyber/service/service-04.webp";
import serviceIcon_5 from "@/assets/img/home-cyber/service/service-05.webp";
import serviceIcon_6 from "@/assets/img/home-cyber/service/service-06.webp";

import serviceHoverIcon_1 from "@/assets/img/home-cyber/service/826.700(2).webp";
import serviceHoverIcon_2 from "@/assets/img/home-cyber/service/service-002.webp";
import serviceHoverIcon_3 from "@/assets/img/home-cyber/service/service-003.webp";
import serviceHoverIcon_4 from "@/assets/img/home-cyber/service/service-004.webp";
import serviceHoverIcon_5 from "@/assets/img/home-cyber/service/service-005.webp";
import serviceHoverIcon_6 from "@/assets/img/home-cyber/service/service-006.webp";

interface DataType {
   id: number;
   page: string;
   icon?: string;
   title: string;
   desc: string;
   icon_img?:StaticImageData;
   hover_icon_img?:StaticImageData;
}[];

const service_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      icon: "icomoon-layer",
      title: "Web design",
      desc: "We create visually appealing and functionally sound websites tailored to your specific needs.",
   },
   {
      id: 2,
      page: "home_1",
      icon: "icomoon-application",
      title: "App development",
      desc: "We design and develop user-friendly and feature-rich mobile apps for various platforms.",
   },
   {
      id: 3,
      page: "home_1",
      icon: "icomoon-cloud-data",
      title: "Content Management Systems",
      desc: "Easily manage your website content with user-friendly content management systems.",
   },
   {
      id: 4,
      page: "home_1",
      icon: "icomoon-megaphone",
      title: "Ecommerce Development",
      desc: "Build a secure and user-friendly online store to sell your products and services online.",
   },

   // home_2
   {
      id: 1,
      page: "home_2",
      icon: "icomoon-layer",
      title: "App Development",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 2,
      page: "home_2",
      icon: "icomoon-application",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 3,
      page: "home_2",
      icon: "icomoon-cloud-data",
      title: "It Mangement",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 4,
      page: "home_2",
      icon: "icomoon-megaphone",
      title: "Digital Marketing",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 5,
      page: "home_2",
      icon: "icomoon-lock",
      title: "Cloud Service",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 6,
      page: "home_2",
      icon: "icomoon-magnifiying-glass",
      title: "Machine learning",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },

   // home_5
   
   {
      id: 1,
      page: "home_5",
      icon_img:serviceIcon_1,
      hover_icon_img:serviceHoverIcon_1,
      title: "Application Security",
      desc: "What is application security and examples? Image result for application security",
   },
   {
      id: 2,
      page: "home_5",
      icon_img:serviceIcon_2,
      hover_icon_img:serviceHoverIcon_2,
      title: "Cloud Security",
      desc: "What is application security and examples? Image result for application security",
   },
   {
      id: 3,
      page: "home_5",
      icon_img:serviceIcon_3,
      hover_icon_img:serviceHoverIcon_3,
      title: "Structure Security",
      desc: "What is application security and examples? Image result for application security",
   },
   {
      id: 4,
      page: "home_5",
      icon_img:serviceIcon_4,
      hover_icon_img:serviceHoverIcon_4,
      title: "Threat Hunter",
      desc: "What is application security and examples? Image result for application security",
   },
   {
      id: 5,
      page: "home_5",
      icon_img:serviceIcon_5,
      hover_icon_img:serviceHoverIcon_5,
      title: "Incident Responder",
      desc: "What is application security and examples? Image result for application security",
   },
   {
      id: 6,
      page: "home_5",
      icon_img:serviceIcon_6,
      hover_icon_img:serviceHoverIcon_6,
      title: "Data Security",
      desc: "What is application security and examples? Image result for application security",
   },

   // inner_page
   
   {
      id: 1,
      page: "inner_page",
      icon:"icomoon-profile",
      title: " Smart Solutions",
      desc: "Seamless integration: Connect all your smart devices and control them from one place. Personalized automation: Set up routines for daily tasks, like turning on lights at sunset oradjusting the thermostat when you leave. Voice control: Use your voice to control lights, appliances, and even adjust the temperature. Remote access: Monitor and manage your smart home from anywhere, anytime.",
   }, 
   {
      id: 2,
      page: "inner_page",
      icon:"icomoon-layer",
      title: "Advanced Security Systems",
      desc: "High-definition CCTV: Keep an eye on your property with crystal-clear cameras and live viewing options.  Smart alarms: Get notified instantly of any suspicious activity, like a break-in or smoke detection. 24/7 monitoring: Optionally choose professional monitoring for added peace of mind. Access control: Choose from keyless entry systems, smart locks, and even video intercoms for added security.",
   },
   {
      id: 3,
      page: "inner_page",
      icon:"icomoon-application",
      title: " Clear CCTV",
      desc: "Multiple camera options: Choose indoor, outdoor, or even night vision cameras to suit your needs.  Motion detection: Get alerts only when something moves, reducing false alarms Remote recording: Record footage remotely and store it securely for later viewing. Easy installation: Our experts can help you install and set up your CCTV system quickly and easily.",
   },
   {
      id: 4,
      page: "inner_page",
      icon:"icomoon-cloud-data",
      title: " Smart Access Control",
      desc: "Keyless entry: Enter your home with a simple tap, code, or even your smartphone. Grant temporary access: Share access with trusted individuals for specific times or durations. rack entry log: See who comes and goes from your home, and when.  Integrate with other systems: Connect your access control system with your smart lights or alarms for added functionality",
   },
   // {
   //    id: 5,
   //    page: "inner_page",
   //    icon:"icomoon-megaphone",
   //    title: "Web design",
   //    desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   // },
   // {
   //    id: 6,
   //    page: "inner_page",
   //    icon:"icomoon-lock",
   //    title: "Web design",
   //    desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   // },
   // {
   //    id: 7,
   //    page: "inner_page",
   //    icon:"icomoon-magnifiying-glass",
   //    title: "Web design",
   //    desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   // },
   // {
   //    id: 8,
   //    page: "inner_page",
   //    icon:"icomoon-computer",
   //    title: "Web design",
   //    desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   // },
   // {
   //    id: 9,
   //    page: "inner_page",
   //    icon:"icomoon-deep-learning",
   //    title: "Web design",
   //    desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   // },
]

export default service_data;