import Link from 'next/link';
import LogoTicker2 from '@/components/elements/LogoTicker';

export default function Banner() {
    return (
        <>
          <section className="section-box maxOpen-banner">
              <div className="container">
                <div className='maxOpen-banner__wrapper'>
                  <div className="blur-bg blur-move" />
                  <div className="maxOpen-banner__left">
                      <h1 className="display-2 mb-30 mt-25 neutral-0">Let's bring your vision to reality</h1>
                      <p className="text-lg neutral-500 mb-55">
                        Your idea deserves an exceptional realization. We create more than just apps and websites; we craft thoughtful digital products that reflect your brand’s unique identity, set you apart from the competition, and drive your bottom line.
                        <br />
                        <br />
                        From the initial concept to the final release, we’re with you every step of the way, ensuring a result that exceeds your expectations
                      </p>
                      <div className="d-flex mb-60">
                        <Link className="btn banner-btn hover-up mr-5" href="#" >
                          <img src="/assets/imgs/template/icons/G.svg" alt="maxOpen" />
                          Book a meeting
                        </Link>
                      </div>
                  </div>
                  <div className="maxOpen-banner__right">
                    <div className="img-bg" />
                  </div>
                </div>
            </div>
          </section>
        </>
    )
}
