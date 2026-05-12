import React from 'react';
import Footer from '../home/Footer';
/* import TestimonialsSection from '../home/TestimonialsSection'; */
import HeroBlog from './HeroBlog';
import FeaturedBlogCardsRow from './FeaturedBlogCardsRow';
import BrowseByTopic from './BrowseByTopic';
import BlogNewsletterBanner from './BlogNewsletterBanner';
import './InsightsInnovation.css';

const InsightsInnovation = () => {
  return (
    <div className="insights-innovation-page">

        <div className="decorative-ellipse-1"></div>

     
       <div className="top-gradient-wrapper">
      <HeroBlog />

       </div>
      <BrowseByTopic />
      <FeaturedBlogCardsRow />
      <BlogNewsletterBanner />
      {/* <TestimonialsSection /> */}
      <Footer />
    </div>
  );
};

export default InsightsInnovation;
