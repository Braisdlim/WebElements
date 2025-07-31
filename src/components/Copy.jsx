import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const copyVariants = [
  {
    name: "Basic Copy Button",
    code: `<div className="flex items-center gap-4">
  <div className="bg-zinc-800 rounded-lg p-4 flex-1">
    <code className="text-white text-sm">npm install react-router-dom</code>
  </div>
  <button className="px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors">
    Copy
  </button>
</div>`,
    preview: (
      <div className="flex items-center gap-4">
        <div className="bg-zinc-800 rounded-lg p-4 flex-1">
          <code className="text-white text-sm">npm install react-router-dom</code>
        </div>
        <button className="px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors">
          Copy
        </button>
      </div>
    )
  },
  {
    name: "Copy with Icon",
    code: `<div className="flex items-center gap-4">
  <div className="bg-zinc-800 rounded-lg p-4 flex-1">
    <code className="text-white text-sm">git clone https://github.com/user/repo.git</code>
  </div>
  <button className="px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors flex items-center gap-2">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
    Copy
  </button>
</div>`,
    preview: (
      <div className="flex items-center gap-4">
        <div className="bg-zinc-800 rounded-lg p-4 flex-1">
          <code className="text-white text-sm">git clone https://github.com/user/repo.git</code>
        </div>
        <button className="px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy
        </button>
      </div>
    )
  },
  {
    name: "Copy with Feedback",
    code: `<div className="flex items-center gap-4">
  <div className="bg-zinc-800 rounded-lg p-4 flex-1">
    <code className="text-white text-sm">curl -X POST https://api.example.com/data</code>
  </div>
  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    Copied!
  </button>
</div>`,
    preview: (
      <div className="flex items-center gap-4">
        <div className="bg-zinc-800 rounded-lg p-4 flex-1">
          <code className="text-white text-sm">curl -X POST https://api.example.com/data</code>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </button>
      </div>
    )
  },
  {
    name: "Copy with Tooltip",
    code: `<div className="relative">
  <div className="flex items-center gap-4">
    <div className="bg-zinc-800 rounded-lg p-4 flex-1">
      <code className="text-white text-sm">docker run -d -p 3000:3000 myapp</code>
    </div>
    <button className="px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors relative group">
      Copy
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
        Copy to clipboard
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900"></div>
      </div>
    </button>
  </div>
</div>`,
    preview: (
      <div className="relative">
        <div className="flex items-center gap-4">
          <div className="bg-zinc-800 rounded-lg p-4 flex-1">
            <code className="text-white text-sm">docker run -d -p 3000:3000 myapp</code>
          </div>
          <button className="px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors relative group">
            Copy
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Copy to clipboard
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900"></div>
            </div>
          </button>
        </div>
      </div>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function Copy() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Copy</h1>
          <p className="text-lg text-zinc-400">
            Componentes de copia para facilitar la duplicación de contenido al portapapeles.
          </p>
        </header>

        <div className="space-y-8">
          {copyVariants.map((variant, index) => (
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