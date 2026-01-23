import React from 'react';
import './AIAutomationSection.css';
import crmIcon from '../../assets/crm.png';
import emailIcon from '../../assets/email.png';
import databaseIcon from '../../assets/database.png';
import llmIcon from '../../assets/llm.png';
import userIcon from '../../assets/user.png';
import erpIcon from '../../assets/erp.png';
import arrowToDatabase from '../../assets/ai automation box middle to databse box.png';
import arrowToLLM from '../../assets/ai automation box to llm box.png';
import arrowToUser from '../../assets/ai automation box to user box.png';
import aiToUserArrow from '../../assets/ai to user box.png';
import aiToTextArrow from '../../assets/ai to text.png';
import aiToErpArrow from '../../assets/ai to erp.png';
import aiToEmailArrow from '../../assets/ai to email.png';
import aiToCrmArrow from '../../assets/ai to crm.png';

const AIAutomationSection = () => {
  return (
    <section className="ai-automation-section">
      <div className="section-container">
        <div className="automation-card">
          <div className="automation-left">
            <h3 className="automation-title">AI Automation</h3>
            <p className="automation-description">
              Automate Workflows Using N8n To Connect Systems, Eliminate Manual Tasks, And Optimize Business Operations.
            </p>
            <div className="capabilities-heading">Key Capabilities:</div>
            <ul className="capabilities-list">
              <li>Custom Workflow Automation</li>
              <li>Seamless System Integration</li>
              <li>Data Synchronization</li>
              <li>Process Optimization</li>
            </ul>
          </div>
          <div className="automation-right">
            <div className="automation-diagram">
              {/* Central AI Automation Box */}
              <div className="automation-center-box">
                <div className="center-box-label">AI Automation</div>
                <div className="ai-box-wrapper">
                  <div className="ai-box">AI</div>
                  <div className="ai-white-box ai-white-box-1"></div>
                  <div className="ai-white-box ai-white-box-2"></div>
                  <div className="ai-white-box ai-white-box-3"></div>
                  {/* Arrow below AI box */}
                  <img 
                    src={aiToTextArrow} 
                    alt="AI to Text Arrow" 
                    className="arrow-ai-to-text"
                  />
                  {/* Arrow near AI to Text */}
                  <img 
                    src={aiToErpArrow} 
                    alt="AI to ERP Arrow" 
                    className="arrow-ai-to-erp"
                  />
                  {/* Arrow above AI to ERP */}
                  <img 
                    src={aiToEmailArrow} 
                    alt="AI to Email Arrow" 
                    className="arrow-ai-to-email"
                  />
                  {/* Arrow above AI to Email */}
                  <img 
                    src={aiToCrmArrow} 
                    alt="AI to CRM Arrow" 
                    className="arrow-ai-to-crm"
                  />
                </div>
                {/* Arrow from center box right corner to Database */}
                <img 
                  src={arrowToDatabase} 
                  alt="Arrow to Database" 
                  className="arrow-to-database"
                />
                {/* Arrow from center box right corner to LLM */}
                <img 
                  src={arrowToLLM} 
                  alt="Arrow to LLM" 
                  className="arrow-to-llm"
                />
                {/* Arrow from center box right corner to User */}
                <img 
                  src={arrowToUser} 
                  alt="Arrow to User" 
                  className="arrow-to-user"
                />
                {/* Arrow below the previous user arrow */}
                <img
                  src={aiToUserArrow}
                  alt="AI to User Arrow"
                  className="arrow-ai-to-user"
                />
              </div>

              {/* System Nodes */}
              <div className="system-node crm-node">
                <img src={crmIcon} alt="CRM" className="node-icon" />
                <span className="node-label">CRM</span>
              </div>
              <div className="system-node email-node">
                <img src={emailIcon} alt="Email" className="node-icon" />
                <span className="node-label">Email</span>
              </div>
              <div className="system-node erp-node">
                <img src={erpIcon} alt="ERP" className="node-icon" />
                <span className="node-label">ERP</span>
              </div>
              <div className="system-node database-node">
                <img src={databaseIcon} alt="Database" className="node-icon" />
                <span className="node-label">Database</span>
              </div>
              <div className="system-node llm-node">
                <img src={llmIcon} alt="LLM" className="node-icon" />
                <span className="node-label">LLM</span>
              </div>
              <div className="system-node user-node">
                <img src={userIcon} alt="User" className="node-icon" />
                <span className="node-label">User</span>
              </div>


              {/* Text Labels Below Diagram */}
              <div className="diagram-labels">
                <div className="diagram-label">AI-Driven Workflow Automation</div>
                <div className="diagram-label">Seamless Integration Of Systems Via API & Middleware</div>
                <div className="diagram-label">Real-Time Data Synchronization</div>
                <div className="diagram-label">AI Process Optimization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomationSection;
