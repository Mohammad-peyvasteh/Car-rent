import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/Ul/CommonSection';
import AboutSection from '../components/Ul/AboutSection';
import { Container, Row, Col } from "reactstrap";
import BecomeDriveSection from '../components/Ul/BecomeDriveSection';
import Imgdrive from '../assets/all-images/drive.jpg'
import CarMembers from '../components/Ul/CarMembers';
import '../styles/about.css'

const About = () => {
    return (
    <Helmet title='About'>
        <CommonSection title='About Us'/>
        <AboutSection aboutClass="aboutPage" />

        <section className="about__page-section">
            <Container>
                <Row>
                <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={Imgdrive} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <p className="section__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+09217509248</h4>
                  </div>
                </div>
              </div>
            </Col>
                </Row>
            </Container>
        </section>
        <BecomeDriveSection/>

        <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5 text-center'>
                    <h6 className="section__subtitle">
                        Experts
                    </h6>
                    <h2 className="section__title">
                        Our Members
                    </h2>
                </Col>
                <CarMembers/>
            </Row>
        </Container>
        </section>
    </Helmet>
    )
};
 
export default About;