// components/Services.tsx
import styles from './Sections.module.css';

const servicesData = [
  { title: 'Back-End Architecture & System Design', description: 'Architecting robust and scalable back-end systems. I design high-performance APIs and microservices using Python (FastAPI) and Go to build a solid foundation for your application.' },
  { title: 'Front-End & User Experience', description: 'Developing fast, responsive, and intuitive user interfaces. I leverage modern frameworks like React.js and TypeScript to create engaging web experiences that captivate your users.' },
  { title: 'AI & Web3 Integration', description: 'Integrating next-generation technologies into your platform. From building intelligent LLM-powered features to developing decentralized applications (DApps) with Solidity, I bring cutting-edge innovation to your project.' },
  { title: 'DevOps & Cloud Orchestration', description: 'Ensuring your application is reliable, scalable, and easy to maintain. I implement automated CI/CD pipelines and containerization with Docker and Kubernetes to streamline deployment and guarantee uptime.' },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <h2 className={styles.sectionTitle}>Services</h2>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}