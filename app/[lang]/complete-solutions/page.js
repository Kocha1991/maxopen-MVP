import { SolutionCard } from '@/components/elements/SolutionCard';
import { SolutionCard2 } from '@/components/elements/SolutionCard2';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { ModalProvider } from '@/components/customHooks/useModal';

export default function CompleteSolutions() {
  return (
    <ModalProvider>
      <CompleteSolutionsContent />
    </ModalProvider>
  );
}

function CompleteSolutionsContent() {
  return (
    <div className='complete-solutions'>
      <Layout useCustomHeader={true} footerStyle={'customFooter'} logoWhite>
        <div className='complete-solutions__banner'>
          <div className="container">
            <div className="complete-solutions__wrapper">
              <h2 className='display-2 mb-30 mt-25 neutral-0 complete-solutions__title'>
                Services to Bring Your Vision to Life
              </h2>
              <h3 className='text-lg neutral-500 mb-55 complete-solutions__descr'>
                Tired of endless back-and-forth just to estimate your project? We’ve streamlined the process with ready-made packages tailored for your needs. Skip the hassle – explore, choose, and watch your idea take off!
              </h3>
              <Link className="btn banner-btn hover-up mr-5" href="https://calendly.com/maxopenstudio" >
                <span>
                  <img src="/assets/imgs/template/icons/G.svg" alt="maxOpen" />
                  Book a meeting
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="complete-solutions__items">
          <div className="container">
            <SolutionCard 
  
            />
            <SolutionCard2 />
          </div>
        </div>
      <div className='add-top-footer'>
        <div className="container">
          <div className='add-top-footer__wrapper'>
            <div className='add-top-footer__text-block'>
              <div className="solution-card__title text-wite">
                Need help or have additional questions?
              </div>
              <div className='solution-card__descr'>
                If you want to know more or have any questions about our work, we will be happy to help you! Book a call and we will discuss everything in detail.
              </div>
              <a
                className="btn btn-brand-4-medium hover-up"
                href="https://calendly.com/maxopenstudio" 
              >
                <span>
                  Book a call
                  <svg
                    width="11"
                    height="12"
                    viewBox="0 0 11 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_16_833)">
                      <path
                        d="M9.01605 3.72762L1.45505 11.2886L0.212891 10.0465L7.77301 2.48546H1.10981V0.728516H10.773V10.3917H9.01605V3.72762Z"
                        fill="#191919"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_16_833">
                        <rect
                          width="11"
                          height="11"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </a>
            </div>
            <img src="/assets/imgs/template/top-footer-img.png" alt="image" />
          </div>
        </div>
      </div>
      </Layout>
    </div>
  )
}