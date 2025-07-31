import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const spinnerVariants = [
  {
    name: "Basic Spinner",
    code: `<div className="flex items-center justify-center">
  <div className="w-8 h-8 border-2 border-zinc-700 border-t-white rounded-full animate-spin"></div>
</div>`,
    preview: <div className="flex items-center justify-center"><div className="w-8 h-8 border-2 border-zinc-700 border-t-white rounded-full animate-spin"></div></div>
  },
  {
    name: "Large Spinner",
    code: `<div className="flex items-center justify-center">
  <div className="w-12 h-12 border-4 border-zinc-700 border-t-white rounded-full animate-spin"></div>
</div>`,
    preview: <div className="flex items-center justify-center"><div className="w-12 h-12 border-4 border-zinc-700 border-t-white rounded-full animate-spin"></div></div>
  },
  {
    name: "Colored Spinner",
    code: `<div className="flex items-center justify-center">
  <div className="w-8 h-8 border-2 border-zinc-700 border-t-green-500 rounded-full animate-spin"></div>
</div>`,
    preview: <div className="flex items-center justify-center"><div className="w-8 h-8 border-2 border-zinc-700 border-t-green-500 rounded-full animate-spin"></div></div>
  },
  {
    name: "Spinner with Text",
    code: `<div className="flex flex-col items-center justify-center gap-3">
  <div className="w-8 h-8 border-2 border-zinc-700 border-t-white rounded-full animate-spin"></div>
  <div className="text-zinc-400 text-sm">Loading...</div>
</div>`,
    preview: <div className="flex flex-col items-center justify-center gap-3"><div className="w-8 h-8 border-2 border-zinc-700 border-t-white rounded-full animate-spin"></div><div className="text-zinc-400 text-sm">Loading...</div></div>
  },
  {
    name: "Dots Spinner",
    code: `<div className="flex items-center justify-center gap-1">
  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
</div>`,
    preview: <div className="flex items-center justify-center gap-1"><div className="w-2 h-2 bg-white rounded-full animate-bounce"></div><div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div><div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div></div>
  },
  {
    name: "Pulse Spinner",
    code: `<div className="flex items-center justify-center">
  <div className="w-8 h-8 bg-white rounded-full animate-pulse"></div>
</div>`,
    preview: <div className="flex items-center justify-center"><div className="w-8 h-8 bg-white rounded-full animate-pulse"></div></div>
  },
  {
    name: "Ring Spinner",
    code: `<div className="flex items-center justify-center">
  <div className="relative w-8 h-8">
    <div className="absolute inset-0 border-2 border-zinc-700 rounded-full"></div>
    <div className="absolute inset-0 border-2 border-transparent border-t-white rounded-full animate-spin"></div>
  </div>
</div>`,
    preview: <div className="flex items-center justify-center"><div className="relative w-8 h-8"><div className="absolute inset-0 border-2 border-zinc-700 rounded-full"></div><div className="absolute inset-0 border-2 border-transparent border-t-white rounded-full animate-spin"></div></div></div>
  },
  {
    name: "Button Spinner",
    code: `<button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
  <div className="w-4 h-4 border-2 border-zinc-400 border-t-white rounded-full animate-spin"></div>
  Loading...
</button>`,
    preview: <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"><div className="w-4 h-4 border-2 border-zinc-400 border-t-white rounded-full animate-spin"></div>Loading...</button>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function SpinnerExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Spinner</h1>
          <p className="text-lg text-zinc-400">
            Indicadores de carga y animaciones. Incluye variantes básicas, circulares, con texto, dots y pulse.
          </p>
        </header>

        <div className="space-y-8">
          {spinnerVariants.map((variant, index) => (
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