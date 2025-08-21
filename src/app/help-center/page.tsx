import PageHeaderHelpCenter from '../../components/PageHeaderHelpCenter';
import Contact from '../../components/Contact';

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeaderHelpCenter />
      </section>
      <section id="contact" className="scroll-mt-16">
        <Contact />
      </section>
    </main>
  );
}