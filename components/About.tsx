// components/About.tsx
import Image from 'next/image';
import styles from './Sections.module.css';

// ... (experiences 数据保持不变) ...

const experiences = [
  {
    date: 'SEP 2024 - PRESENT',
    role: 'Blockchain Full-stack Engineer at CryptoBuild Inc. (Remote)',
    description: 'Led a talented team in crafting compelling brand experiences. Focused on innovation, creative direction, and delivering impactful digital solutions.'
  },
  {
    date: 'OCT 2021 - APR 2024',
    role: 'Full-stack Software Engineer at Global Tech Solutions',
    description: 'Developed scalable web applications, RESTful APIs, and real-time data dashboards using React, Node.js, Python, and Go.'
  },
  {
    date: 'MAY 2020 - SEP 2021',
    role: 'Back-end Software Engineer at Nanjing Honor Technology',
    description: 'Specialized in building and optimizing AI/LLM-powered backend services, including a core Retrieval-Augmented Generation (RAG) system.'
  }
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.aboutLayout}>
        {/* 左侧区域现在是图片 + 文字介绍 */}
        <div className={styles.aboutLeft}>
          <div className={styles.aboutImageContainer}>
             {/* 在这里放一张能代表你工作或个人风格的照片 */}
             <Image src="/workspace-photo.jpg" alt="Workspace" layout="fill" objectFit="cover" className={styles.aboutImage} />
          </div>
          <h2 className={styles.aboutTitle}>My experiences</h2>
          <p>
            I've had the privilege of engineering solutions for diverse applications, from enterprise-scale AI platforms to innovative decentralized finance protocols. I am driven by the challenge of mastering new technologies and building impactful products.
          </p>
        </div>

        {/* 右侧区域保持不变 */}
        <div className={styles.aboutRight}>
          <h3 className={styles.moreAboutTitle}>More about me</h3>
          <p className={styles.aboutDescription}>
            I'm Yansong Zhao, a Full-stack Software Engineer with a deep passion for building technology that solves real-world problems.
            <br/><br/>
            My journey in the ever-evolving world of software development is driven by a relentless curiosity...
          </p>
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineMeta}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineDate}>{exp.date}</div>
                </div>
                <div className={styles.timelineContent}>
                  <h4>{exp.role}</h4>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}