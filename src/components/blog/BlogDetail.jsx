import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../home/Footer";
import arrowIcon from "../../assets/rightarrow.svg";
import relatedStillCover from "../../assets/main.png";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { BLOG_POSTS, BLOG_POSTS_BY_ID, pickBlogDetailHeroVideo } from "./blogPostsData";
import "../blog-page/FeaturedBlogCardsRow.css";
import "./BlogDetail.css";

const blogDetailPath = (cardId) => `/blog-detail/${cardId}`;

const isVideoAssetUrl = (src) => typeof src === "string" && src.toLowerCase().includes(".mp4");

const RELATED_COUNT = 2;

/**
 * Prefer up to two other posts from the same category; if fewer than two, fill from other categories.
 * Returns distinct posts (never the current article).
 */
const pickRelatedPosts = (current, posts) => {
  const others = posts.filter((p) => p.id !== current.id);
  const picked = [];
  const seen = new Set();

  const pushUnique = (list) => {
    for (const p of list) {
      if (picked.length >= RELATED_COUNT) return;
      if (seen.has(p.id)) continue;
      picked.push(p);
      seen.add(p.id);
    }
  };

  const sameCategory = others
    .filter((p) => p.category === current.category)
    .sort((a, b) => a.id - b.id);
  pushUnique(sameCategory);

  if (picked.length < RELATED_COUNT) {
    const rest = others
      .filter((p) => !seen.has(p.id))
      .sort((a, b) => {
        const ta = a.tag === current.tag ? 1 : 0;
        const tb = b.tag === current.tag ? 1 : 0;
        if (tb !== ta) return tb - ta;
        return a.id - b.id;
      });
    pushUnique(rest);
  }

  return picked.slice(0, RELATED_COUNT);
};

/** Build display rows: prefer one video-style card + one still-style when possible; always distinct posts. */
const buildRelatedDisplayItems = (current, posts) => {
  const picked = pickRelatedPosts(current, posts);
  if (picked.length === 0) return [];

  if (picked.length === 1) {
    const p = picked[0];
    return [{ post: p, variant: isVideoAssetUrl(p.image) ? "video" : "still" }];
  }

  const [a, b] = picked;
  const aVid = isVideoAssetUrl(a.image);
  const bVid = isVideoAssetUrl(b.image);

  if (aVid && !bVid) {
    return [
      { post: a, variant: "video" },
      { post: b, variant: "still" },
    ];
  }
  if (!aVid && bVid) {
    return [
      { post: b, variant: "video" },
      { post: a, variant: "still" },
    ];
  }
  if (aVid && bVid) {
    return [
      { post: a, variant: "video" },
      { post: b, variant: "still" },
    ];
  }
  return [
    { post: a, variant: "still" },
    { post: b, variant: "still" },
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
    const heading = trimmed.slice(3).trim();
    return (
      <h2 key={`h2-${idx}`} className="bdp__sectionHeading">
        {heading}
      </h2>
    );
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
  const relatedItems = buildRelatedDisplayItems(blog, BLOG_POSTS);
  const contentLines = blog.content.split("\n");
  const contentNodes = contentLines.map((line, idx) => renderContentBlock(line, idx)).filter(Boolean);
  const isVideoCover = isVideoAssetUrl(blog.image);

  const [heroVideoSrc, setHeroVideoSrc] = useState(blog.image);
  useEffect(() => {
    if (isVideoAssetUrl(blog.image)) {
      setHeroVideoSrc(pickBlogDetailHeroVideo());
    } else {
      setHeroVideoSrc(blog.image);
    }
  }, [blog.id, blog.image]);
  const seo = blog.seo;
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const canonicalUrl = `${origin}${seo.canonicalPath}`;
  const staticOgPath = isVideoCover ? relatedStillCover : blog.image;
  const ogImageUrl =
    origin && typeof staticOgPath === "string" && staticOgPath.startsWith("/")
      ? `${origin}${staticOgPath}`
      : "";
  const publishedTime = Date.parse(blog.date);
  const datePublished =
    Number.isFinite(publishedTime) && !Number.isNaN(publishedTime)
      ? new Date(publishedTime).toISOString().slice(0, 10)
      : undefined;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: seo.metaDescription,
    author: { "@type": "Organization", name: "Databiqs" },
    publisher: { "@type": "Organization", name: "Databiqs" },
    ...(datePublished ? { datePublished } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    keywords: seo.keywords,
  };

  return (
    <>
      <Helmet>
        <title>{seo.metaTitle}</title>
        <meta name="description" content={seo.metaDescription} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seo.metaTitle} />
        <meta property="og:description" content={seo.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        {ogImageUrl ? <meta property="og:image" content={ogImageUrl} /> : null}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.metaTitle} />
        <meta name="twitter:description" content={seo.metaDescription} />
        {ogImageUrl ? <meta name="twitter:image" content={ogImageUrl} /> : null}
      </Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
            key={`bdp-hero-${blog.id}`}
            className="bdp__heroImg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={blog.title}
          >
            <source src={heroVideoSrc} type="video/mp4" />
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
              {relatedItems.length === 0 ? (
                <p className="bdp__relatedEmpty">
                  More articles in this topic are on the way.{" "}
                  <Link to="/blog-page">Browse all insights</Link>
                </p>
              ) : (
                relatedItems.map(({ post: card, variant }, idx) => (
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
                        src={isVideoAssetUrl(card.image) ? relatedStillCover : card.image || relatedStillCover}
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
                ))
              )}
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
