import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-primary)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="WebElements Logo" 
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-xl font-bold text-[var(--text-primary)]">WebElements</span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              Una biblioteca de componentes frontend reutilizables construida con React, Vite y Tailwind CSS. 
              Inspírate, copia y usa en tus proyectos.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-[var(--text-primary)] font-semibold mb-4">Componentes</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/button" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  Button
                </a>
              </li>
              <li>
                <a href="/input" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  Input
                </a>
              </li>
              <li>
                <a href="/card" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  Card
                </a>
              </li>
              <li>
                <a href="/modal" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  Modal
                </a>
              </li>
            </ul>
          </div>

          {/* Enlaces sociales */}
          <div>
            <h3 className="text-[var(--text-primary)] font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://github.com/Braisdlim/WebElements" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://reactjs.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  React
                </a>
              </li>
              <li>
                <a 
                  href="https://tailwindcss.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Tailwind CSS
                </a>
              </li>
              <li>
                <a 
                  href="https://vitejs.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Vite
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-[var(--border-primary)] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--text-tertiary)] text-sm">
              © 2024 WebElements. Creado con ❤️ por Braisdlim
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <span className="text-[var(--text-tertiary)] text-sm">
                Made with React + Vite + Tailwind
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 