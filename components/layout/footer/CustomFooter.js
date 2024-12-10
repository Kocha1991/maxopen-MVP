import Link from 'next/link'

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
                        <div className="box-socials-footer">
                          <a className="icon-socials icon-facebook" href="#">
                            <img alt="facebook" src="/assets/imgs/template/icons/fb.svg" />
                          </a>
                          <a className="icon-socials icon-instagram" href="https://www.instagram.com/maxopen_studio/">
                            <img alt="instagram" src="/assets/imgs/template/icons/in.svg" />
                          </a>
                          <a className="icon-socials icon-twitter" href="#">
                            <img alt="twiter" src="/assets/imgs/template/icons/tw.svg" />
                          </a>
                          <a className="icon-socials icon-be" href="#">
                            <img alt="be" src="/assets/imgs/template/icons/be.svg" />
                          </a>
                        </div>
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
