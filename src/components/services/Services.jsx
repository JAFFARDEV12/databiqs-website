import './Services.css';

import Header from '../home/Header';
import Footer from '../home/Footer';
import caseStudyImage from '../../assets/case-study.svg';
import MeetingBannerSection from '../home/MeetingBannerSection';
import CoreCapabilities from './CoreCapabilities';
const Services = () => {
    return (
        <div className="services-page case-study-page">
           
    
            <section className="case-study-page-header-section"> 
            <Header/>
            <div className='case-study-page-container'>
            <div className="case-study-page-hero">
                <div className="case-study-page-hero-content">

                    <h1 className="case-study-page-title">AI-Powered Solutions to Transform Your Business</h1>

                    <p className="case-study-page-intro" lang="en">
                        From strategy to implementation, we help you unlock the full potential of artificial intelligence to drive unprecedented growth, efficiency, and market leadership.
                    </p>
                </div>

                <img src={caseStudyImage} alt="Services" className="case-study-page-hero-visual" />
            </div>
            </div>

            </section>
            <div className="case-study-page-container">
              <CoreCapabilities/>
              <MeetingBannerSection />
            </div>

            <Footer />

        </div>

    );
};

export default Services;
