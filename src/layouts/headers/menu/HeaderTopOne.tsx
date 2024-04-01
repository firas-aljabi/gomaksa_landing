import Link from "next/link"
import LanguageSwitcher from '../../../LanguageSwitcher';
import type { AppProps } from 'next/app';
import { LanguageProvider } from '../../../hooks/LanguageContext';

const HeaderTopOne = () => {
   return (
    
      <div className="navbar-top">
         <div className="container">
            <div className="row">
               <div className="col-sm-6">
                  <ul className="topbar-right text-md-start text-center">
                     <li className="d-none d-none d-lg-inline-block">
                        <p><i className="far fa-clock"></i> Opening Hour 1:00Am - 9:00Am EST</p>
                     </li>
                     <li>
                        <p><i className="far fa-envelope"></i> support@gomaksa.com</p>
                     </li>
                     <li>
                      <LanguageSwitcher/>
                     </li> 
                  </ul>
               </div>
               <div className="col-sm-6">
                  <ul className="topbar-right text-md-end text-center">
                     <li className="d-none d-none d-lg-inline-block">
                        <p>Hot Line: <span>+1 (570) 2129021</span></p>
                     </li> 
                     {/* <li className="social-area">
                        <p className="d-inline-block">Follow Us On:</p>
                        <Link href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></Link>
                        <Link href="#"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
                        <Link href="#"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
                        <Link href="#"><i className="fab fa-pinterest" aria-hidden="true"></i></Link>
                     </li> */}
                  </ul>
               </div>
            </div>
         </div>
      </div>
    
   )
}

export default HeaderTopOne;
