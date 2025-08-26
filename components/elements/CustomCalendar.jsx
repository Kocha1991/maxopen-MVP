import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Dropdown from "react-bootstrap/Dropdown";

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className='calendar'> 
      <div className='calendar__main-blok'>
        <div className='calendar__left-blok'>
          <div className='calendar__avatar-blok'>
            <img src="/assets/imgs/template/ava.jpg" alt="" className='calendar__avatar'/>
            <h3 className='calendar__avatar-blok__text'>Meet with our founder - Name Surname</h3>
          </div>
          <Calendar
            onChange={setDate}
            value={date}
            prev2Label={null} // прибирає "<<"
            next2Label={null} // прибирає ">>"
          />
        </div>
        <div className='calendar__right-blok'>
          <div className='calendar__time-need'>
            <h4>How much time do you need?</h4>
            <input
              type="number"
              className="form-control"
              placeholder="Вкажіть час у хвилинах"
              min={20}
              max={120}
              step={5}
            />
          </div>
          <div className='calendar__data'>
            <h4>What is the best time for you?</h4>
            <h4>The hour of the show for 21 November 2024</h4>
          </div>
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

export default CustomCalendar;
