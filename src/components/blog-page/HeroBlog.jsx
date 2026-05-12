import React, { useMemo } from "react";
import "./HeroBlog.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/rightarrow.svg";
import Lottie from "lottie-react";
import aiConversationAnimation from "../../assets/ai-conversation.json";
import { BLOG_VIDEO_POOL } from "../blog/blogPostsData";

const HeroBlog = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });
  const featureRowRef = useScrollAnimation({ threshold: 0.45 });

  const heroVideo = useMemo(() => {
    const index = Math.floor(Math.random() * BLOG_VIDEO_POOL.length);
    return { index, src: BLOG_VIDEO_POOL[index] };
  }, []);

  return (
    <section className="heroBlog" ref={sectionRef}>
      <div className="heroBlog__container">
        <div className="heroBlog__banner heroBlog__introRow">
          <div className="heroBlog__intro">
            <h2 className="heroBlog__introTitle">Ideas that move business forward</h2>
            <p className="heroBlog__introDesc">
              In-depth articles and expert analysis on AI, automation, and technology
              strategies shaping the future of business.
            </p>
          </div>
          <div className="heroBlog__lottieWrap" aria-hidden="true">
            <Lottie
              className="heroBlog__lottie heroBlog__lottie--top"
              animationData={aiConversationAnimation}
              loop
              autoplay
            />
          </div>
        </div>

        <div className="heroBlog__banner heroBlog__featureRow" ref={featureRowRef}>
          <video
            key={`hero-blog-${heroVideo.index}`}
            className="heroBlog__featureVideo"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={heroVideo.src} type="video/mp4" />
          </video>
          <div className="heroBlog__featureOverlay" aria-hidden="true" />
          <div className="heroBlog__spacer" aria-hidden="true" />
          <article className="heroBlog__featureCard heroBlog__featureCard--onVideo">
            <span className="heroBlog__badge heroBlog__featureKicker">Our Feature Article</span>

            <Link className="heroBlog__titleLink heroBlog__featureHeading" to="/blog-detail/1">
              <h3 className="heroBlog__title">
                How AI Chatbots are influencing the Customer Support of SaaS platforms
              </h3>
            </Link>

            <p className="heroBlog__desc heroBlog__featureDesc">
              NovaTech&apos;s 14 person support team was overwhelmed. With tickets doubling every quarter and
              CSAT declining, they needed a smarter approach - not more headcount.
            </p>

            <Link to="/blog-detail/1" className="heroBlog__readLink heroBlog__featureCta">
              <span className="heroBlog__readText">Read Full Article</span>
              <span className="heroBlog__readIcon">
                <img src={arrowIcon} alt="" aria-hidden="true" />
              </span>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HeroBlog;