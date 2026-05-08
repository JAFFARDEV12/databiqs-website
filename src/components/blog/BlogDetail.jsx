
import { Link, useParams } from "react-router-dom";
import Footer from "../home/Footer";
import arrowIcon from "../../assets/rightarrow.svg";
import relatedStillCover from "../../assets/main.png";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { BLOG_POSTS, BLOG_POSTS_BY_ID } from "./blogPostsData";
import "../blog-page/FeaturedBlogCardsRow.css";
import "./BlogDetail.css";

const blogDetailPath = (cardId) => `/blog-detail/${cardId}`;

const isVideoAssetUrl = (src) => typeof src === "string" && src.toLowerCase().includes(".mp4");

/** Rank by category/tag match, then pick one MP4 card + one static-image card (always distinct). */
const getRelatedVideoAndStill = (current, posts) => {
  const others = posts.filter((p) => p.id !== current.id);
  const relevance = (p) =>
    (p.category === current.category ? 2 : 0) + (p.tag === current.tag ? 1 : 0);
  const ranked = [...others].sort((a, b) => relevance(b) - relevance(a) || a.id - b.id);

  const withVideo = ranked.filter((p) => isVideoAssetUrl(p.image));
  const withoutVideo = ranked.filter((p) => !isVideoAssetUrl(p.image));

  const videoPost = withVideo[0] || ranked[0];
  let stillPost =
    withoutVideo.find((p) => p.id !== videoPost.id) ||
    withoutVideo[0] ||
    ranked.find((p) => p.id !== videoPost.id);

  if (!stillPost || stillPost.id === videoPost.id) {
    stillPost = ranked.find((p) => p.id !== videoPost.id);
  }

  return [
    { post: videoPost, variant: "video" },
    { post: stillPost, variant: "still" },
  ];
};

const renderAccentVideoTitle = (title) => {
  const words = title.trim().split(/\s+/);
  if (words.length < 3) return title;
  const normalPart = words.slice(0, -2).join(" ");
  const accentPart = words.slice(-2).join(" ");
  return (
    <>
      {normalPart} <span className="featuredBlogCard__titleAccent">{accentPart}</span>
    </>
  );
};

const renderContentBlock = (line, idx) => {
  const trimmed = line.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith("## ")) {
    return null;
  }

  if (trimmed.startsWith("- ")) {
    return (
      <p key={`li-${idx}`} className="bdp-startpara">
        {trimmed.replace("- ", "• ")}
      </p>
    );
  }

  if (/^\d+\)/.test(trimmed) || /^\d+\./.test(trimmed)) {
    return (
      <p key={`num-${idx}`} className="bdp-startpara">
        {trimmed}
      </p>
    );
  }

  return <p key={`p-${idx}`}>{trimmed}</p>;
};

const BlogDetail = () => {
  const { id } = useParams();
  const relatedTitleRef = useScrollAnimation({ threshold: 0.2 });
  const card1Ref = useScrollAnimation({ threshold: 0.2 });
  const card2Ref = useScrollAnimation({ threshold: 0.2 });

  const blog = BLOG_POSTS_BY_ID[String(id)] || BLOG_POSTS_BY_ID["1"];
  const relatedPair = getRelatedVideoAndStill(blog, BLOG_POSTS);
  const contentLines = blog.content.split("\n");
  const contentNodes = contentLines.map((line, idx) => renderContentBlock(line, idx)).filter(Boolean);
  const isVideoCover = isVideoAssetUrl(blog.image);

  return (
    <>
   <div className="decorative-ellipse-1"></div>
    <div className="top-gradient-wrapper-blog">
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
      <div className={`bdp__hero${isVideoCover ? " bdp__hero--video" : ""}`}>
        {isVideoCover ? (
          <video
            className="bdp__heroImg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={blog.title}
          >
            <source src={blog.image} type="video/mp4" />
          </video>
        ) : (
          <img className="bdp__heroImg" src={blog.image} alt={blog.title} />
        )}
      </div>

    </div>
  </main>
</div>

      <main className="bdp bdp--contents">
         
        <div className="bdp__container">
          {/* Content */}
      

<article className="bdp__article">
  <span className="bdp__badge">{blog.tag}</span>
  <h1 className="bdp__articleTitle">{blog.title}</h1>
  <div className="bdp__leadWrap">
    <div className="bdp__leadBar"></div>
    <p className="bdp__lead">{blog.excerpt}</p>
  </div>
  <div className="bdp__articleMeta">
    <span>{blog.category}</span>
    <span className="purple"></span>
    <span>{blog.readTime}</span>
    <span className="purple"></span>
    <span>{blog.tag}</span>
  </div>
  <div className="bdp__copy">{contentNodes}</div>

    <section className="bdp__related">
            <h2 ref={relatedTitleRef} className="bdp__relatedTitle scroll-reveal">
              RELATED BLOGS
            </h2>

            <div className="featuredBlogRow__grid bdp__relatedFeaturedGrid">
              {relatedPair.map(({ post: card, variant }, idx) => (
                <article
                  key={`${variant}-${card.id}`}
                  ref={idx === 0 ? card1Ref : idx === 1 ? card2Ref : undefined}
                  className={`featuredBlogCard scroll-reveal${
                    variant === "video" ? " featuredBlogCard--video" : " featuredBlogCard--still"
                  }`}
                >
                  {variant === "video" && isVideoAssetUrl(card.image) && (
                    <>
                      <video
                        className="featuredBlogCard__videoBg"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        aria-hidden="true"
                      >
                        <source src={card.image} type="video/mp4" />
                      </video>
                      <div className="featuredBlogCard__videoOverlay" aria-hidden="true" />
                    </>
                  )}
                  {variant === "still" && (
                    <>
                      <img
                        className="featuredBlogCard__stillBg"
                        src={relatedStillCover}
                        alt=""
                        aria-hidden="true"
                      />
                      <div className="featuredBlogCard__stillOverlay" aria-hidden="true" />
                    </>
                  )}

                  <div className="featuredBlogCard__content">
                    <span className="featuredBlogCard__tag">{card.tag}</span>
                    <Link className="featuredBlogCard__titleLink" to={blogDetailPath(card.id)}>
                      <h3 className="featuredBlogCard__title">{renderAccentVideoTitle(card.title)}</h3>
                    </Link>
                    <p className="featuredBlogCard__desc">{card.excerpt}</p>

                    <Link to={blogDetailPath(card.id)} className="featuredBlogCard__link">
                      <span>Read Full Blog</span>
                      <span className="featuredBlogCard__icon">
                        <img src={arrowIcon} alt="" aria-hidden="true" />
                      </span>
                    </Link>

                    <div className="featuredBlogCard__meta">
                      <span>Databiqs Team</span>
                      <span className="featuredBlogCard__dot" />
                      <span>{card.date}</span>
                      <span className="featuredBlogCard__dot" />
                      <span>{card.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

</article>

        </div>
      </main>
     
      <Footer />
    </>
  );
};

export default BlogDetail;
