import PageHeaderCaseStudies from '../../components/PageHeaderCaseStudies';
import Cta from '../../components/Cta';

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeaderCaseStudies />
      </section>
      <section id="cta" className="scroll-mt-16">
        <Cta />
      </section>
    </main>
  );
}