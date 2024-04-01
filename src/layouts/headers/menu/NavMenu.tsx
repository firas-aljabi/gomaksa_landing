"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage,LanguageProvider } from '../../../hooks/LanguageContext';


const NavMenu = () => {
     const currentRoute = usePathname();
    const [navTitle, setNavTitle] = useState("");
    const { language, setLanguage } = useLanguage(); // Use the useLanguage hook
    const [menuData, setMenuData] = useState<MenuItem[]>([]);
    type MenuItem = {
        id: number;
        has_dropdown: boolean;
        title: string;
        link: string;
        sub_menus?: {
            link: string;
            title: string;
        }[];
    };
    
    
// const language = typeof window !== 'undefined' ? localStorage.getItem("lann") : null;
useEffect(() => {
    // Listen for language changes
    // const storedLanguage = typeof window !== 'undefined' ? localStorage.getItem("lann") : "en";
    // setLanguage(storedLanguage || "en");

    // Define menu data here so it updates when the language changes
    const menu_data = [
        {
            id: 1,
            has_dropdown: false,
            title: `${language === "ar" ? "الصفحة الرئيسية" : "Home"}`,
            link: "/",
        },
        {
            id: 2,
            has_dropdown: false,
            title: `${language === "ar" ? "خدماتنا" : "Service"}`,
            link: "/service",
        },
        {
            id: 3,
            has_dropdown: false,
            title: `${language === "ar" ? "عنا" : "About Us"}`,
            link: "/about",
        },
        {
            id: 5,
            has_dropdown: false,
            title: `${language === "ar" ? "تواصل معنا" : "Contact Us"}`,
            link: "/contact",
        },
    ];
    setMenuData(menu_data);
}, [language]); // This effect depends on `language`, so it runs anytime `language` changes.

    const isMenuItemActive = (menuLink: string) => {
        return currentRoute === menuLink;
    };

    const isSubMenuItemActive = (subMenuLink: string) => {
        return currentRoute === subMenuLink;
    };

    //openMobileMenu
    const openMobileMenu = (menu: any) => {
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    }; 

    return (
        <>
      
            {menuData.map((menu) => (
                <li key={menu.id} className={`${menu.has_dropdown ? "menu-item-has-children" : ""} ${isMenuItemActive(menu.link) ? "active" : ""}`}>
                    <Link href={menu.link}>
                        {menu.title}
                    </Link>
                    {menu.has_dropdown && (
                        <ul className={`sub-menu ${navTitle === menu.title ? "show" : ""}`}>
                            {menu.sub_menus && menu.sub_menus.map((sub_m, i) => (
                                <li key={i} className={isSubMenuItemActive(sub_m.link) ? "active" : ""}>
                                    <Link href={sub_m.link}>
                                         {sub_m.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
          
        </>
    );
};

export default NavMenu;

