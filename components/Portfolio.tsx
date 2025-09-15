// components/Portfolio.tsx
import styles from './Sections.module.css';

const portfolioData = [
  { title: 'DeFi Staking & Yield Farming DApp', description: 'A full-stack DeFi DApp built with a modern Foundry and Hardhat toolchain.', link: 'https://github.com/lemonpay09/DeFi-Staking-Yield-Farm' },
  { title: 'Phoenix E-Commerce API', description: 'A high-performance backend API using Python and FastAPI.', link: 'https://github.com/lemonpay09/Phoenix-ECommerce-API' },
  { title: 'Go RESTful API', description: 'A lightweight microservice built with Go and the Gin framework.', link: 'https://github.com/lemonpay09/Go-RESTful-API-Gin' },
  { title: 'Rust CLI Toolkit', description: 'A practical showcase of Rust skills through a JSON validation tool.', link: 'https://github.com/lemonpay09/Rust-CLI-Toolkit' },
  { title: 'Enterprise Analytics UI', description: 'A modern front-end dashboard built with React and TypeScript.', link: 'https://github.com/lemonpay09/Enterprise-Analytics-UI' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.section}>
      <h2 className={styles.sectionTitle}>Portfolio</h2>
      <div className={styles.portfolioGrid}>
        {portfolioData.map(item => (
          <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer" className={styles.portfolioCard}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span>View on GitHub &rarr;</span>
          </a>
        ))}
      </div>
    </section>
  );
}