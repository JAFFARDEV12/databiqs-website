import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../home/Header";
import Footer from "../home/Footer";
import mainImg from "../../assets/main.png";
import related1 from "../../assets/1.png";
import related2 from "../../assets/2.png";
import arrowIcon from "../../assets/rightarrow.svg";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const relatedTitleRef = useScrollAnimation({ threshold: 0.2 });
  const card1Ref = useScrollAnimation({ threshold: 0.2 });
  const card2Ref = useScrollAnimation({ threshold: 0.2 });

  // Blog data - hardcoded content matching the design
  const blogPosts = {
    '1': {
      id: 1,
      title: 'HOW AI CHATBOTS ARE REDEFINING ENTERPRISE CUSTOMER SUPPORT',
      date: 'September 04, 2025',
      readTime: '12 Minutes',
      image: mainImg,
      relatedBlogs: [
        {
          id: 2,
          image: related1,
          title: 'Automating Business Workflows With N8n: A Smarter Way To Scale',
          desc: 'Explore How Intelligent Chatbots Are Revolutionizing Customer Support...',
          date: 'September 04, 2025',
          readTime: '12 Minutes'
        },
        {
          id: 1,
          image: related2,
          title: 'How AI Chatbots Are Redefining Enterprise Customer Support In 2025',
          desc: 'From 24/7 Availability To Intelligent Routing discover How Conversational AI...',
          date: 'September 04, 2025',
          readTime: '12 Minutes'
        }
      ]
    },
    '2': {
      id: 2,
      title: 'AUTOMATING BUSINESS WORKFLOWS WITH N8N: A SMARTER WAY TO SCALE',
      date: 'September 04, 2025',
      readTime: '12 Minutes',
      image: mainImg,
      relatedBlogs: [
        {
          id: 1,
          image: related1,
          title: 'How AI Chatbots Are Redefining Enterprise Customer Support',
          desc: 'Explore How Intelligent Chatbots Are Revolutionizing Customer Support...',
          date: 'September 04, 2025',
          readTime: '12 Minutes'
        },
        {
          id: 3,
          image: related2,
          title: 'Transforming Customer Engagement With AI Chatbots',
          desc: 'From 24/7 Availability To Intelligent Routing discover How Conversational AI...',
          date: 'September 04, 2025',
          readTime: '12 Minutes'
        }
      ]
    },
    '3': {
      id: 3,
      title: 'TRANSFORMING CUSTOMER ENGAGEMENT WITH AI CHATBOTS',
      date: 'September 04, 2025',
      readTime: '12 Minutes',
      image: mainImg,
      relatedBlogs: [
        {
          id: 1,
          image: related1,
          title: 'How AI Chatbots Are Redefining Enterprise Customer Support',
          desc: 'Explore How Intelligent Chatbots Are Revolutionizing Customer Support...',
          date: 'September 04, 2025',
          readTime: '12 Minutes'
        },
        {
          id: 2,
          image: related2,
          title: 'Automating Business Workflows With N8n: A Smarter Way To Scale',
          desc: 'From 24/7 Availability To Intelligent Routing discover How Conversational AI...',
          date: 'September 04, 2025',
          readTime: '12 Minutes'
        }
      ]
    }
  };

  const blog = blogPosts[id] || blogPosts['1'];

  return (
    <>
      <Header />

      <main className="bdp">
        <div className="bdp__container">
          {/* Meta row (1280 x 70, top spacing 100) */}
          <div className="bdp__metaWrap">
            <div className="bdp__meta">
              <span>{blog.date}</span>
              <span className="bdp__dot">•</span>
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Title (30px below meta row) */}
          <h1 className="bdp__title">
            {blog.title}
          </h1>

          {/* Main Image (1200 x 320) */}
          <div className="bdp__hero">
            <img className="bdp__heroImg" src={blog.image} alt="Blog main" />
          </div>

          {/* Content */}
          <article className="bdp__content">
            <p>
              The phone rings at 3 AM. A customer in Tokyo needs urgent help resolving a payment issue.
              Another in London has a billing question that requires immediate clarification.
              Simultaneously, someone in New York is trying to track a delayed shipment. Your support team
              is asleep. Your customers are frustrated, waiting in digital queues. Your business is
              hemorrhaging potential revenue with every unanswered query.
            </p>

            <p>
              This was the stark reality of enterprise customer support just five years ago—a constant,
              exhausting battle against time zones, staffing limitations, and the seemingly impossible
              demand of being everywhere at once, for everyone at once. Today, that reality is
              transforming. Not gradually. Dramatically. AI chatbots have evolved from experimental
              novelties into business necessities, fundamentally reshaping how enterprises approach
              customer support. But this transformation isn&apos;t simply about automation for
              automation&apos;s sake. It&apos;s about reimagining what customer service can become when
              intelligent technology and human expertise work together in perfect harmony.
            </p>

            <h2>Cost Efficiency at Scale</h2>
            <p>
              <span className="bdp__label">Traditional support:</span> Each additional 1,000 customers
              typically requires 2-3 additional full-time support agents at $40,000-$60,000 annual cost
              each.
            </p>
            <p>
              <span className="bdp__label">AI-powered support:</span> AI chatbots handle 1,000+
              simultaneous conversations with zero incremental cost per interaction.
            </p>
            <p>
              <span className="bdp__label">Real example:</span> An e-commerce enterprise with 50,000
              daily customer interactions reduced support costs by $2.4 million annually while
              simultaneously improving response quality and customer satisfaction.
            </p>

            <h2>True 24/7 Global Coverage</h2>
            <p>
              <span className="bdp__label">Traditional support:</span> Operating 24/7 support requires
              three full shifts across time zones, complex scheduling, and 3-4x staffing overhead.
            </p>
            <p>
              <span className="bdp__label">AI-powered support:</span> Always available, never tired,
              instantly scaling to handle traffic spikes during product launches or system issues.
            </p>
            <p>
              <span className="bdp__label">Real example:</span> A global financial services company
              eliminated their nightshift support teams (saving $800K annually) while paradoxically
              improving overnight response quality and resolution rates.
            </p>

            <h2>Consistency and Accuracy</h2>
            <p>
              <span className="bdp__label">Traditional support:</span> Quality varies based on agent
              experience, training recency, mood, and fatigue. Errors occur. Information becomes outdated.
            </p>
            <p>
              <span className="bdp__label">AI-powered support:</span> Every customer receives identical,
              accurate information based on the latest product documentation, policy updates, and
              knowledge base content—updated centrally in real-time.
            </p>
            <p>
              <span className="bdp__label">Real example:</span> A healthcare technology company reduced
              incorrect information incidents by 87% after implementing AI chatbots with integrated,
              version-controlled knowledge management.
            </p>

            <h2>Beyond Basic Automation: Advanced Capabilities</h2>
            <p>
              Modern enterprise AI chatbots go far beyond answering simple FAQs. Today&apos;s systems
              deliver sophisticated functionality that was impossible just a few years ago:
            </p>

            <h3>Predictive Support</h3>
            <p>
              AI systems can identify frustrated customers before they explicitly complain, analyzing
              conversation tone, response patterns, and behavioral signals to proactively offer assistance
              or escalate to specialized agents.
            </p>

            <blockquote className="bdp__quote">
              A customer who has visited your pricing page 12 times but hasn&apos;t made a purchase might
              receive a proactive chat:{" "}
              <span className="bdp__quoteText">
                &quot;Hi! I noticed you&apos;re exploring our Enterprise plan. I&apos;m here to answer any
                questions about pricing, implementation, or custom features.&quot;
              </span>
            </blockquote>
          </article>

          {/* ===================== RELATED BLOGS ===================== */}
          <section className="bdp__related">
            <h2 ref={relatedTitleRef} className="bdp__relatedTitle scroll-reveal">
              RELATED BLOGS
            </h2>

            <div className="bdp__relatedRow">
              {/* Card 1 */}
              <article ref={card1Ref} className="bdp__relatedCard scroll-reveal">
                <div className="bdp__cardImgWrap">
                  <img className="bdp__cardImg" src={blog.relatedBlogs[0].image} alt={blog.relatedBlogs[0].title} />
                </div>

                <div className="bdp__cardBody">
                  <h3 className="bdp__cardTitle">
                    {blog.relatedBlogs[0].title}
                  </h3>

                  <p className="bdp__cardDesc">
                    {blog.relatedBlogs[0].desc}
                  </p>

                  <div className="bdp__cardMeta">
                    <span>{blog.relatedBlogs[0].date}</span>
                    <span className="bdp__dot">•</span>
                    <span>{blog.relatedBlogs[0].readTime}</span>
                  </div>

                  <div className="bdp__cardBottom">
                    <Link to={`/blog-detail/${blog.relatedBlogs[0].id}`} className="bdp__readLink">
                      <span className="bdp__readLinkText">Read Full Blog</span>
                      <span className="bdp__readLinkArrow">
                        <img src={arrowIcon} alt="Arrow" />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>

              {/* Card 2 */}
              <article ref={card2Ref} className="bdp__relatedCard scroll-reveal">
                <div className="bdp__cardImgWrap">
                  <img className="bdp__cardImg" src={blog.relatedBlogs[1].image} alt={blog.relatedBlogs[1].title} />
                </div>

                <div className="bdp__cardBody">
                  <h3 className="bdp__cardTitle">
                    {blog.relatedBlogs[1].title}
                  </h3>

                  <p className="bdp__cardDesc">
                    {blog.relatedBlogs[1].desc}
                  </p>

                  <div className="bdp__cardMeta">
                    <span>{blog.relatedBlogs[1].date}</span>
                    <span className="bdp__dot">•</span>
                    <span>{blog.relatedBlogs[1].readTime}</span>
                  </div>

                  <div className="bdp__cardBottom">
                    <Link to={`/blog-detail/${blog.relatedBlogs[1].id}`} className="bdp__readLink">
                      <span className="bdp__readLinkText">Read Full Blog</span>
                      <span className="bdp__readLinkArrow">
                        <img src={arrowIcon} alt="Arrow" />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </section>
          {/* ========================================================== */}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogDetail;
