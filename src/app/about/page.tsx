import PageHeaderAbout from '../../components/PageHeaderAbout';
import About from '../../components/About';
import Cta from '../../components/Cta';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeaderAbout />
      </section>
      <section id="about" className="scroll-mt-16">
        <About />
      </section>
      <section id="cta" className="scroll-mt-16">
        <Cta />
      </section>
    </main>
  );
}