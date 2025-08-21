import PageHeaderPricing from '../../components/PageHeaderPricing';
import Pricing from '../../components/Pricing';
import Cta from '../../components/Cta';

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeaderPricing />
      </section>
      <section id="pricing" className="scroll-mt-16">
        <Pricing />
      </section>
      <section id="cta" className="scroll-mt-16">
        <Cta />
      </section>
    </main>
  );
}