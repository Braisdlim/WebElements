import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const skeletonVariants = [
  {
    name: "Basic Skeleton",
    code: `<div className="space-y-3">
  <div className="w-32 h-4 bg-zinc-800 rounded animate-pulse"></div>
  <div className="w-48 h-4 bg-zinc-800 rounded animate-pulse"></div>
  <div className="w-24 h-4 bg-zinc-800 rounded animate-pulse"></div>
</div>`,
    preview: (
      <div className="space-y-3">
        <div className="w-32 h-4 bg-zinc-800 rounded animate-pulse"></div>
        <div className="w-48 h-4 bg-zinc-800 rounded animate-pulse"></div>
        <div className="w-24 h-4 bg-zinc-800 rounded animate-pulse"></div>
      </div>
    )
  },
  {
    name: "Card Skeleton",
    code: `<div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
  <div className="flex items-center gap-3 mb-3">
    <div className="w-10 h-10 bg-zinc-800 rounded-full animate-pulse"></div>
    <div className="flex-1">
      <div className="w-24 h-3 bg-zinc-800 rounded animate-pulse mb-1"></div>
      <div className="w-16 h-2 bg-zinc-800 rounded animate-pulse"></div>
    </div>
  </div>
  <div className="space-y-2">
    <div className="w-full h-3 bg-zinc-800 rounded animate-pulse"></div>
    <div className="w-3/4 h-3 bg-zinc-800 rounded animate-pulse"></div>
    <div className="w-1/2 h-3 bg-zinc-800 rounded animate-pulse"></div>
  </div>
</div>`,
    preview: (
      <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-zinc-800 rounded-full animate-pulse"></div>
          <div className="flex-1">
            <div className="w-24 h-3 bg-zinc-800 rounded animate-pulse mb-1"></div>
            <div className="w-16 h-2 bg-zinc-800 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="w-full h-3 bg-zinc-800 rounded animate-pulse"></div>
          <div className="w-3/4 h-3 bg-zinc-800 rounded animate-pulse"></div>
          <div className="w-1/2 h-3 bg-zinc-800 rounded animate-pulse"></div>
        </div>
      </div>
    )
  },
  {
    name: "Table Skeleton",
    code: `<div className="space-y-3">
  <div className="flex gap-4">
    <div className="w-20 h-4 bg-zinc-800 rounded animate-pulse"></div>
    <div className="w-32 h-4 bg-zinc-800 rounded animate-pulse"></div>
    <div className="w-24 h-4 bg-zinc-800 rounded animate-pulse"></div>
  </div>
  <div className="flex gap-4">
    <div className="w-20 h-4 bg-zinc-800 rounded animate-pulse"></div>
    <div className="w-32 h-4 bg-zinc-800 rounded animate-pulse"></div>
    <div className="w-24 h-4 bg-zinc-800 rounded animate-pulse"></div>
  </div>
  <div className="flex gap-4">
    <div className="w-20 h-4 bg-zinc-800 rounded animate-pulse"></div>
    <div className="w-32 h-4 bg-zinc-800 rounded animate-pulse"></div>
    <div className="w-24 h-4 bg-zinc-800 rounded animate-pulse"></div>
  </div>
</div>`,
    preview: (
      <div className="space-y-3">
        <div className="flex gap-4">
          <div className="w-20 h-4 bg-zinc-800 rounded animate-pulse"></div>
          <div className="w-32 h-4 bg-zinc-800 rounded animate-pulse"></div>
          <div className="w-24 h-4 bg-zinc-800 rounded animate-pulse"></div>
        </div>
        <div className="flex gap-4">
          <div className="w-20 h-4 bg-zinc-800 rounded animate-pulse"></div>
          <div className="w-32 h-4 bg-zinc-800 rounded animate-pulse"></div>
          <div className="w-24 h-4 bg-zinc-800 rounded animate-pulse"></div>
        </div>
        <div className="flex gap-4">
          <div className="w-20 h-4 bg-zinc-800 rounded animate-pulse"></div>
          <div className="w-32 h-4 bg-zinc-800 rounded animate-pulse"></div>
          <div className="w-24 h-4 bg-zinc-800 rounded animate-pulse"></div>
        </div>
      </div>
    )
  },
  {
    name: "List Skeleton",
    code: `<div className="space-y-3">
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 bg-zinc-800 rounded animate-pulse"></div>
    <div className="flex-1">
      <div className="w-32 h-3 bg-zinc-800 rounded animate-pulse mb-1"></div>
      <div className="w-24 h-2 bg-zinc-800 rounded animate-pulse"></div>
    </div>
  </div>
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 bg-zinc-800 rounded animate-pulse"></div>
    <div className="flex-1">
      <div className="w-28 h-3 bg-zinc-800 rounded animate-pulse mb-1"></div>
      <div className="w-20 h-2 bg-zinc-800 rounded animate-pulse"></div>
    </div>
  </div>
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 bg-zinc-800 rounded animate-pulse"></div>
    <div className="flex-1">
      <div className="w-36 h-3 bg-zinc-800 rounded animate-pulse mb-1"></div>
      <div className="w-16 h-2 bg-zinc-800 rounded animate-pulse"></div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-zinc-800 rounded animate-pulse"></div>
          <div className="flex-1">
            <div className="w-32 h-3 bg-zinc-800 rounded animate-pulse mb-1"></div>
            <div className="w-24 h-2 bg-zinc-800 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-zinc-800 rounded animate-pulse"></div>
          <div className="flex-1">
            <div className="w-28 h-3 bg-zinc-800 rounded animate-pulse mb-1"></div>
            <div className="w-20 h-2 bg-zinc-800 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-zinc-800 rounded animate-pulse"></div>
          <div className="flex-1">
            <div className="w-36 h-3 bg-zinc-800 rounded animate-pulse mb-1"></div>
            <div className="w-16 h-2 bg-zinc-800 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function Skeleton() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Skeleton</h1>
          <p className="text-lg text-zinc-400">
            Esqueletos de carga para mejorar la experiencia de usuario durante la carga de contenido.
          </p>
        </header>

        <div className="space-y-8">
          {skeletonVariants.map((variant, index) => (
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