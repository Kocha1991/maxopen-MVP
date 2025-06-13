'use client';
import { useModal } from '@/components/customHooks/useModal';

export default function Banner({ banner, btnText, bannersData }) {
  const { openModal } = useModal();
  

  return (
    <section className="section-box maxOpen-banner">
      <div className="blur-bg blur-move" />
      <div className="container">
        <div className='maxOpen-banner__wrapper'>
          <div className="maxOpen-banner__left">
            <h1 className="display-2 mb-30 mt-25 neutral-0">{bannersData["home-title"]}</h1>
            <p className="text-lg neutral-500 mb-40">{banner["home-descr"]}</p>
            <div className="d-flex mb-60">
              <button
                className="btn banner-btn hover-up mr-5"
                onClick={() => openModal('calendar')}
              >
              <span>
                <img src="/assets/imgs/template/icons/G.svg" alt="maxOpen" />
                {btnText}
              </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
