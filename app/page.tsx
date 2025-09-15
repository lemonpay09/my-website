// app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import TechStack from '@/components/TechStack'; // 新增
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <Services />
        <About />
        <TechStack /> {/* 新增 */}
        <Portfolio />
        <Pricing />
      </main>
      {/* Footer can be added here */}
    </>
  );
}