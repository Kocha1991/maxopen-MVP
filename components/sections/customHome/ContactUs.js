import React from "react";

const ContactUs = () => {
  return (
    <section className="section-box box-get-touch-section box-get-touch-section--maxOpen">
        <div className="container">
            <div className="row align-items-start">
                <div className="col-lg-6 ">
                    <div className="box-image-get-touch"> 
                      <h2 className='box-image-get-touch__title'>
                        Ready to cooperate?
                      </h2>
                      <h3 className='box-image-get-touch__descr'>
                        We are always ready to help! Contact us and we will be happy to discuss your ideas and project requirements.
                      </h3>
                    </div>
                    <p className='box-image-get-touch__time'>Hours: 8:00 - 17:00, Mon - Sat </p>
                </div>
                <div className="col-lg-6">
                  <div className='maxOpen-bg-text'>
                    Send Message
                  </div>
                  <h2 className=" mt-20">Get in Touch</h2>
                  <p className="text-md neutral-700">Contact us below and we will get back to you shortly.</p>
                  <div className="block-form-contact mt-20">
                      <form action="#">
                          <div className="form-group">
                              <label htmlFor="fullname">
                                  Your Name *</label>
                              <input className="form-control" type="text" placeholder="Type your name" />
                          </div>
                          <div className="form-group">
                              <label htmlFor="fullname">
                                  Your Email *</label>
                              <input className="form-control" type="text" placeholder="Type your email" />
                          </div>
                          <div className="form-group">
                              <label htmlFor="fullname">
                                  Message *</label>
                              <textarea className="form-control" rows={3} placeholder="How can we help you?" />
                          </div>
                          <div className="form-group">
                            <button className="btn btn-brand-4-medium hover-up" type="submit">Send Message
                                <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                                </svg>
                            </button>
                          </div>
                      </form>
                  </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ContactUs;
