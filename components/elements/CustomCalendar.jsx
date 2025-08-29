import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CustomCalendar = ({ isOpen, onClose }) => {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [isOpenCalendar, setIsOpenCalendar] = useState(true)
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [finalScreen, setFinalScreen] = useState(false);
  const [footerCalendar, setFooterCalendar] = useState(true);

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const openCalendar = () => {
    setIsOpenCalendar(true);
    setIsOpenForm(false);
    setFinalScreen(false);
    setFooterCalendar(true);
  };

  const openFormCalendar = () => {
    setIsOpenCalendar(false);
    setIsOpenForm(true);
    setFinalScreen(false);
    setFooterCalendar(true);
  };

  const isOpenFinalScreen = () => {
    setIsOpenCalendar(false);
    setIsOpenForm(false);
    setFinalScreen(true);
    setFooterCalendar(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <button className="modal-content__close" onClick={onClose}>
        <img src="/assets/imgs/template/icons/close-green.png" alt="close" />
      </button>

      <div className='calendar'>
        {isOpenCalendar && (
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
                      onClick={() => openFormCalendar()}
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
          <div className='calendar__form'>
            <div className='calendar__form--header'>
              <h2 className='calendar__right-blok__text'>
                Your information
              </h2>
              <div className='calendar__form--header__data'>
                <h3 className='calendar__right-blok__text--data'>
                  {formatDate(date)} {selectedTime}
                </h3>
                <button 
                  className='btn'
                  onClick={() => openCalendar()}
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
                  value='name'
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
                value='email'
                id="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Share your idea, so our call will have more value</label>
              <textarea
                className="form-control"
                rows={2}
                placeholder=""
                style={{ resize: 'none' }}
                value='message'
                id="message"
              />
            </div>
            <div className='add-guests'>
              <h3 className='calendar__right-blok__text mb-10'>Add guests</h3>
              <div className="form-group">
                <label htmlFor="email">Invite to a meeting by: 0/10</label>
                <div className='add-guests__blok'>
                  <input
                    className={`form-control`}
                    type="email"
                    placeholder="Type your email"
                    value='email'
                    id="add-email"
                  />
                  <button className='btn btn-brand-4-medium'>Add</button>
                </div>
              </div>
            </div>
            <div className='calendar__form-top__btns'>
              <button 
                className="btn btn-info-card animation-btn-svg"
                onClick={() => openCalendar()}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g transform="rotate(180 11 11)">
                    <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="#191919"/>
                  </g>
                </svg>
                Back
            </button>
              <button 
                className='btn btn-brand-4-medium'
                onClick={() => isOpenFinalScreen()}
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {finalScreen && (
          <div className='calendar__final-screen'>
            <div className='calendar__final-screen__wrapper'>
              <img src="/assets/imgs/template/lo.png" alt="logo" />
              <div className='calendar__final-screen_text-blok'>
                <h2 className='calendar__final-screen_bold'>Thank you, Name!</h2>
                <h3 className='calendar__final-screen_normal'>We appreciate your interest in cooperation.</h3>
              </div>
              <div className='calendar__final-screen_text-blok'>
                <h2 className='calendar__final-screen_bold'>What's next?</h2>
                <h3 className='calendar__final-screen_normal'>
                  We will contact you shortly to confirm the details. If you have any questions, don't hesitate to contact us!
                </h3>
              </div>
              <div className='calendar__final-screen_text-blok'>
                <h2 className='calendar__final-screen_bold'>Date and time of the meeting:</h2>
                <h3 className='calendar__final-screen_normal'>
                  Enter date and time selected by user
                </h3>
              </div>
              <a
                href='/'
                className='btn btn-brand-4-medium'
              >
                Return to homepage
              </a>
            </div>
          </div>
        )}

        {footerCalendar && (
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
        )}
      </div>
    </div>
  );
};

export default CustomCalendar;
