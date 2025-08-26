import React from "react";

const Calendar = () => {
  return (
    <div className='calendar'> 
      <div className='calendar__main-blok'>
        <div className='calendar__left-blok'>
          <div className='calendar__avatar-blok'>
            <img src="/assets/imgs/template/ava.jpg" alt="" className='calendar__avatar'/>
            <h3>Meet with our founder - Name Surname</h3>
          </div>
        </div>
        <div className='calendar__right-blok'>

        </div>
      </div>
      <div className="calendar-page__footer">
        <div className="calendar-page__text">
          <h2 className="calendar-page__footer-title">
            Haven’t found the best time?
          </h2>
          <h3 className="calendar-page__footer-descr">
            Fell free to use any alternative option below
          </h3>
        </div>
        <div className="calendar-page__contacts">
          <div className="calendar-page__contact-item">
            <img src="/assets/imgs/template/icons/phone.png" alt="icon" width="20" height="20" />
            <span>+325 89 021835</span>
          </div>
          <div className="calendar-page__contact-item">
            <img src="/assets/imgs/template/icons/phone.png" alt="icon" width="20" height="20" />
            <span>+325 89 021835</span>
          </div>
          <div className="calendar-page__contact-item">
            <img src="/assets/imgs/template/icons/maile.png" alt="icon" width="20" height="20" />
            <span>Some@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
