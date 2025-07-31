import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const tabsVariants = [
  {
    name: "Basic Tabs",
    code: `<div className="space-y-4">
  <div className="flex border-b border-zinc-700">
    <button className="px-4 py-2 text-white border-b-2 border-white font-medium">
      Overview
    </button>
    <button className="px-4 py-2 text-zinc-400 hover:text-white transition-colors">
      Features
    </button>
    <button className="px-4 py-2 text-zinc-400 hover:text-white transition-colors">
      Pricing
    </button>
  </div>
  <div className="p-4">
    <p className="text-zinc-300">This is the overview content.</p>
  </div>
</div>`,
    preview: <div className="space-y-4"><div className="flex border-b border-zinc-700"><button className="px-4 py-2 text-white border-b-2 border-white font-medium">Overview</button><button className="px-4 py-2 text-zinc-400 hover:text-white transition-colors">Features</button><button className="px-4 py-2 text-zinc-400 hover:text-white transition-colors">Pricing</button></div><div className="p-4"><p className="text-zinc-300">This is the overview content.</p></div></div>
  },
  {
    name: "Tabs with Icons",
    code: `<div className="space-y-4">
  <div className="flex border-b border-zinc-700">
    <button className="flex items-center gap-2 px-4 py-2 text-white border-b-2 border-white font-medium">
      <span>📊</span>
      Dashboard
    </button>
    <button className="flex items-center gap-2 px-4 py-2 text-zinc-400 hover:text-white transition-colors">
      <span>👤</span>
      Profile
    </button>
    <button className="flex items-center gap-2 px-4 py-2 text-zinc-400 hover:text-white transition-colors">
      <span>⚙️</span>
      Settings
    </button>
  </div>
  <div className="p-4">
    <p className="text-zinc-300">Dashboard content with icons.</p>
  </div>
</div>`,
    preview: <div className="space-y-4"><div className="flex border-b border-zinc-700"><button className="flex items-center gap-2 px-4 py-2 text-white border-b-2 border-white font-medium"><span>📊</span>Dashboard</button><button className="flex items-center gap-2 px-4 py-2 text-zinc-400 hover:text-white transition-colors"><span>👤</span>Profile</button><button className="flex items-center gap-2 px-4 py-2 text-zinc-400 hover:text-white transition-colors"><span>⚙️</span>Settings</button></div><div className="p-4"><p className="text-zinc-300">Dashboard content with icons.</p></div></div>
  },
  {
    name: "Vertical Tabs",
    code: `<div className="flex gap-6">
  <div className="flex flex-col border-r border-zinc-700">
    <button className="px-4 py-2 text-white bg-zinc-800 border-r-2 border-white font-medium">
      Overview
    </button>
    <button className="px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
      Features
    </button>
    <button className="px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
      Pricing
    </button>
  </div>
  <div className="flex-1 p-4">
    <p className="text-zinc-300">Vertical tabs layout.</p>
  </div>
</div>`,
    preview: <div className="flex gap-6"><div className="flex flex-col border-r border-zinc-700"><button className="px-4 py-2 text-white bg-zinc-800 border-r-2 border-white font-medium">Overview</button><button className="px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">Features</button><button className="px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">Pricing</button></div><div className="flex-1 p-4"><p className="text-zinc-300">Vertical tabs layout.</p></div></div>
  },
  {
    name: "Pill Tabs",
    code: `<div className="space-y-4">
  <div className="flex bg-zinc-800 rounded-lg p-1">
    <button className="px-4 py-2 text-white bg-zinc-700 rounded-md font-medium">
      Overview
    </button>
    <button className="px-4 py-2 text-zinc-400 hover:text-white transition-colors">
      Features
    </button>
    <button className="px-4 py-2 text-zinc-400 hover:text-white transition-colors">
      Pricing
    </button>
  </div>
  <div className="p-4">
    <p className="text-zinc-300">Pill-style tabs with rounded background.</p>
  </div>
</div>`,
    preview: <div className="space-y-4"><div className="flex bg-zinc-800 rounded-lg p-1"><button className="px-4 py-2 text-white bg-zinc-700 rounded-md font-medium">Overview</button><button className="px-4 py-2 text-zinc-400 hover:text-white transition-colors">Features</button><button className="px-4 py-2 text-zinc-400 hover:text-white transition-colors">Pricing</button></div><div className="p-4"><p className="text-zinc-300">Pill-style tabs with rounded background.</p></div></div>
  },
  {
    name: "Underline Tabs",
    code: `<div className="space-y-4">
  <div className="flex gap-8">
    <button className="px-2 py-2 text-white border-b-2 border-white font-medium">
      Overview
    </button>
    <button className="px-2 py-2 text-zinc-400 hover:text-white border-b-2 border-transparent hover:border-zinc-500 transition-colors">
      Features
    </button>
    <button className="px-2 py-2 text-zinc-400 hover:text-white border-b-2 border-transparent hover:border-zinc-500 transition-colors">
      Pricing
    </button>
  </div>
  <div className="p-4">
    <p className="text-zinc-300">Clean underline tabs with spacing.</p>
  </div>
</div>`,
    preview: <div className="space-y-4"><div className="flex gap-8"><button className="px-2 py-2 text-white border-b-2 border-white font-medium">Overview</button><button className="px-2 py-2 text-zinc-400 hover:text-white border-b-2 border-transparent hover:border-zinc-500 transition-colors">Features</button><button className="px-2 py-2 text-zinc-400 hover:text-white border-b-2 border-transparent hover:border-zinc-500 transition-colors">Pricing</button></div><div className="p-4"><p className="text-zinc-300">Clean underline tabs with spacing.</p></div></div>
  },
  {
    name: "Card Tabs",
    code: `<div className="space-y-4">
  <div className="flex gap-2">
    <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg font-medium">
      Overview
    </button>
    <button className="px-4 py-2 bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
      Features
    </button>
    <button className="px-4 py-2 bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
      Pricing
    </button>
  </div>
  <div className="p-4 bg-zinc-900 rounded-lg">
    <p className="text-zinc-300">Card-style tabs with individual backgrounds.</p>
  </div>
</div>`,
    preview: <div className="space-y-4"><div className="flex gap-2"><button className="px-4 py-2 bg-zinc-800 text-white rounded-lg font-medium">Overview</button><button className="px-4 py-2 bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">Features</button><button className="px-4 py-2 bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">Pricing</button></div><div className="p-4 bg-zinc-900 rounded-lg"><p className="text-zinc-300">Card-style tabs with individual backgrounds.</p></div></div>
  },
  {
    name: "Responsive Tabs",
    code: `<div className="space-y-4">
  <div className="flex flex-wrap gap-2">
    <button className="px-4 py-2 text-white border-b-2 border-white font-medium whitespace-nowrap">
      Overview
    </button>
    <button className="px-4 py-2 text-zinc-400 hover:text-white border-b-2 border-transparent hover:border-zinc-500 transition-colors whitespace-nowrap">
      Features
    </button>
    <button className="px-4 py-2 text-zinc-400 hover:text-white border-b-2 border-transparent hover:border-zinc-500 transition-colors whitespace-nowrap">
      Pricing
    </button>
    <button className="px-4 py-2 text-zinc-400 hover:text-white border-b-2 border-transparent hover:border-zinc-500 transition-colors whitespace-nowrap">
      Documentation
    </button>
  </div>
  <div className="p-4">
    <p className="text-zinc-300">Responsive tabs that wrap on smaller screens.</p>
  </div>
</div>`,
    preview: <div className="space-y-4"><div className="flex flex-wrap gap-2"><button className="px-4 py-2 text-white border-b-2 border-white font-medium whitespace-nowrap">Overview</button><button className="px-4 py-2 text-zinc-400 hover:text-white border-b-2 border-transparent hover:border-zinc-500 transition-colors whitespace-nowrap">Features</button><button className="px-4 py-2 text-zinc-400 hover:text-white border-b-2 border-transparent hover:border-zinc-500 transition-colors whitespace-nowrap">Pricing</button><button className="px-4 py-2 text-zinc-400 hover:text-white border-b-2 border-transparent hover:border-zinc-500 transition-colors whitespace-nowrap">Documentation</button></div><div className="p-4"><p className="text-zinc-300">Responsive tabs that wrap on smaller screens.</p></div></div>
  },
  {
    name: "Animated Tabs",
    code: `<div className="space-y-4">
  <div className="flex border-b border-zinc-700 relative">
    <button className="px-4 py-2 text-white font-medium relative z-10">
      Overview
    </button>
    <button className="px-4 py-2 text-zinc-400 hover:text-white transition-colors">
      Features
    </button>
    <button className="px-4 py-2 text-zinc-400 hover:text-white transition-colors">
      Pricing
    </button>
    <div className="absolute bottom-0 left-0 w-20 h-0.5 bg-white transition-all duration-300"></div>
  </div>
  <div className="p-4">
    <p className="text-zinc-300">Tabs with animated underline indicator.</p>
  </div>
</div>`,
    preview: <div className="space-y-4"><div className="flex border-b border-zinc-700 relative"><button className="px-4 py-2 text-white font-medium relative z-10">Overview</button><button className="px-4 py-2 text-zinc-400 hover:text-white transition-colors">Features</button><button className="px-4 py-2 text-zinc-400 hover:text-white transition-colors">Pricing</button><div className="absolute bottom-0 left-0 w-20 h-0.5 bg-white transition-all duration-300"></div></div><div className="p-4"><p className="text-zinc-300">Tabs with animated underline indicator.</p></div></div>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function TabsExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Tabs</h1>
          <p className="text-lg text-zinc-400">
            Pestañas para organizar contenido en secciones. Incluye variantes básicas, con iconos, verticales, pill-style y animadas.
          </p>
        </header>

        <div className="space-y-8">
          {tabsVariants.map((variant, index) => (
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