import Image from "next/image";

export default function Header() {
  return (
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
        </div>
      </header>
  );
}
