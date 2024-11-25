import Link from 'next/link'

export default function Footer1() {
    return (
        <>
            <footer className="footer footer-style-3 footer-style-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 mb-30"><Link href="/"><img alt="Nivia" src="/assets/imgs/template/logo.svg" /></Link>
                            <div className="mt-20 mb-20">
                                <p className="text-md neutral-600 mb-10">4517 Washington Ave. Manchester, Kentucky 39495</p>
                                <p className="text-md neutral-600">Hours: 8:00 - 17:00, Mon - Sat </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-30">
                                    <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">About</h5>
                                    <ul className="menu-footer">
                                        <li><Link href="#">Company</Link></li>
                                        <li><Link href="#">Careers</Link></li>
                                        <li><Link href="#">Press media</Link></li>
                                        <li><Link href="#">History</Link></li>
                                        <li><Link href="#">Sitemap</Link></li>
                                        <li><Link href="#">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-30">
                                    <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">Services</h5>
                                    <ul className="menu-footer">
                                        <li><Link href="#">IT Consultancy</Link></li>
                                        <li><Link href="#">Data Security</Link></li>
                                        <li><Link href="#">Business Reform</Link></li>
                                        <li><Link href="#">Firewall Advance</Link></li>
                                        <li> <Link href="#">Interactions</Link></li>
                                        <li> <Link href="#">SEO</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-30">
                                    <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">Resource</h5>
                                    <ul className="menu-footer">
                                        <li><Link href="#">Community</Link></li>
                                        <li><Link href="#">Our Blog</Link></li>
                                        <li><Link href="#">Forums</Link></li>
                                        <li><Link href="#">Meetups</Link></li>
                                        <li> <Link href="#">Marketplace</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-30">
                                    <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">Support</h5>
                                    <ul className="menu-footer">
                                        <li><Link href="#">Forum Support</Link></li>
                                        <li><Link href="#">Help  FAQ</Link></li>
                                        <li><Link href="#">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom mt-0">
                        <div className="row align-items-end">
                            <div className="col-lg-6 mb-20">
                                <h5 className="text-18-semibold neutral-0">Join our newsletter</h5>
                                <p className="text-sm neutral-600 mb-20">No ads. No trails. No commitments</p>
                                <div className="form-newsletter form-newsletter-2">
                                    <form>
                                        <input className="form-control" type="text" placeholder="email address" />
                                        <button className="btn btn-brand-4-medium">Subscribe
                                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="true" />
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 text-lg-end text-center">
                                <div className="row align-items-end">
                                    <div className="col-md-6 mb-20">
                                        <div className="text-center text-md-start">
                                            <div className="text-start d-inline-block">
                                                <p className="text-lg title-follow neutral-0">Follow us
                                                </p><div className="box-socials-footer"><Link className="icon-socials icon-facebook" href="#"><img alt="Nivia" src="/assets/imgs/template/icons/fb.svg" /></Link><Link className="icon-socials icon-instagram" href="#"><img alt="Nivia" src="/assets/imgs/template/icons/in.svg" /></Link><Link className="icon-socials icon-twitter" href="#"><img alt="Nivia" src="/assets/imgs/template/icons/tw.svg" /></Link><Link className="icon-socials icon-be" href="#"><img alt="Nivia" src="/assets/imgs/template/icons/be.svg" /></Link></div>
                                                <p />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-20">
                                        <p className="text-sm neutral-600">Copyright © 2023 Nivia. All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}
