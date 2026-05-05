import React from "react";
import "./BlogNewsletterBanner.css";
import arrowIcon from "../../assets/rightarrow.svg";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const BlogNewsletterBanner = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="blogNewsletter" ref={sectionRef} aria-label="Newsletter signup">
      <div className="blogNewsletter__wrap">
        <div className="blogNewsletter__card">
          <div className="blogNewsletter__decor blogNewsletter__decor--bl" aria-hidden />
          <div className="blogNewsletter__decor blogNewsletter__decor--tr" aria-hidden />
          <div className="blogNewsletter__inner">
            <h2 className="blogNewsletter__title">Never Miss an insight</h2>
            <p className="blogNewsletter__sub">
              Join 8,000+ leaders who get our best thinking on{" "}
              <span className="blogNewsletter__keepCase">AI</span>
              <br />
              and automation — straight to their inbox, twice a
              <br />
              month.
            </p>
            <form className="blogNewsletter__form" onSubmit={handleSubmit} noValidate>
              <label className="blogNewsletter__label" htmlFor="blog-newsletter-email">
                <span className="blogNewsletter__visuallyHidden">Email address</span>
                <input
                  id="blog-newsletter-email"
                  className="blogNewsletter__input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                />
              </label>
              <button type="submit" className="blogNewsletter__submit">
                <span className="blogNewsletter__submitText">Subscribe, It&apos;s Free</span>
                <span className="blogNewsletter__submitArrow" aria-hidden>
                  <img src={arrowIcon} alt="" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletterBanner;
