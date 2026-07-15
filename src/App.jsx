import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import About       from './components/About';
import Services    from './components/Services';
import Work        from './components/Work';
import Blogs       from './components/Blogs';
import Process     from './components/Process';
import Contact     from './components/Contact';
import Footer      from './components/Footer';
import PrivacyPage from './components/PrivacyPage';

export default function App() {
  if (typeof window !== 'undefined' && window.location.pathname === '/privacy') {
    return (
      <>
        <Navbar />
        <main><PrivacyPage /></main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Blogs />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
