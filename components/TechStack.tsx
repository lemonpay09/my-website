// components/TechStack.tsx
import styles from './Sections.module.css';

const techCategories = [
  {
    category: 'Languages & Databases',
    skills: ['Python', 'Go', 'TypeScript', 'Solidity', 'Rust', 'SQL', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'Front-End',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'ethers.js', 'web3.js']
  },
  {
    category: 'Back-End',
    skills: ['Node.js', 'FastAPI', 'Gin', 'Django', 'Microservices']
  },
  {
    category: 'DevOps, Cloud & AI',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'GCP', 'RAG Systems', 'LLM Integration']
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className={styles.section}>
      <h2 className={styles.sectionTitle}>My Tech Stack</h2>
      <p className={styles.sectionSubtitle}>
        A collection of technologies I use to build robust, scalable, and innovative applications.
      </p>
      <div className={styles.techGrid}>
        {techCategories.map((cat) => (
          <div key={cat.category} className={styles.techCard}>
            <h3 className={styles.techCategoryTitle}>{cat.category}</h3>
            <div className={styles.techItems}>
              {cat.skills.map((skill) => (
                <div key={skill} className={styles.techItem}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}