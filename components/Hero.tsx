import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div>
        <Image
          src="/personagem.png" alt="Personagem" width={400} height={400} className="mx-auto"
        />
      </div>
    </section>
  );
}
