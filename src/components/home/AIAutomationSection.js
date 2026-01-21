import React from 'react';
import './AIAutomationSection.css';
import crmIcon from '../../assets/crm.png';
import emailIcon from '../../assets/email.png';
import databaseIcon from '../../assets/database.png';
import llmIcon from '../../assets/llm.png';
import userIcon from '../../assets/user.png';
import erpIcon from '../../assets/erp.png';

const AIAutomationSection = () => {
  return (
    <section className="ai-automation-section">
      <div className="section-container">
        <div className="automation-content">
          <div className="automation-left">
            <h3 className="card-title">AI Automation</h3>
            <p className="card-description">
              Streamline your business processes with intelligent automation that adapts to your workflow. 
              Our AI-powered automation solutions integrate seamlessly with your existing systems, reducing 
              manual work and increasing efficiency across all departments.
            </p>
            <ul className="capabilities-list">
              <li>Custom Workflow Automation</li>
              <li>Seamless System Integration</li>
              <li>Data Synchronization</li>
              <li>Process Optimization</li>
            </ul>
          </div>
          <div className="automation-right">
            <div className="automation-diagram">
              <div className="automation-center">
                <div className="center-icon">AI Automation</div>
              </div>
              <div className="automation-nodes">
                <div className="automation-node">
                  <img src={crmIcon} alt="CRM" />
                  <span>CRM</span>
                </div>
                <div className="automation-node">
                  <img src={emailIcon} alt="Email" />
                  <span>Email</span>
                </div>
                <div className="automation-node">
                  <img src={databaseIcon} alt="Database" />
                  <span>Database</span>
                </div>
                <div className="automation-node">
                  <img src={llmIcon} alt="LLM" />
                  <span>LLM</span>
                </div>
                <div className="automation-node">
                  <img src={userIcon} alt="User" />
                  <span>User</span>
                </div>
                <div className="automation-node">
                  <img src={erpIcon} alt="ERP" />
                  <span>ERP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomationSection;
