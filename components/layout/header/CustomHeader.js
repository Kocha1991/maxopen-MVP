import Link from 'next/link';
import LanguageDropdown from '@/components/elements/LanguageDropdown';

export default function CustomHeader({ scroll, isMobileMenu, handleMobileMenu, topBar, headerCls, logoWhite }) {
    return (
        <>
            <header className={`header ${headerCls ? headerCls : ""} sticky-bar ${scroll ? "stick" : ""}`}>
                {topBar &&
                    <div className="top-bar">
                        <div className="container">
                            <div className="top-bar-inner">
                                <div className="box-top-bar-left"><span className="address-icon text-md">9207 Lakeshore RdShreveport</span>
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
                                    />
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="has-children"><Link className="active" href="/">Home</Link>
                                            {/* <ul className="sub-menu">
                                                <li><Link href="/">Business Solutions</Link></li>
                                                <li><Link href="/index-2">Marketing App</Link></li>
                                                <li><Link href="/index-3">Web Agency</Link></li>
                                                <li><Link href="/index-4">Digital Agency</Link></li>
                                                <li><Link href="/index-5">3D Products</Link></li>
                                                <li><Link href="/index-6">AI Platform</Link></li>
                                            </ul> */}
                                        </li>
                                        <li className="has-children"><Link href="/about">About</Link></li>
                                        <li className="has-children"><Link href="/service">Services</Link></li>
                                        <li className="has-children"><Link href="/blog">Portfolio</Link>
                                            {/* <ul className="sub-menu">
                                                <li><Link href="/blog">Project V1</Link></li>
                                                <li><Link href="/blog-2">ProjectV2</Link></li>
                                                <li><Link href="/blog-post">Project V3</Link></li>
                                            </ul> */}
                                        </li>
                                        <li className="has-children"><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header-right ">
                            <div className='header-right__block'>
                              <LanguageDropdown />
                              <Link className="btn btn-brand-4-medium hover-up" href="#">
                                Get Started
                              </Link>
                            </div>
                            <div className="burger-icon burger-icon-white burger-icon-custom" onClick={handleMobileMenu}>
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}
