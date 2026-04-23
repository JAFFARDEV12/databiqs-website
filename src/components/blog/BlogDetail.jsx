
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
   <div className="decorative-ellipse-1"></div>
    <div className="top-gradient-wrapper-blog">
  <Header />

  <main className="bdp">
    <div className="bdp__container">

      <div className="bdp__metaWrap">
        <div className="bdp__meta">
          <span>{blog.date}</span>
          <span className="bdp__dot"></span>
          <span>{blog.readTime}</span>
        </div>
      </div>

      <h1 className="bdp__title">{blog.title}</h1>

      {/*  HERO IMAGE IS STILL INSIDE GRADIENT */}
      <div className="bdp__hero">
        <img className="bdp__heroImg" src={blog.image} alt="Blog main" />
      </div>

    </div>
  </main>
</div>

      <main className="bdp bdp--contents">
         
        <div className="bdp__container">
          {/* Content */}
      

<article className="bdp__article">

  <span className="bdp__badge">Enterprise AI</span>

  <h1 className="bdp__articleTitle">
    How AI Chatbots Are Transforming Enterprise Customer Support
  </h1>

  <div className="bdp__leadWrap">
    <div className="bdp__leadBar"></div>

    <p className="bdp__lead">
      From 3 AM unanswered calls to always-on intelligent service — the shift
      from automation novelty to business necessity is already here.
    </p>
  </div>

  <div className="bdp__articleMeta">
    <span>Customer Experience</span>
    <span className="purple"></span>
    <span>8 Min Read</span>
    <span className="purple"></span>
    <span>Enterprise</span>
  </div>

  <div className="bdp__copy">
    <p>
      The phone rings at 3 AM. A customer in Tokyo needs urgent help resolving a
      payment issue. Another in London has a billing question. Simultaneously,
      someone in New York is trying to track a delayed shipment. Your support
      team is asleep. Your customers are frustrated, waiting in digital queues.
    </p>

    <p>
      This was the stark reality of enterprise customer support just five years
      ago — a constant, exhausting battle against time zones, staffing
      limitations, and the seemingly impossible demand of being everywhere at
      once.
    </p>

    <p>
      Today, that reality is transforming. Not gradually. Dramatically. AI
      chatbots have evolved from experimental novelties into business
      necessities, fundamentally reshaping how enterprises approach customer
      support.
    </p>
  </div>

  <section className="bdp__miniSection">
    <h2>Cost Efficiency At Scale</h2>

    <div className="bdp__statGrid">
      <div className="bdp__statCard">
        <h3>Traditional</h3>
        <strong className="">2-3</strong>
      
        <p>New agents needed per 1,000 customers. At $40k–$60k each annually.</p>
      </div>

      <div className="bdp__statCard">
        <h3>AI Powered</h3>
        <strong className="">0</strong>
        <p>Incremental cost per interaction — 1,000+ simultaneous conversations</p>
      </div>

      <div className="bdp__statCard">
        <h3>Real-World Result</h3>
        <strong>$2.4M</strong>
        <p>Saved annually by one e-commerce enterprise with 50,000 daily interactions</p>
      </div>
    </div>
  </section>

  <section className="bdp__miniSection">
    <h2>True 24/7 Global Coverage</h2>

    <div className="bdp__compareGrid">
      <div className="bdp__compareCard">
        <h3>Traditional Support</h3>
        <p>
          Requires 3 full shifts across time zones, complex scheduling, 3–4x
          staffing overhead
        </p>
      </div>

      <div className="bdp__compareCard bdp__compareCard--accent">
        <h3>AI-Powered Support</h3>
        <p>
          Always available, never tired, instantly scales during traffic spikes
        </p>
      </div>
    </div>
  </section>
  <div className="bdp__leadWrap margin-top-custom ">
    <div className="bdp__leadBar"></div>

    <p className="bdp__lead">
    A global financial services company eliminated their entire nightshift support teams — saving $800K annually — while paradoxically improving overnight response quality and resolution rates.
    </p>
  </div>
 

<section className="bdp__miniSection">
  <h2>Consistency And Accuracy</h2>

  <div className="bdp__consistencyCopy">
    <p>
      Traditional support quality varies based on agent experience, training
      recency, mood, and fatigue. Errors occur. Information becomes outdated.
    </p>

    <p>
      With AI-powered support, every customer receives identical, accurate
      information based on the latest product documentation and policy updates
      — maintained centrally in real-time.
    </p>
  </div>
</section>

<section className="bdp__miniSection bdp__assistantSection">
  <h2>AI Assistant — Triggered By 12 Pricing Page Visits</h2>

  <div className="bdp__assistantBox">
    <p>
      Hi! I noticed you're exploring our Enterprise plan. I'm here to answer
      any questions about pricing, implementation, or custom features.
    </p>
  </div>
</section>
  {/*  arictle link */}
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
                    <span className="bdp__dot"></span>
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
                    <span className="bdp__dot"></span>
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

</article>

          {/* ===================== RELATED BLOGS ===================== */}
         
          {/* ========================================================== */}
        </div>
      </main>
     
      <Footer />
    </>
  );
};

export default BlogDetail;
