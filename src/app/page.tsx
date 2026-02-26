import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import BlogNote from "@/components/BlogNote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <BlogNote />
      </main>
      <Footer />
    </>
  );
}
