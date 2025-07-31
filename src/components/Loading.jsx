import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const loadingVariants = [
  {
    name: "Spinner Loading",
    code: `<div className="flex items-center justify-center space-x-4">
  <div className="w-8 h-8 border-4 border-zinc-600 border-t-white rounded-full animate-spin"></div>
  <div className="text-white">Loading...</div>
</div>`,
    preview: (
      <div className="flex items-center justify-center space-x-4">
        <div className="w-8 h-8 border-4 border-zinc-600 border-t-white rounded-full animate-spin"></div>
        <div className="text-white">Loading...</div>
      </div>
    )
  },
  {
    name: "Dots Loading",
    code: `<div className="flex items-center justify-center space-x-2">
  <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
  <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
  <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
</div>`,
    preview: (
      <div className="flex items-center justify-center space-x-2">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
      </div>
    )
  },
  {
    name: "Skeleton Loading",
    code: `<div className="max-w-md space-y-4">
  <div className="bg-zinc-800 rounded-lg p-4">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-zinc-700 rounded-full animate-pulse"></div>
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-zinc-700 rounded animate-pulse"></div>
        <div className="h-3 bg-zinc-700 rounded w-3/4 animate-pulse"></div>
      </div>
    </div>
    <div className="mt-4 space-y-2">
      <div className="h-3 bg-zinc-700 rounded animate-pulse"></div>
      <div className="h-3 bg-zinc-700 rounded w-5/6 animate-pulse"></div>
      <div className="h-3 bg-zinc-700 rounded w-4/6 animate-pulse"></div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="max-w-md space-y-4">
        <div className="bg-zinc-800 rounded-lg p-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-zinc-700 rounded-full animate-pulse"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-zinc-700 rounded animate-pulse"></div>
              <div className="h-3 bg-zinc-700 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-3 bg-zinc-700 rounded animate-pulse"></div>
            <div className="h-3 bg-zinc-700 rounded w-5/6 animate-pulse"></div>
            <div className="h-3 bg-zinc-700 rounded w-4/6 animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Progress Loading",
    code: `<div className="max-w-md space-y-4">
  <div className="w-full bg-zinc-700 rounded-full h-2">
    <div className="bg-white h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
  </div>
  <div className="text-center text-white text-sm">Loading... 60%</div>
</div>`,
    preview: (
      <div className="max-w-md space-y-4">
        <div className="w-full bg-zinc-700 rounded-full h-2">
          <div className="bg-white h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
        </div>
        <div className="text-center text-white text-sm">Loading... 60%</div>
      </div>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function Loading() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Loading</h1>
          <p className="text-lg text-zinc-400">
            Componentes de carga para mejorar la experiencia del usuario durante las operaciones.
          </p>
        </header>

        <div className="space-y-8">
          {loadingVariants.map((variant, index) => (
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