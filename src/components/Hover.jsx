import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const hoverVariants = [
  {
    name: "Basic Hover Effect",
    code: `<div className="grid grid-cols-3 gap-6 max-w-2xl">
  <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 cursor-pointer">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <h3 className="text-white font-semibold mb-2">Card Title</h3>
      <p className="text-zinc-300 text-sm">Hover to see the effect</p>
    </div>
  </div>
  <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 cursor-pointer">
    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <h3 className="text-white font-semibold mb-2">Card Title</h3>
      <p className="text-zinc-300 text-sm">Hover to see the effect</p>
    </div>
  </div>
  <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 cursor-pointer">
    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <h3 className="text-white font-semibold mb-2">Card Title</h3>
      <p className="text-zinc-300 text-sm">Hover to see the effect</p>
    </div>
  </div>
</div>`,
    preview: (
      <div className="grid grid-cols-3 gap-6 max-w-2xl">
        <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h3 className="text-white font-semibold mb-2">Card Title</h3>
            <p className="text-zinc-300 text-sm">Hover to see the effect</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h3 className="text-white font-semibold mb-2">Card Title</h3>
            <p className="text-zinc-300 text-sm">Hover to see the effect</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h3 className="text-white font-semibold mb-2">Card Title</h3>
            <p className="text-zinc-300 text-sm">Hover to see the effect</p>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Hover with Scale",
    code: `<div className="grid grid-cols-3 gap-6 max-w-2xl">
  <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 cursor-pointer transform hover:scale-105 transition-transform duration-300">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <h3 className="text-white font-semibold mb-2">Scale Effect</h3>
      <p className="text-zinc-300 text-sm">Hover to scale up</p>
    </div>
  </div>
  <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 cursor-pointer transform hover:scale-110 transition-transform duration-300">
    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <h3 className="text-white font-semibold mb-2">Scale Effect</h3>
      <p className="text-zinc-300 text-sm">Hover to scale up</p>
    </div>
  </div>
  <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 cursor-pointer transform hover:scale-105 transition-transform duration-300">
    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <h3 className="text-white font-semibold mb-2">Scale Effect</h3>
      <p className="text-zinc-300 text-sm">Hover to scale up</p>
    </div>
  </div>
</div>`,
    preview: (
      <div className="grid grid-cols-3 gap-6 max-w-2xl">
        <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 cursor-pointer transform hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h3 className="text-white font-semibold mb-2">Scale Effect</h3>
            <p className="text-zinc-300 text-sm">Hover to scale up</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 cursor-pointer transform hover:scale-110 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h3 className="text-white font-semibold mb-2">Scale Effect</h3>
            <p className="text-zinc-300 text-sm">Hover to scale up</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 cursor-pointer transform hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h3 className="text-white font-semibold mb-2">Scale Effect</h3>
            <p className="text-zinc-300 text-sm">Hover to scale up</p>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Hover with Glow",
    code: `<div className="grid grid-cols-3 gap-6 max-w-2xl">
  <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 cursor-pointer hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <h3 className="text-white font-semibold mb-2">Glow Effect</h3>
      <p className="text-zinc-300 text-sm">Hover for glow</p>
    </div>
  </div>
  <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 cursor-pointer hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <h3 className="text-white font-semibold mb-2">Glow Effect</h3>
      <p className="text-zinc-300 text-sm">Hover for glow</p>
    </div>
  </div>
  <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 cursor-pointer hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300">
    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <h3 className="text-white font-semibold mb-2">Glow Effect</h3>
      <p className="text-zinc-300 text-sm">Hover for glow</p>
    </div>
  </div>
</div>`,
    preview: (
      <div className="grid grid-cols-3 gap-6 max-w-2xl">
        <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 cursor-pointer hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h3 className="text-white font-semibold mb-2">Glow Effect</h3>
            <p className="text-zinc-300 text-sm">Hover for glow</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 cursor-pointer hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h3 className="text-white font-semibold mb-2">Glow Effect</h3>
            <p className="text-zinc-300 text-sm">Hover for glow</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 cursor-pointer hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h3 className="text-white font-semibold mb-2">Glow Effect</h3>
            <p className="text-zinc-300 text-sm">Hover for glow</p>
          </div>
        </div>
      </div>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function Hover() {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="bg-[#111] min-h-screen w-full">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
          >
            ← Volver a la galería
          </button>
        </div>
        
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Hover Effects</h1>
          <p className="text-lg text-zinc-400">
            Efectos de hover interactivos para mejorar la experiencia del usuario.
          </p>
        </header>

        <div className="space-y-8">
          {hoverVariants.map((variant, index) => (
            <motion.div
              key={variant.name}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6"
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
    </div>
  );
} 