import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Keys from "@/components/Keys";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="rise">
        <Hero />
        <Work />
        <Projects />
        <Keys />
        <About />
      </main>
      <Footer />
    </>
  );
}
