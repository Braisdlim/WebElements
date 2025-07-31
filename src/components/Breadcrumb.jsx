import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const breadcrumbVariants = [
  {
    name: "Basic Breadcrumb",
    code: `<nav className="flex items-center space-x-2 text-sm">
  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
    Home
  </a>
  <span className="text-zinc-600">/</span>
  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
    Products
  </a>
  <span className="text-zinc-600">/</span>
  <span className="text-white">Current Page</span>
</nav>`,
    preview: <nav className="flex items-center space-x-2 text-sm"><a href="#" className="text-zinc-400 hover:text-white transition-colors">Home</a><span className="text-zinc-600">/</span><a href="#" className="text-zinc-400 hover:text-white transition-colors">Products</a><span className="text-zinc-600">/</span><span className="text-white">Current Page</span></nav>
  },
  {
    name: "Breadcrumb with Icons",
    code: `<nav className="flex items-center space-x-2 text-sm">
  <a href="#" className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
    <span>🏠</span>
    <span>Home</span>
  </a>
  <span className="text-zinc-600">/</span>
  <a href="#" className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
    <span>📁</span>
    <span>Documents</span>
  </a>
  <span className="text-zinc-600">/</span>
  <span className="flex items-center gap-1 text-white">
    <span>📄</span>
    <span>Current Page</span>
  </span>
</nav>`,
    preview: <nav className="flex items-center space-x-2 text-sm"><a href="#" className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"><span>🏠</span><span>Home</span></a><span className="text-zinc-600">/</span><a href="#" className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"><span>📁</span><span>Documents</span></a><span className="text-zinc-600">/</span><span className="flex items-center gap-1 text-white"><span>📄</span><span>Current Page</span></span></nav>
  },
  {
    name: "Breadcrumb with Custom Separator",
    code: `<nav className="flex items-center space-x-2 text-sm">
  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
    Home
  </a>
  <span className="text-zinc-600">›</span>
  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
    Products
  </a>
  <span className="text-zinc-600">›</span>
  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
    Category
  </a>
  <span className="text-zinc-600">›</span>
  <span className="text-white">Current Page</span>
</nav>`,
    preview: <nav className="flex items-center space-x-2 text-sm"><a href="#" className="text-zinc-400 hover:text-white transition-colors">Home</a><span className="text-zinc-600">›</span><a href="#" className="text-zinc-400 hover:text-white transition-colors">Products</a><span className="text-zinc-600">›</span><a href="#" className="text-zinc-400 hover:text-white transition-colors">Category</a><span className="text-zinc-600">›</span><span className="text-white">Current Page</span></nav>
  },
  {
    name: "Breadcrumb with Background",
    code: `<nav className="flex items-center space-x-2 px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-sm">
  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
    Home
  </a>
  <span className="text-zinc-600">/</span>
  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
    Products
  </a>
  <span className="text-zinc-600">/</span>
  <span className="text-white">Current Page</span>
</nav>`,
    preview: <nav className="flex items-center space-x-2 px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-sm"><a href="#" className="text-zinc-400 hover:text-white transition-colors">Home</a><span className="text-zinc-600">/</span><a href="#" className="text-zinc-400 hover:text-white transition-colors">Products</a><span className="text-zinc-600">/</span><span className="text-white">Current Page</span></nav>
  },
  {
    name: "Large Breadcrumb",
    code: `<nav className="flex items-center space-x-3 text-lg">
  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
    Home
  </a>
  <span className="text-zinc-600">/</span>
  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
    Products
  </a>
  <span className="text-zinc-600">/</span>
  <span className="text-white">Current Page</span>
</nav>`,
    preview: <nav className="flex items-center space-x-3 text-lg"><a href="#" className="text-zinc-400 hover:text-white transition-colors">Home</a><span className="text-zinc-600">/</span><a href="#" className="text-zinc-400 hover:text-white transition-colors">Products</a><span className="text-zinc-600">/</span><span className="text-white">Current Page</span></nav>
  },
  {
    name: "Breadcrumb with Dropdown",
    code: `<nav className="flex items-center space-x-2 text-sm">
  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
    Home
  </a>
  <span className="text-zinc-600">/</span>
  <div className="relative group">
    <button className="text-zinc-400 hover:text-white transition-colors">
      Products ▼
    </button>
    <div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
      <div className="py-1">
        <a href="#" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors">
          Electronics
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors">
          Clothing
        </a>
      </div>
    </div>
  </div>
  <span className="text-zinc-600">/</span>
  <span className="text-white">Current Page</span>
</nav>`,
    preview: <nav className="flex items-center space-x-2 text-sm"><a href="#" className="text-zinc-400 hover:text-white transition-colors">Home</a><span className="text-zinc-600">/</span><div className="relative group"><button className="text-zinc-400 hover:text-white transition-colors">Products ▼</button><div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"><div className="py-1"><a href="#" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors">Electronics</a><a href="#" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors">Clothing</a></div></div></div><span className="text-zinc-600">/</span><span className="text-white">Current Page</span></nav>
  },
  {
    name: "Compact Breadcrumb",
    code: `<nav className="flex items-center space-x-1 text-xs">
  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
    Home
  </a>
  <span className="text-zinc-600">/</span>
  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
    Products
  </a>
  <span className="text-zinc-600">/</span>
  <span className="text-white">Current Page</span>
</nav>`,
    preview: <nav className="flex items-center space-x-1 text-xs"><a href="#" className="text-zinc-400 hover:text-white transition-colors">Home</a><span className="text-zinc-600">/</span><a href="#" className="text-zinc-400 hover:text-white transition-colors">Products</a><span className="text-zinc-600">/</span><span className="text-white">Current Page</span></nav>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function BreadcrumbExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Breadcrumb</h1>
          <p className="text-lg text-zinc-400">
            Navegación de migas de pan para mostrar la ubicación actual. Incluye variantes básicas, con iconos, separadores personalizados y dropdowns.
          </p>
        </header>

        <div className="space-y-8">
          {breadcrumbVariants.map((variant, index) => (
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