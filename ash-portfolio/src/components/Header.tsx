export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-semibold text-lg">Akshanth</span>
        <div className="space-x-6 text-sm text-gray-300">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>
    </header>
  );
}
