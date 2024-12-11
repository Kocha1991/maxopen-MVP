import { SocialNetworks } from '@/components/elements/SocialNetworks';
import Link from 'next/link';

export default function CustomFooter() {
    return (
        <>
            <footer className="footer custom-footer">
                <div className="container">
                  <div className="custom-footer__wrapper">
                    <Link href="/" className="maxOpen-logo">
                      <img alt="MaxOpen" src="/assets/imgs/template/logo.png"/>
                    </Link>
                    <nav className='custom-nav'>
                      <Link className="active" href="/">Home</Link>
                      <Link href="#services">Services</Link>
                      <Link href="/complete-solutions">Solutions</Link>
                      <Link href="#projects">Portfolio</Link>
                      <Link href="#contact">Contact</Link>
                    </nav>
                    
                    <div className="custom-footer__social">
                        <p className="text-lg title-follow neutral-0 mt-0">
                          Follow us
                        </p>
                        <SocialNetworks />
                    </div>
                    <div className="footer-bottom text-center">
                      <p className="text-sm neutral-600">Copyright © 2025 MAXOPEN. All rights reserved.</p>
                    </div>
                  </div>
                </div>
            </footer>

        </>
    )
}
