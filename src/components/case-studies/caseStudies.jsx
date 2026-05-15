import HeroSection from '../home/HeroSection';
import NumbersStatsSection from '../home/NumbersStatsSection';
import CaseStudiesSection from '../home/CaseStudiesSection';
import TestimonialsSection from '../home/TestimonialsSection';
import MeetingBannerSection from '../home/MeetingBannerSection';
import Footer from '../home/Footer';
import LottieFromCdn from '../LottieFromCdn';
import './caseStudiesListingLayout.css';
import {
  CS_LIST_CARDS,
  CS_LIST_FILTERS,
  CS_LIST_STATS,
} from './caseStudiesListingData';

const PAGE_SIZE = 4;

const proofHeadline = (
  <>
    Proof in the <span className="headline-purple">numbers</span>
  </>
);

const proofDescription =
  'Explore how teams across industries use Databiqs to turn complex data and workflows into reliable, human-centered AI outcomes.';

const CaseStudies = () => (
  <div className="case-studies-page case-studies-page--listing">
    <div className="cs-listing-stack">
      <HeroSection
        variant="case-studies"
        caseStudiesHeadline={
          <>
            Real results for{' '}
            <span className="headline-purple">real businesses</span>
          </>
        }
        caseStudiesDescription="From predictive operations to customer-facing AI, we ship systems that hold up in production - measurable latency, clear ROI, and teams that actually adopt them."
        caseStudiesVisual={
          <LottieFromCdn
            path="assets/gif/case-study.json"
            className="hero-lottie--case-studies"
            loop
            autoplay
          />
        }
      />

      <NumbersStatsSection stats={CS_LIST_STATS} />

      <CaseStudiesSection
        sectionId="case-studies-proof"
        containerSurface="white"
        headline={proofHeadline}
        description={proofDescription}
        cases={CS_LIST_CARDS}
        filterOptions={CS_LIST_FILTERS}
        pageSize={PAGE_SIZE}
        showViewAllButton={false}
      />

      <TestimonialsSection sectionId="client-testimonials" />

      <MeetingBannerSection
        id="about-contact-cta"
        className="au-meeting-banner-section"
        title="See how this works for your business"
        subtitle="Schedule a free 30-minute strategy call with one of our senior architects."
        ctaText="Book a Consultation"
        ctaTo="/book-consultation"
        showBadge={false}
      />
    </div>

    <Footer />
  </div>
);

export default CaseStudies;
