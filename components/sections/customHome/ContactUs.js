import React from "react";
import Link from 'next/link';

const ContactUs = () => {
  return (
    <section className="section-box box-get-touch-section box-get-touch-section--maxOpen">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="box-image-get-touch"> 
                      <div>
                        <h2>
                          Ready to cooperate?
                        </h2>
                        <h3>
                          We are always ready to help! Contact us and we will be happy to discuss your ideas and project requirements.
                        </h3>
                       
                      </div>
                      <p>Hours: 8:00 - 17:00, Mon - Sat </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <Link className="btn btn-brand-4-sm" href="#">
                      Contact Us
                    </Link>
                    <h2 className="mb-20 mt-20">Get in Touch</h2>
                    <p className="text-md neutral-700">Contact us below and we will get back to you shortly.</p>
                    <div className="block-form-contact mt-45">
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
                                <textarea className="form-control" rows={7} placeholder="How can we help you?" />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-rounded" type="submit">Send Message
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
