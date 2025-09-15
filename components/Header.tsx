// components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

// ... (navLinks 和 socialLinks 数组保持不变) ...
const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'services', title: 'Services' },
  { id: 'about', title: 'About' },
  { id: 'tech-stack', title: 'Tech Stack' },
  { id: 'portfolio', title: 'Portfolio' },
  { id: 'pricing', title: 'Pricing' },
];
const socialLinks = [
  { name: 'Email', icon: '/icons/gmail.svg', value: 'mailto:1654920587zhaoyansong@gmail.com' },
  { name: 'GitHub', icon: '/icons/github.svg', value: 'https://github.com/lemonpay09' },
  { name: 'WeChat', icon: '/icons/wechat.svg', value: 'leonzerodemon' },
  { name: 'Telegram', icon: '/icons/telegram.svg', value: '@attractwealth_cat' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  // ... (useEffect for scroll spy 保持不变) ...
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );
    navLinks.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const handleSocialClick = (name: string, value: string) => {
    if (name === 'WeChat' || name === 'Telegram') {
      navigator.clipboard.writeText(value);
      alert(`${name} ID copied to clipboard: ${value}`);
    }
  };
  
  const SocialButton = ({ name, icon, value }: (typeof socialLinks)[0]) => {
    if (name === 'Email' || name === 'GitHub') {
      return (
        <a href={value} target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
            <Image src={icon} alt={name} width={20} height={20} />
        </a>
      );
    }
    return (
      <button onClick={() => handleSocialClick(name, value)} className={styles.iconButton}>
          <Image src={icon} alt={name} width={20} height={20} />
      </button>
    );
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContent} container`}>
        <div className={styles.logo}>Y.Z.</div>
        <nav className={styles.nav}>
          {navLinks.map(({ id, title }) => (
            <a key={id} href={`#${id}`} className={activeSection === id ? styles.active : ''}>
              {title}
            </a>
          ))}
        </nav>
        <div className={styles.socialIcons}>
          {socialLinks.map(link => <SocialButton key={link.name} {...link} />)}
        </div>
      </div>
    </header>
  );
}