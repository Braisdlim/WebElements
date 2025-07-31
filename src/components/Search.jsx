import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const searchVariants = [
  {
    name: "Basic Search",
    code: `<div className="relative max-w-md">
  <input 
    type="text" 
    placeholder="Search..."
    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
  />
  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white">
    🔍
  </button>
</div>`,
    preview: (
      <div className="relative max-w-md">
        <input 
          type="text" 
          placeholder="Search..."
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white">
          🔍
        </button>
      </div>
    )
  },
  {
    name: "Search with Dropdown",
    code: `<div className="relative max-w-md">
  <input 
    type="text" 
    placeholder="Search products..."
    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
  />
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg">
    <div className="p-2">
      <div className="px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-700 rounded cursor-pointer">
        Product 1
      </div>
      <div className="px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-700 rounded cursor-pointer">
        Product 2
      </div>
      <div className="px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-700 rounded cursor-pointer">
        Product 3
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
        <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg">
          <div className="p-2">
            <div className="px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-700 rounded cursor-pointer">
              Product 1
            </div>
            <div className="px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-700 rounded cursor-pointer">
              Product 2
            </div>
            <div className="px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-700 rounded cursor-pointer">
              Product 3
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Search with Filters",
    code: `<div className="space-y-4">
  <div className="flex gap-2">
    <input 
      type="text" 
      placeholder="Search..."
      className="flex-1 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
    />
    <button className="px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors">
      Filter
    </button>
  </div>
  <div className="flex gap-2">
    <span className="px-2 py-1 bg-zinc-700 text-white text-xs rounded">Category</span>
    <span className="px-2 py-1 bg-zinc-700 text-white text-xs rounded">Price</span>
    <span className="px-2 py-1 bg-zinc-700 text-white text-xs rounded">Rating</span>
  </div>
</div>`,
    preview: (
      <div className="space-y-4">
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Search..."
            className="flex-1 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
          />
          <button className="px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors">
            Filter
          </button>
        </div>
        <div className="flex gap-2">
          <span className="px-2 py-1 bg-zinc-700 text-white text-xs rounded">Category</span>
          <span className="px-2 py-1 bg-zinc-700 text-white text-xs rounded">Price</span>
          <span className="px-2 py-1 bg-zinc-700 text-white text-xs rounded">Rating</span>
        </div>
      </div>
    )
  },
  {
    name: "Advanced Search",
    code: `<div className="space-y-4">
  <div className="flex gap-2">
    <input 
      type="text" 
      placeholder="Search..."
      className="flex-1 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
    />
    <select className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500">
      <option>All</option>
      <option>Products</option>
      <option>Articles</option>
    </select>
    <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
      Search
    </button>
  </div>
  <div className="text-sm text-zinc-400">
    Showing 1-10 of 50 results
  </div>
</div>`,
    preview: (
      <div className="space-y-4">
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Search..."
            className="flex-1 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
          />
          <select className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500">
            <option>All</option>
            <option>Products</option>
            <option>Articles</option>
          </select>
          <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
            Search
          </button>
        </div>
        <div className="text-sm text-zinc-400">
          Showing 1-10 of 50 results
        </div>
      </div>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function Search() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Search</h1>
          <p className="text-lg text-zinc-400">
            Componentes de búsqueda con diferentes funcionalidades y estilos.
          </p>
        </header>

        <div className="space-y-8">
          {searchVariants.map((variant, index) => (
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