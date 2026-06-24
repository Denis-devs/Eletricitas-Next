export default function Servicos() {
  return (
    <div className="bg-cover bg-center bg-fixed px-20 text-white">
      <h2 className="text-4xl text-yellow-500 text-center mb-12">
        Soluções para sua Casa
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 justify-center">
        
        {/* 1ª caixa */}
        <div className="flex flex-col items-center justify-center bg-black/40 p-6 rounded-xl border border-white/20 hover:border-yellow-500 transition text-center">
          <h3 className="text-yellow-500 text-xl mb-4">⚡ Elétrica Residencial</h3>
          <ul className="space-y-2">
            <li>Montagem de Quadros</li>
            <li>Troca de Disjuntores</li>
            <li>Troca de Fiação</li>
            <li>Instalação de Tomadas</li>
            <li>Instalação de Lâmpadas</li>
            <li>Chuveiros Elétricos</li>
            <li>Ventiladores</li>
          </ul>
        </div>

        {/* 2ª caixa */}
        <div className="flex flex-col items-center justify-center bg-black/40 p-6 rounded-xl border border-white/20 hover:border-yellow-500 transition text-center">
          <h3 className="text-3xl text-yellow-500 mb-4">
            Precisa de um orçamento sem compromisso?
          </h3>
          <a
            href="https://wa.me/5516994279365"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-green-600 transition order-last md:order-none mt-6 md:mt-0"
          >
            SOLICITAR VIA WHATSAPP
          </a>
        </div>

        {/* 3ª caixa */}
        <div className="flex flex-col items-center justify-center bg-black/40 p-6 rounded-xl border border-white/20 hover:border-yellow-500 transition text-center">
          <h3 className="text-yellow-500 text-xl mb-4">🛡️ Segurança Eletrônica</h3>
          <ul className="space-y-2">
            <li>Instalação de Câmeras</li>
            <li>Configuração DVR</li>
            <li>Interfones</li>
            <li>Sensores</li>
            <li>Motor de Portão</li>
            <li>Controle de Acesso</li>
            <li>Fechaduras Digitais</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
