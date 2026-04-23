import './caseStudies.css';
import CaseStudyHero from './CaseStudyHero';
import MoreCaseStudiesCarousel from './MoreCaseStudiesCarousel';
import caseStudyImage from '../../assets/case-study.svg';
import phasePredictionImg from '../../assets/phase1-prediction.svg';
import phaseExecutionImg from '../../assets/phase2-prediction.svg';
import apostropheMark from '../../assets/appostrophy.svg';
import testimonialAvatar from '../../assets/Michael-Hayes.svg';
import Header from '../home/Header';
import Footer from '../home/Footer';
const CaseStudies = () => {
    return (
        <div className=''>
             <section className="case-study-page">
                <div className="case-study-page-header-section">
                    <Header/>
                    <div className="case-study-page-container">
                        <CaseStudyHero
                            imageSrc={caseStudyImage}
                            imageAlt="Project Aether"
                            primaryBadge="Fintech"
                            secondaryBadge="14 Month Timeline"
                            title="PROJECT AETHER"
                            subtitle="PREDICTIVE LIQUIDITY MESH"
                            description="A total neural architecture re-imagining for global capital movement, mitigating systematic slippage through deep-learning foresight."
                        />
                    </div>
                </div>

<div className="case-study-page-container">
    <div className="case-study-page-challenge-section">
        <span className="case-study-page-section-label case-study-page-section-label--challenge">
            The Challenge
        </span>

        <div className="case-study-page-challenge-grid">
            <h2 className="case-study-page-challenge-heading">
                LEGACY SYSTEMS WERE LEAKING MILLIONS EVERY HOUR DURING HIGH-VOLATILITY
                MARKET EVENTS.
            </h2>

            <p className="case-study-page-challenge-text" lang="en">
                Our client faced architectural bottleneck: traditional execution engines
                were reactive. By the time slippage was detected, the capital loss was
                already baked into transaction.
            </p>
        </div>

        <div className="case-study-page-alert">
            <svg
                className="case-study-page-alert-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="23"
                height="21"
                aria-hidden="true"
                focusable="false"
            >
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.401 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                />
            </svg>
            <h3 className="case-study-page-alert-title">System Fragility</h3>
            <p className="case-study-page-alert-text" lang="en">
                Sub-second volatility spikes triggered cascading execution failures,
                leading to an average slippage loss of $14M per event.
            </p>
        </div>
    </div>

    <div className="case-study-page-tech-section">
        <span className="case-study-page-section-label case-study-page-section-label--tech-stack">
            Neural-Architected Tech Stack
        </span>

        <div className="case-study-page-tech-list">
            <span>PYTORCH</span>
            <span>AWS NEURON</span>
            <span>KAFKA MESH</span>
            <span>FPGA ACCELERATORS</span>
            <span>VECTOR DB</span>
            <span>GRAFANA LABS</span>
        </div>
    </div>

    <div className="case-study-page-phases">
        <div className="case-study-page-phase case-study-page-phase--prediction">
            <div className="case-study-page-phase-copy">
                <span className="case-study-page-phase-pill">Phase 1: Prediction</span>
                <h2 className="case-study-page-phase-title">
                    THE LATENT LIQUIDITY ENGINE
                </h2>
                <p className="case-study-page-phase-body" lang="en">
                    We implemented a deep mesh network that doesn&apos;t just watch trades.
                    It simulates 10,000 parallel market futures per millisecond. By predicting
                    liquidity &apos;dry spots&apos; before they occur, the mesh per-positions
                    capital through high-speed Kafka channels.
                </p>
            </div>
            <div className="case-study-page-phase-figure case-study-page-phase-figure--prediction">
                <img
                    src={phasePredictionImg}
                    alt="Developer reviewing liquidity and market data on a laptop"
                    className="case-study-page-phase-image case-study-page-phase-image--prediction"
                    loading="lazy"
                    decoding="async"
                />
            </div>
        </div>

        <div className="case-study-page-phase case-study-page-phase--execution">
            <div className="case-study-page-phase-figure">
                <img
                    src={phaseExecutionImg}
                    alt="Abstract visualization of high-speed data routing and infrastructure"
                    className="case-study-page-phase-image "
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <div className="case-study-page-phase-copy">
                <span className="case-study-page-phase-pill">Phase 2: Execution</span>
                <h2 className="case-study-page-phase-title">
                    SUB - 50MS NEURAL ROUTING
                </h2>
                <p className="case-study-page-phase-body" lang="en">
                    Utilizing AWS Neuron-optimized instances, we reduced the
                    inference-to-execution window to under 50ms. This predictive bridge
                    allows for automatic transactions that bypass legacy routing
                    bottlenecks entirely.
                </p>
            </div>
        </div>
    </div>

    <div className="case-study-page-impact">
        <div className="case-study-page-impact-intro">
            <span className="case-study-page-centered-pill">Strategic Impact</span>
        </div>
        <div className="case-study-page-impact-metrics">
            <article className="case-study-page-metric-card">
                <h3 className="case-study-page-metric-label">Slippage Reduction</h3>
                <p className="case-study-page-metric-value" aria-label="Over 200 million dollars">
                    $200M+
                </p>
                <p className="case-study-page-metric-footnote">
                    Annualized slippage loss reduced to near zero within the first quarter of
                    deployment.
                </p>
            </article>
            <article className="case-study-page-metric-card">
                <h3 className="case-study-page-metric-label">Latency Threshold</h3>
                <p className="case-study-page-metric-value">&lt;50ms</p>
                <p className="case-study-page-metric-footnote">
                    Consistent end-to-end routing latency achieved across global geographic
                    nodes.
                </p>
            </article>
        </div>
    </div>

    <div className="case-study-page-ltsv">
        <h2 className="case-study-page-ltsv-title">LONG TERM STRATEGIC VALUE</h2>
        <div className="case-study-page-ltsv-grid">
            <article className="case-study-page-value-card">
                <h3 className="case-study-page-value-card-title">Global Scalability</h3>
                <p className="case-study-page-value-card-text">
                    Elastic mesh topology scales execution capacity horizontally across regions
                    without re-architecting core inference pipelines.
                </p>
            </article>
            <article className="case-study-page-value-card">
                <h3 className="case-study-page-value-card-title">Resilience Profile</h3>
                <p className="case-study-page-value-card-text">
                    Multi-path failover and predictive circuit-breaking isolate fault domains
                    before they propagate across the trading stack.
                </p>
            </article>
            <article className="case-study-page-value-card case-study-page-value-card--watchouts">
                <h3 className="case-study-page-value-card-title">Technical Watch Outs</h3>
                <ul className="case-study-page-value-card-list">
                    <li>
                        Ongoing calibration of Neuron clusters against shifting volatility regimes
                        to avoid model drift under tail events.
                    </li>
                    <li>
                        Kafka mesh throughput must stay ahead of peak order bursts—capacity
                        reviews scheduled quarterly with automated headroom alerts.
                    </li>
                </ul>
            </article>
        </div>
    </div>

    <figure className="case-study-page-testimonial">
        <div className="case-study-page-testimonial-body">
            <img
                src={apostropheMark}
                alt=""
                className="case-study-page-testimonial-quote-icon"
                aria-hidden="true"
            />
            <blockquote className="case-study-page-testimonial-quote">
                Databiqs Delivered An AI Solution That Significantly Improved Our Customer
                Response Time And Operational Efficiency. Their Approach Was Strategic,
                Professional, And Results-Driven.
            </blockquote>
        </div>
        <figcaption className="case-study-page-testimonial-footer">
            <div className="case-study-page-testimonial-identity">
                <img
                    src={testimonialAvatar}
                    alt="Michael Hayes"
                    className="case-study-page-testimonial-avatar"
                    width="64"
                    height="64"
                />
                <div className="case-study-page-testimonial-author">
                    <span className="case-study-page-testimonial-name">Michael Hayes</span>
                    <span className="case-study-page-testimonial-role">
                        Operations Manager
                    </span>
                </div>
            </div>
        </figcaption>
    </figure>
</div>

<MoreCaseStudiesCarousel />
</section>

            {/* <Header /> */}
           

            <Footer/>

        </div>

    );
};

export default CaseStudies;
