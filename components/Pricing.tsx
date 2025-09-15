// components/Pricing.tsx
'use client';

import Image from 'next/image';
import styles from './Sections.module.css';

const socialLinks = [
  { name: 'Email', icon: '/icons/gmail.svg', value: 'mailto:1654920587zhaoyansong@gmail.com' },
  { name: 'GitHub', icon: '/icons/github.svg', value: 'https://github.com/lemonpay09' },
  { name: 'WeChat', icon: '/icons/wechat.svg', value: 'leonzerodemon' },
  { name: 'Telegram', icon: '/icons/telegram.svg', value: '@attractwealth_cat' },
];

export default function Pricing() {
  const handleSocialClick = (name: string, value: string) => {
    if (name === 'WeChat' || name === 'Telegram') {
      navigator.clipboard.writeText(value);
      alert(`${name} ID copied to clipboard: ${value}`);
    } else {
      window.open(value, '_blank');
    }
  };

  const SocialButton = ({ name, icon, value }: (typeof socialLinks)[0]) => {
     // ... (这里可以复用 Header 里的 SocialButton 逻辑, 但为简化我们直接写)
     if (name === 'Email' || name === 'GitHub') {
       return <a href={value} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><Image src={icon} alt={name} width={24} height={24} /></a>;
     }
     return <button onClick={() => handleSocialClick(name, value)} className={styles.socialIcon}><Image src={icon} alt={name} width={24} height={24} /></button>;
  };

  return (
    <section id="pricing" className={styles.section}>
      <h2 className={styles.sectionTitle}>Pricing</h2>
      {/* ... (pricingGrid 保持不变) ... */}
      <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <h3>Project-Based</h3>
              <p className={styles.price}>Let's Talk</p>
              <ul>
                <li>Fixed scope & timeline</li>
                <li>Ideal for well-defined projects</li>
                <li>Clear deliverables</li>
              </ul>
            </div>
            <div className={styles.pricingCard}>
              <h3>Hourly Rate</h3>
              <p className={styles.price}>Competitive</p>
              <ul>
                <li>Flexible scope</li>
                <li>Ideal for ongoing work</li>
                <li>Consulting & development</li>
              </ul>
            </div>
            <div className={styles.pricingCard}>
              <h3>Retainer</h3>
              <p className={styles.price}>Monthly</p>
              <ul>
                <li>Guaranteed availability</li>
                <li>Long-term partnership</li>
                <li>Priority support</li>
              </ul>
            </div>
      </div>
      <div className={styles.contactCallout}>
          <p>Interested in working together? Contact me to discuss your project.</p>
          <div className={styles.footerSocials}>
            {socialLinks.map(link => <SocialButton key={link.name} {...link} />)}
          </div>
      </div>
    </section>
  );
}