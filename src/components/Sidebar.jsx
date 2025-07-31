import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const sidebarVariants = [
  {
    name: "Basic Sidebar",
    code: `<div className="w-64 h-screen bg-zinc-900 border-r border-zinc-800">
  <div className="p-4">
    <div className="text-white font-bold text-xl mb-6">Logo</div>
    <nav className="space-y-2">
      <a href="#" className="flex items-center gap-3 px-3 py-2 text-white hover:bg-zinc-800 rounded-lg transition-colors">
        <span>🏠</span>
        <span>Dashboard</span>
      </a>
      <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
        <span>📊</span>
        <span>Analytics</span>
      </a>
      <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
        <span>👥</span>
        <span>Users</span>
      </a>
      <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
        <span>⚙️</span>
        <span>Settings</span>
      </a>
    </nav>
  </div>
</div>`,
    preview: (
      <div className="w-64 h-32 bg-zinc-900 border-r border-zinc-800 overflow-hidden relative">
        <div className="p-4">
          <div className="text-white font-bold text-xl mb-2">Logo</div>
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-1 text-white hover:bg-zinc-800 rounded-lg transition-colors">
              <span>🏠</span>
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-1 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
              <span>📊</span>
              <span>Analytics</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-1 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
              <span>👥</span>
              <span>Users</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-1 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
              <span>⚙️</span>
              <span>Settings</span>
            </a>
          </nav>
        </div>
      </div>
    )
  },
  {
    name: "Collapsible Sidebar",
    code: `<div className="w-16 h-screen bg-zinc-900 border-r border-zinc-800">
  <div className="p-4">
    <div className="text-white font-bold text-xl mb-6 text-center">L</div>
    <nav className="space-y-2">
      <a href="#" className="flex items-center justify-center w-8 h-8 text-white hover:bg-zinc-800 rounded-lg transition-colors" title="Dashboard">
        <span>🏠</span>
      </a>
      <a href="#" className="flex items-center justify-center w-8 h-8 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors" title="Analytics">
        <span>📊</span>
      </a>
      <a href="#" className="flex items-center justify-center w-8 h-8 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors" title="Users">
        <span>👥</span>
      </a>
      <a href="#" className="flex items-center justify-center w-8 h-8 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors" title="Settings">
        <span>⚙️</span>
      </a>
    </nav>
  </div>
</div>`,
    preview: (
      <div className="w-16 h-32 bg-zinc-900 border-r border-zinc-800 overflow-hidden relative">
        <div className="p-4">
          <div className="text-white font-bold text-xl mb-4 text-center">L</div>
          <nav className="space-y-2">
            <a href="#" className="flex items-center justify-center w-8 h-8 text-white hover:bg-zinc-800 rounded-lg transition-colors" title="Dashboard">
              <span>🏠</span>
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors" title="Analytics">
              <span>📊</span>
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors" title="Users">
              <span>👥</span>
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors" title="Settings">
              <span>⚙️</span>
            </a>
          </nav>
        </div>
      </div>
    )
  },
  {
    name: "Sidebar with Submenu",
    code: `<div className="w-64 h-screen bg-zinc-900 border-r border-zinc-800">
  <div className="p-4">
    <div className="text-white font-bold text-xl mb-6">Logo</div>
    <nav className="space-y-2">
      <a href="#" className="flex items-center gap-3 px-3 py-2 text-white hover:bg-zinc-800 rounded-lg transition-colors">
        <span>🏠</span>
        <span>Dashboard</span>
      </a>
      <div className="space-y-1">
        <button className="flex items-center justify-between w-full px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
          <div className="flex items-center gap-3">
            <span>📊</span>
            <span>Reports</span>
          </div>
          <span>▼</span>
        </button>
        <div className="ml-6 space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
            <span>📈</span>
            <span>Analytics</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
            <span>📋</span>
            <span>Sales</span>
          </a>
        </div>
      </div>
      <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
        <span>👥</span>
        <span>Users</span>
      </a>
    </nav>
  </div>
</div>`,
    preview: (
      <div className="w-64 h-32 bg-zinc-900 border-r border-zinc-800 overflow-hidden relative">
        <div className="p-4">
          <div className="text-white font-bold text-xl mb-2">Logo</div>
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-1 text-white hover:bg-zinc-800 rounded-lg transition-colors">
              <span>🏠</span>
              <span>Dashboard</span>
            </a>
            <div className="space-y-1">
              <button className="flex items-center justify-between w-full px-3 py-1 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <span>📊</span>
                  <span>Reports</span>
                </div>
                <span>▼</span>
              </button>
              <div className="ml-6 space-y-1">
                <a href="#" className="flex items-center gap-3 px-3 py-1 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
                  <span>📈</span>
                  <span>Analytics</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-1 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
                  <span>📋</span>
                  <span>Sales</span>
                </a>
              </div>
            </div>
            <a href="#" className="flex items-center gap-3 px-3 py-1 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
              <span>👥</span>
              <span>Users</span>
            </a>
          </nav>
        </div>
      </div>
    )
  },
  {
    name: "Sidebar with User Profile",
    code: `<div className="w-64 h-screen bg-zinc-900 border-r border-zinc-800 flex flex-col">
  <div className="p-4 flex-1">
    <div className="text-white font-bold text-xl mb-6">Logo</div>
    <nav className="space-y-2">
      <a href="#" className="flex items-center gap-3 px-3 py-2 text-white hover:bg-zinc-800 rounded-lg transition-colors">
        <span>🏠</span>
        <span>Dashboard</span>
      </a>
      <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
        <span>📊</span>
        <span>Analytics</span>
      </a>
      <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
        <span>👥</span>
        <span>Users</span>
      </a>
    </nav>
  </div>
  <div className="p-4 border-t border-zinc-800">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">
        <span className="text-white text-sm">JD</span>
      </div>
      <div className="flex-1">
        <div className="text-white text-sm font-medium">John Doe</div>
        <div className="text-zinc-400 text-xs">john@example.com</div>
      </div>
      <button className="text-zinc-400 hover:text-white">
        <span>⚙️</span>
      </button>
    </div>
  </div>
</div>`,
    preview: (
      <div className="w-64 h-32 bg-zinc-900 border-r border-zinc-800 flex flex-col overflow-hidden relative">
        <div className="p-4 flex-1">
          <div className="text-white font-bold text-xl mb-2">Logo</div>
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-1 text-white hover:bg-zinc-800 rounded-lg transition-colors">
              <span>🏠</span>
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-1 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
              <span>📊</span>
              <span>Analytics</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-1 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
              <span>👥</span>
              <span>Users</span>
            </a>
          </nav>
        </div>
        <div className="p-4 border-t border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">JD</span>
            </div>
            <div className="flex-1">
              <div className="text-white text-sm font-medium">John Doe</div>
              <div className="text-zinc-400 text-xs">john@example.com</div>
            </div>
            <button className="text-zinc-400 hover:text-white">
              <span>⚙️</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function Sidebar() {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
        >
          ← Volver a la galería
        </button>
      </div>
      
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Sidebar</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Paneles laterales con navegación y submenús para organizar la interfaz.
        </p>
      </header>

        <div className="space-y-8">
          {sidebarVariants.map((variant, index) => (
            <motion.div
              key={variant.name}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 relative"
              style={{ zIndex: sidebarVariants.length - index }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{variant.name}</h3>
                <button
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors text-sm"
                >
                  {expanded === index ? "Ocultar código" : "Ver código"}
                </button>
              </div>
              
              <div className="mb-4">
                {variant.preview}
              </div>

              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="relative">
                      <SyntaxHighlighter
                        language="jsx"
                        style={oneDark}
                        customStyle={{
                          margin: 0,
                          borderRadius: "8px",
                          fontSize: "14px"
                        }}
                      >
                        {variant.code}
                      </SyntaxHighlighter>
                      <button
                        onClick={() => copyToClipboard(variant.code)}
                        className="absolute top-2 right-2 px-3 py-1 bg-zinc-700 text-white rounded text-sm hover:bg-zinc-600 transition-colors"
                      >
                        Copiar
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
  );
} 