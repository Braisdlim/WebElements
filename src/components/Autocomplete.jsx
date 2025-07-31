import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const autocompleteVariants = [
  {
    name: "Basic Autocomplete",
    code: `<div className="relative max-w-md">
  <input 
    type="text" 
    placeholder="Search countries..."
    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
  />
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg">
    <div className="py-1">
      <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm">
        United States
      </div>
      <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm">
        United Kingdom
      </div>
      <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm">
        Canada
      </div>
      <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm">
        Australia
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative max-w-md">
        <input 
          type="text" 
          placeholder="Search countries..."
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
        />
        <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg">
          <div className="py-1">
            <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm">
              United States
            </div>
            <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm">
              United Kingdom
            </div>
            <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm">
              Canada
            </div>
            <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm">
              Australia
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Autocomplete with Icons",
    code: `<div className="relative max-w-md">
  <input 
    type="text" 
    placeholder="Search products..."
    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
  />
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg">
    <div className="py-1">
      <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm flex items-center gap-3">
        <span>📱</span>
        <span>iPhone 13 Pro</span>
      </div>
      <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm flex items-center gap-3">
        <span>💻</span>
        <span>MacBook Air</span>
      </div>
      <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm flex items-center gap-3">
        <span>⌚</span>
        <span>Apple Watch</span>
      </div>
      <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm flex items-center gap-3">
        <span>🎧</span>
        <span>AirPods Pro</span>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative max-w-md">
        <input 
          type="text" 
          placeholder="Search products..."
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
        />
        <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg">
          <div className="py-1">
            <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm flex items-center gap-3">
              <span>📱</span>
              <span>iPhone 13 Pro</span>
            </div>
            <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm flex items-center gap-3">
              <span>💻</span>
              <span>MacBook Air</span>
            </div>
            <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm flex items-center gap-3">
              <span>⌚</span>
              <span>Apple Watch</span>
            </div>
            <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm flex items-center gap-3">
              <span>🎧</span>
              <span>AirPods Pro</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Autocomplete with Categories",
    code: `<div className="relative max-w-md">
  <input 
    type="text" 
    placeholder="Search anything..."
    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
  />
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg">
    <div className="py-1">
      <div className="px-4 py-1 text-zinc-400 text-xs font-medium">Recent Searches</div>
      <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm">
        React components
      </div>
      <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm">
        Tailwind CSS
      </div>
      <div className="border-t border-zinc-700 my-1"></div>
      <div className="px-4 py-1 text-zinc-400 text-xs font-medium">Suggestions</div>
      <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm">
        React hooks
      </div>
      <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm">
        React router
      </div>
      <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm">
        React state
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative max-w-md">
        <input 
          type="text" 
          placeholder="Search anything..."
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
        />
        <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg">
          <div className="py-1">
            <div className="px-4 py-1 text-zinc-400 text-xs font-medium">Recent Searches</div>
            <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm">
              React components
            </div>
            <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm">
              Tailwind CSS
            </div>
            <div className="border-t border-zinc-700 my-1"></div>
            <div className="px-4 py-1 text-zinc-400 text-xs font-medium">Suggestions</div>
            <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm">
              React hooks
            </div>
            <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm">
              React router
            </div>
            <div className="px-4 py-2 text-white hover:bg-zinc-800 cursor-pointer text-sm">
              React state
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Autocomplete with Loading",
    code: `<div className="relative max-w-md">
  <input 
    type="text" 
    placeholder="Search users..."
    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
  />
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg">
    <div className="py-1">
      <div className="px-4 py-2 text-zinc-400 text-sm flex items-center gap-2">
        <div className="w-4 h-4 border-2 border-zinc-600 border-t-white rounded-full animate-spin"></div>
        <span>Searching...</span>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative max-w-md">
        <input 
          type="text" 
          placeholder="Search users..."
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
        />
        <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg">
          <div className="py-1">
            <div className="px-4 py-2 text-zinc-400 text-sm flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-zinc-600 border-t-white rounded-full animate-spin"></div>
              <span>Searching...</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function Autocomplete() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Autocomplete</h1>
          <p className="text-lg text-zinc-400">
            Entrada con sugerencias automáticas para mejorar la experiencia de búsqueda.
          </p>
        </header>

        <div className="space-y-8">
          {autocompleteVariants.map((variant, index) => (
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