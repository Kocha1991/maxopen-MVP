import React from "react";
import { BlogTitle } from '@/components/blog/BlogTitle';
import InfoBlock2 from '@/components/elements/InfoBlock2';
import BoxNewsletter from '@/components/elements/BoxNewsletter';

const Process = () => {
  return (
    <section className="section-box wow animate__animated animate__fadeIn box-how-it-work">
        <div className="container">
          <BlogTitle 
             textOnBg='How We Works'
             title='From idea to finished product: how we work on your project'
             descr='We follow a consistent approach to the implementation of each project, which guarantees high quality execution and transparency at all stages of work - from planning to final implementation.'
          />
          <div className="row">
            <InfoBlock2 
              number='1'
              title='Signup for Service'
              descr='This process is straightforward and swift, prioritizing your convenience and experience. It enables you to access tailored solutions and special offers swiftly, ensuring you can quickly begin enjoying our services.'
            />
            <InfoBlock2 
              number='2'
              title='Design'
              descr='Once the requirements are collected, we design the system’s architecture, specifying components, interfaces, and interactions. A detailed design is created, including both technical and functional specifications for implementation.'
            />
            <InfoBlock2 
              number='3'
              title='Implementation or coding'
              descr='At this stage, developers write the code based on the design specifications, integrate the system’s components, and ensure its functionality. Ongoing monitoring and quality control are essential to ensure the code meets the required standards.'
            />
            <InfoBlock2 
              number='4'
              title='Testing'
              descr='Once coding is complete, the system undergoes testing to identify and fix any errors, ensuring all features function as intended. This phase includes functional, integration, and security testing to guarantee system quality.'
            />
            <InfoBlock2 
              number='5'
              title='Deployment'
              descr='The system is deployed in a live environment at this stage, where final configurations and testing are performed. Once deployment is complete, the system is ready for use by end users.'
            />
            <InfoBlock2 
              number='6'
              title='Maintenance'
              descr='After launch, the system enters a maintenance phase, involving regular updates, bug fixes, and adjustments for environmental changes. Ongoing maintenance keeps the system relevant and secure throughout its life cycle.'
            />
          </div>
        </div>
        <div className="container mt-25">
            <BoxNewsletter 
              title="Let's discuss your project!"
              descr="Enter your email, and we'll get in touch with you as soon as possible to discuss your ideas in detail and help bring your project to life"
              buttonText="Get in Touch"

            />
        </div>
    </section>
  );
};

export default Process;
