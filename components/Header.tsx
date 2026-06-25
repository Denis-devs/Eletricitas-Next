import Image from "next/image";

export default function Header() {
  return (
<<<<<<< HEAD
    <header className="logo">
      <div className="logo-content">
        <div className="logo-title">
          <Image src="/logo.png" alt="Logo" width={80} height={80}/>
          <h1>Rodrigues Eletricista</h1>
        </div>

        <div>
            <h2 className="logo-text">Segurança e Qualidade</h2>
          <p>Serviços elétricos residenciais, instalação de câmeras, atendimento rápido e profissional.</p>
        </div>
      </div>

      <div>
        <div className="navbr">
          <nav><a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
          </nav>
        </div>
=======
    <section className="flex justify-center items-center px-8 py-6 bg-gradient-to-b from-black/80 to-transparent">
      <div className="flex flex-col items-center text-yellow-500 font-bold">
        <Image src="/logo.png" alt="Logo" width={80} height={80} />
        <h1 className="text-6xl">Rodrigues Eletricista</h1>
        <h2 className="text-4xl">Segurança e Qualidade</h2>
        <p className="text-lg mt-4 text-white text-center max-w-4xl">
    Serviços elétricos residenciais, instalação de câmeras, atendimento rápido e profissional.
  </p>
>>>>>>> 2352cf47d7004ca71e6feed45b0e3dac889d015d
      </div>
    </section>
  );
}
