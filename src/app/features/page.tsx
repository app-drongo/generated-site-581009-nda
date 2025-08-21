import PageHeaderFeatures from '../../components/PageHeaderFeatures';
import Features from '../../components/Features';
import Cta from '../../components/Cta';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeaderFeatures />
      </section>
      <section id="features" className="scroll-mt-16">
        <Features />
      </section>
      <section id="cta" className="scroll-mt-16">
        <Cta />
      </section>
    </main>
  );
}