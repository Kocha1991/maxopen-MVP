import Link from 'next/link';
import LanguageDropdown from '@/components/elements/LanguageDropdown';

export default function CustomHeader({ scroll, handleMobileMenu, topBar, headerCls, isBlack}) {
    return (
        <>
            <header className={`header ${headerCls ? headerCls : ""} sticky-bar ${scroll ? "stick" : ""} ${isBlack ? "header-black" : ""}`}>
                {topBar &&
                    <div className="top-bar">
                        <div className="container">
                            <div className="top-bar-inner">
                                <div className="box-top-bar-left">
                                  <span className="address-icon text-md">
                                    9207 Lakeshore RdShreveport
                                  </span>
                                </div>
                                <div className="box-top-bar-right"><a className="phone-icon text-md" href="tel:(262) 555-0131">(262)
                                    555-0131</a><a className="email-icon text-md" href="mailto:contact@nivia.com">contact@nivia.com</a></div>
                            </div>
                        </div>
                    </div>
                }
                <div className="container">
                    <div className="main-header custom-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link className="d-flex" href="/">
                                    <img 
                                      src="/assets/imgs/template/logo.png" 
                                      alt="MaxOpen"
                                      className='web-logo'
                                    />
                                    <img 
                                      src="/assets/imgs/template/mobile-logo.svg"
                                      alt="MaxOpen"
                                      className='mobile-logo'
                                    />
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="has-children"><Link className="active" href="/">Home</Link>
                                        </li>
                                        <li className="has-children"><Link href="#services">Services</Link></li>
                                        <li className="has-children"><Link href="/complete-solutions">Solutions</Link></li>
                                        <li className="has-children"><Link href="#projects">Portfolio</Link>
                                        </li>
                                        <li className="has-children"><Link href="#contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header-right ">
                            <div className='header-right__block'>
                              <LanguageDropdown />
                              <Link className="btn btn-brand-4-medium hover-up" href="/calendly">
                                <span>Get Started</span>
                              </Link>
                            </div>
                            <div className="burger-icon burger-icon-white burger-icon-custom" onClick={handleMobileMenu}>
                                <img src="/assets/imgs/template/icons/burger.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
