import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const paginationVariants = [
  {
    name: "Basic Pagination",
    code: `<div className="flex items-center gap-2">
  <button className="px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
    ← Previous
  </button>
  <div className="flex gap-1">
    <button className="w-8 h-8 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">1</button>
    <button className="w-8 h-8 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors">2</button>
    <button className="w-8 h-8 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">3</button>
    <span className="px-2 py-2 text-zinc-400">...</span>
    <button className="w-8 h-8 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">10</button>
  </div>
  <button className="px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
    Next →
  </button>
</div>`,
    preview: (
      <div className="flex items-center gap-2">
        <button className="px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
          ← Previous
        </button>
        <div className="flex gap-1">
          <button className="w-8 h-8 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">1</button>
          <button className="w-8 h-8 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors">2</button>
          <button className="w-8 h-8 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">3</button>
          <span className="px-2 py-2 text-zinc-400">...</span>
          <button className="w-8 h-8 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">10</button>
        </div>
        <button className="px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
          Next →
        </button>
      </div>
    )
  },
  {
    name: "Pagination with Info",
    code: `<div className="flex items-center justify-between">
  <div className="text-zinc-400 text-sm">
    Showing 1 to 10 of 100 results
  </div>
  <div className="flex items-center gap-2">
    <button className="px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
      ← Previous
    </button>
    <div className="flex gap-1">
      <button className="w-8 h-8 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">1</button>
      <button className="w-8 h-8 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors">2</button>
      <button className="w-8 h-8 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">3</button>
      <span className="px-2 py-2 text-zinc-400">...</span>
      <button className="w-8 h-8 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">10</button>
    </div>
    <button className="px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
      Next →
    </button>
  </div>
</div>`,
    preview: (
      <div className="flex items-center justify-between">
        <div className="text-zinc-400 text-sm">
          Showing 1 to 10 of 100 results
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
            ← Previous
          </button>
          <div className="flex gap-1">
            <button className="w-8 h-8 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">1</button>
            <button className="w-8 h-8 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors">2</button>
            <button className="w-8 h-8 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">3</button>
            <span className="px-2 py-2 text-zinc-400">...</span>
            <button className="w-8 h-8 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">10</button>
          </div>
          <button className="px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
            Next →
          </button>
        </div>
      </div>
    )
  },
  {
    name: "Simple Pagination",
    code: `<div className="flex items-center gap-4">
  <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    ← Previous
  </button>
  <span className="text-zinc-400">Page 2 of 10</span>
  <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    Next →
  </button>
</div>`,
    preview: (
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
          ← Previous
        </button>
        <span className="text-zinc-400">Page 2 of 10</span>
        <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
          Next →
        </button>
      </div>
    )
  },
  {
    name: "Pagination with Page Size",
    code: `<div className="flex items-center justify-between">
  <div className="flex items-center gap-2">
    <span className="text-zinc-400 text-sm">Show:</span>
    <select className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-white text-sm">
      <option>10</option>
      <option>25</option>
      <option>50</option>
      <option>100</option>
    </select>
    <span className="text-zinc-400 text-sm">per page</span>
  </div>
  <div className="flex items-center gap-2">
    <button className="px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
      ← Previous
    </button>
    <div className="flex gap-1">
      <button className="w-8 h-8 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">1</button>
      <button className="w-8 h-8 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors">2</button>
      <button className="w-8 h-8 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">3</button>
    </div>
    <button className="px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
      Next →
    </button>
  </div>
</div>`,
    preview: (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-zinc-400 text-sm">Show:</span>
          <select className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-white text-sm">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span className="text-zinc-400 text-sm">per page</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
            ← Previous
          </button>
          <div className="flex gap-1">
            <button className="w-8 h-8 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">1</button>
            <button className="w-8 h-8 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors">2</button>
            <button className="w-8 h-8 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">3</button>
          </div>
          <button className="px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
            Next →
          </button>
        </div>
      </div>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function Pagination() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Pagination</h1>
          <p className="text-lg text-zinc-400">
            Navegación entre páginas con números y flechas para contenido paginado.
          </p>
        </header>

        <div className="space-y-8">
          {paginationVariants.map((variant, index) => (
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