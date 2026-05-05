import React from 'react';
import './ClientsMarquee.css';
import {
  Droplets, Globe, Atom, Mountain,
  Cpu, Triangle, Cloud, Lightbulb,
  Infinity, ShieldCheck, Hexagon, Asterisk,
} from 'lucide-react';

const clients = [
  { name: 'TechFlow',         Icon: Droplets    },
  { name: 'GlobalScale',      Icon: Globe       },
  { name: 'NexusCorp',        Icon: Atom        },
  { name: 'ApexSystems',      Icon: Mountain    },
  { name: 'QuantumData',      Icon: Cpu         },
  { name: 'VertexSolutions',  Icon: Triangle    },
  { name: 'OmniCloud',        Icon: Cloud       },
  { name: 'InnovateX',        Icon: Lightbulb   },
  { name: 'SynergyTech',      Icon: Infinity    },
  { name: 'CyberCore',        Icon: ShieldCheck },
  { name: 'PrimeLogic',       Icon: Hexagon     },
  { name: 'AlphaStream',      Icon: Asterisk    },
];

const ClientsMarquee = () => {
  return (
    <section className="clients-section">
      <h2 className="clients-heading">
        Trusted by <span className="clients-heading-purple">Industry</span> Leaders
      </h2>

      <div className="clients-marquee-wrapper">
        <div className="clients-track">
          {[0, 1, 2, 3].map((groupIdx) => (
            <div className="clients-group" key={groupIdx}>
              {clients.map(({ name, Icon }) => (
                <div className="client-item" key={`${groupIdx}-${name}`}>
                  <Icon className="client-icon" strokeWidth={1.5} />
                  <span className="client-name">{name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
