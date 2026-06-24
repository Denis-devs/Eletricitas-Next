import Header from "../components/Header";
import Hero from "../components/Hero";
import Servicos from "../components/Servicos";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[url('/fundo.png')] bg-cover bg-center bg-fixed text-white">
      <Header />
      <Hero />
      <Servicos />
      <Footer />
    </div>
  );
}
