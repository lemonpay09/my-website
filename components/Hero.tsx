// components/Hero.tsx
import Image from 'next/image'; // 使用 Next.js 优化的 Image 组件
import styles from './Sections.module.css';

export default function Hero() {
  return (
    <section id="home" className={`${styles.section} ${styles.heroSection}`}>
      <div className={styles.heroContent}>
        {/* 使用 Next/Image 组件，性能更好 */}
        <Image 
          src="/WechatIMG122.jpg" // 确保这张图片在 `public` 文件夹中
          alt="Yansong Zhao" 
          width={200} // 提供宽度
          height={200} // 提供高度
          className={styles.profilePhoto} 
        />
        <div className={styles.heroText}>
          <h1 className={styles.title}>Yansong Zhao</h1>
          <p className={styles.description}>
            I am a full-stack software engineer proficient in multiple languages and frameworks. I love life and focus on work.
          </p>
          <a href="#portfolio" className={styles.button}>See My Works</a>
        </div>
      </div>
    </section>
  );
}