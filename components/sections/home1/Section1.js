import Link from 'next/link';
import Section2 from '../home1/Section2';

export default function Section1() {
    return (
        <>
          <section className="section-box">
              <div className="banner-hero hero-5">
                  <div className="banner-image-main">
                      <div className="img-bg" />
                      <div className="blur-bg blur-move" />
                  </div>
                  <div className="banner-inner-top">
                      <div className="container">
                          <div className="box-banner-left">
                              <Link className="btn btn-brand-5-new" href="#">
                                <span>New</span>AI
                                analytics 3.0
                                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                                    <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="true" />
                                </svg>
                              </Link>
                              <h1 className="display-2 mb-30 mt-25 neutral-0">Let's bring your vision to reality</h1>
                              <p className="text-lg neutral-500 mb-55">
                                Your idea deserves an exceptional realization. We create more than just apps and websites; we craft thoughtful digital products that reflect your brand’s unique identity, set you apart from the competition, and drive your bottom line.
                                <br />
                                <br />
                                From the initial concept to the final release, we’re with you every step of the way, ensuring a result that exceeds your expectations
                              </p>
                              <div className="d-flex mb-60"><Link className="hover-up mr-5" href="#"><img src="/assets/imgs/page/homepage1/googleplay.png" alt="Nivia" /></Link><Link className="hover-up" href="#"><img src="/assets/imgs/page/homepage1/appstore.png" alt="Nivia" /></Link></div>
                          </div>
                      </div>
                  </div>
                  <div className="banner-inner-bottom">
                      <div className="container">
                          <div className="box-joined">
                              <div className="box-authors"><span className="item-author"><img src="/assets/imgs/page/homepage1/author.png" alt="Nivia" /></span><span className="item-author"><img src="/assets/imgs/page/homepage1/author2.png" alt="Nivia" /></span><span className="item-author"><img src="/assets/imgs/page/homepage1/author3.png" alt="Nivia" /></span><span className="item-author"><span className="text-num-author text-md-bold color-brand-2">+2k</span></span></div><span className="text-lg d-inline-block">Join thousands of users in using<br className="d-none d-md-block" />the Nivia platform!</span>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        </>
    )
}
