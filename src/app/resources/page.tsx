import PageHeaderResources from '../../components/PageHeaderResources';
import Cta from '../../components/Cta';

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeaderResources />
      </section>
      <section id="cta" className="scroll-mt-16">
        <Cta />
      </section>
    </main>
  );
}