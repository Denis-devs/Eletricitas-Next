import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-8 py-12">
      <div>
        <Image
          src="/personagem.png"
          alt="Personagem"
          width={400}
          height={400}
          className="mx-auto md:ml-8"
        />
      </div>
    </section>
  );
}
