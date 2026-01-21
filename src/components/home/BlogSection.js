import React from 'react';
import './BlogSection.css';
import blogImage1 from '../../assets/insights&innovationsection left image how ai chatbots...png';
import blogImage2 from '../../assets/insights & innovationrightabove image automating buiness....png';
import blogImage3 from '../../assets/insights&innovations bottom rihg timage transforming customer....png';

const BlogSection = () => {
  return (
    <section className="blog-section" id="insights">
      <div className="section-container">
        <div className="section-tag">Insights & Innovation</div>
        <h2 className="section-headline">THOUGHT LEADERSHIP & INSIGHTS</h2>
        <p className="section-description">
          Explore our latest articles, expert analysis, and insights on AI technology and innovation.
        </p>

        <div className="blog-grid">
          <div className="blog-card featured">
            <div className="blog-image">
              <img src={blogImage1} alt="How AI Chatbots Are Redefining Enterprise Customer Support" />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">How AI Chatbots Are Redefining Enterprise Customer Support</h3>
              <div className="blog-meta">
                <span className="blog-date">September 04, 2023</span>
                <span className="blog-read-time">12 Minutes</span>
              </div>
              <button className="blog-cta">
                Read Full Blog
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-image">
              <img src={blogImage2} alt="Automating Business Workflows With N8r" />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">Automating Business Workflows With N8r: A Smarter Way To Scale</h3>
              <div className="blog-meta">
                <span className="blog-date">August 15, 2023</span>
                <span className="blog-read-time">8 Minutes</span>
              </div>
              <button className="blog-cta">
                Read Full Blog
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-image">
              <img src={blogImage3} alt="Transforming Customer Engagement With AI Chatbots" />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">Transforming Customer Engagement With AI Chatbots</h3>
              <div className="blog-meta">
                <span className="blog-date">July 22, 2023</span>
                <span className="blog-read-time">10 Minutes</span>
              </div>
              <button className="blog-cta">
                Read Full Blog
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
