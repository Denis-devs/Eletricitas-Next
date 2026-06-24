export default function Footer() {
  return (
    <footer className="bg-black/70 text-center text-white py-6 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} Rodrigues Eletricista - Franca/SP e Região
      </p>
      <p className="text-sm mt-2">
        Desenvolvido com Next.js
      </p>
    </footer>
  );
}
