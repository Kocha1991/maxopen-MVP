'use client'
import Link from 'next/link';
import { useState, useEffect } from "react";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const [selectedLanguage, setSelectedLanguage] = useState("English");

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    useEffect(() => {
      if (isMobileMenu) {
          document.body.style.overflow = "hidden";
      } else {
          document.body.style.overflow = "";
      }
      return () => {
          document.body.style.overflow = "";
      }
    }, [isMobileMenu]);

    const handleLinkClick = () => {
      handleMobileMenu();
    };

    return (
      <>
          <div className={`mobile-header-active mobile-header-wrapper-style custom-mobile-inner ${isMobileMenu ? "sidebar-visible" : ""}`}>
              <div className="mobile-header-wrapper-inner">
                  <div className="mobile-header-top">
                      <img src="/assets/imgs/template/logo.png" alt="MaxOpen" />
                      <div className={`${isMobileMenu ? "burger-close" : ""}`} onClick={handleMobileMenu}>
                          <img src="/assets/imgs/template/icons/close-green.png" alt="close" />
                      </div>
                  </div>
                  <div className="custom-menu-body">
                    <nav className='custom-nav'>
                      <Link className="active" href="/" onClick={handleLinkClick}>Home</Link>
                      <Link href="#services" onClick={handleLinkClick}>Services</Link>
                      <Link href="/complete-solutions" onClick={handleLinkClick}>Complete Solutions</Link>
                      <Link href="#projects" onClick={handleLinkClick}>Portfolio</Link>
                      <Link href="#contact" onClick={handleLinkClick}>Contact</Link>
                    </nav>
                    <Link className="btn btn-brand-4-medium hover-up" href="https://calendly.com/maxopenstudio">
                      <span>Get Started</span>
                    </Link>
                  </div>
                  <div className="custom-menu-footer">
                    <div className='custom-menu-lang'>
                      <button
                        className={`custom-menu-lang__lang ${selectedLanguage === "English" ? "active" : ""}`}
                        onClick={() => handleLanguageChange("English")}
                      >
                        English
                      </button>
                      <button
                        className={`custom-menu-lang__lang ${selectedLanguage === "Ukrainian" ? "active" : ""}`}
                        onClick={() => handleLanguageChange("Ukrainian")}
                      >
                        Ukrainian
                      </button>
                    </div>
                  </div>
              </div>
          </div>
      </>
    )
}
