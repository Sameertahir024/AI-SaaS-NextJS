import Hero from "@/Components/hero/Hero";
import "./page.css";
import Companies from "@/Components/companies/Companies";
import About from "@/Components/about/About";
export default function Home() {
  return (
    <div>
      <Hero />
      <Companies />
      <About />
    </div>
  );
}
