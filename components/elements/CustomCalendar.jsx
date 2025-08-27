import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CustomCalendar = ({ isOpen, onClose }) => {
  const [date, setDate] = useState(new Date());
  const [isOpenForm, setIsOpenForm] = useState(false);

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <button className="modal-content__close" onClick={onClose}>
        <img src="/assets/imgs/template/icons/close-green.png" alt="close" />
      </button>

      <div className='calendar'>
        {!isOpenForm && (
          <div className='calendar__main-blok'>
            <div className='calendar__left-blok'>
              <div className='calendar__avatar-blok'>
                <img src="/assets/imgs/template/ava.jpg" alt="" className='calendar__avatar'/>
                <h3 className='calendar__avatar-blok__text'>Meet with our founder - Name Surname</h3>
              </div>
              <Calendar
                onChange={setDate}
                value={date}
                prev2Label={null}
                next2Label={null}
                tileDisabled={({ date }) => {
                  const day = date.getDay();
                  return day === 0 || day === 6; 
                }}
              />
            </div>
            <div className='calendar__right-blok'>
              <div className='calendar__time-need'>
                <h4 className='calendar__right-blok__text mb-10'>How much time do you need?</h4>
                <div className='calendar__input-wrapper'>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="30"
                    min={30}
                    max={120}
                    step={30}
                  />
                </div>
              </div>
              <div className='calendar__data'>
                <h4 className='calendar__right-blok__text'>What is the best time for you?</h4>
                <h4 className='calendar__right-blok__text--data'>
                  The hour of the show for <span>{formatDate(date)}</span>
                </h4>
              </div>
              <div className='calendar__time-blok'>
                <h3 className='calendar__right-blok__text--data mb-15'>
                  UTC +02:00 Eastern European Time
                </h3>
                <div className='calendar__time'>
                  {["15:00","15:30","15:40","15:50","16:00","15:10","15:20"].map(time => (
                    <button
                      key={time}
                      className='calendar__time-btn banner-btn'
                      onClick={() => setIsOpenForm(true)}
                    >
                      <span>{time}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {isOpenForm && (
          <div className='calendar__form-top'>
            <div className='calendar__form--header'>
              <h2 className='calendar__right-blok__text'>
                Your information
              </h2>
              <div className='calendar__form--header__data'>
                <h3 className='calendar__right-blok__text--data'>
                  Thursday, November 21, 2024 p.m. 7:45 p.m.
                </h3>
                <button 
                  className='btn'
                  onClick={() => setIsOpenForm(false)}
                >
                  Edit
                </button>
              </div>
              <img src="/assets/imgs/template/Frame 1261154779.png" alt="google-meet" />
            </div>
            <div className='inputs-group'>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  className={`form-control`}
                  type="text"
                  placeholder="Type your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastname">Last Name *</label>
                <input
                  className={`form-control`}
                  type="text"
                  placeholder="Type your last name"
                  value=""
                  onChange={(e) => setLastname(e.target.value)}
                  id="lastname"
                />
              </div>
            </div>
            <div className="form-group">
                <label htmlFor="email">Your email address *</label>
                <input
                  className={`form-control`}
                  type="email"
                  placeholder="Type your email"
                  value={email}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                />
              </div>
          </div>
        )}

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
    </div>
  );
};

export default CustomCalendar;
