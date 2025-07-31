import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const cardVariants = [
  {
    name: "Basic Card",
    code: `<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
  <h3 className="text-xl font-semibold text-white mb-2">Card Title</h3>
  <p className="text-zinc-400">
    This is a basic card component with title and description.
  </p>
</div>`,
    preview: <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-xl font-semibold text-white mb-2">Card Title</h3><p className="text-zinc-400">This is a basic card component with title and description.</p></div>
  },
  {
    name: "Card with Image",
    code: `<div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
  <div className="w-full h-32 bg-zinc-800"></div>
  <div className="p-6">
    <h3 className="text-xl font-semibold text-white mb-2">Card with Image</h3>
    <p className="text-zinc-400 mb-4">
      Card featuring an image placeholder and content below.
    </p>
    <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
      Read More
    </button>
  </div>
</div>`,
    preview: <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"><div className="w-full h-32 bg-zinc-800"></div><div className="p-6"><h3 className="text-xl font-semibold text-white mb-2">Card with Image</h3><p className="text-zinc-400 mb-4">Card featuring an image placeholder and content below.</p><button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Read More</button></div></div>
  },
  {
    name: "Hover Card",
    code: `<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 hover:shadow-lg transition-all duration-300 cursor-pointer group">
  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zinc-200 transition-colors">
    Hover Card
  </h3>
  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
    This card has hover effects and smooth transitions.
  </p>
</div>`,
    preview: <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 hover:shadow-lg transition-all duration-300 cursor-pointer group"><h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zinc-200 transition-colors">Hover Card</h3><p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">This card has hover effects and smooth transitions.</p></div>
  },
  {
    name: "Card with Actions",
    code: `<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
  <h3 className="text-xl font-semibold text-white mb-2">Card with Actions</h3>
  <p className="text-zinc-400 mb-4">
    Card with multiple action buttons at the bottom.
  </p>
  <div className="flex gap-2">
    <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
      Primary
    </button>
    <button className="px-4 py-2 border border-zinc-700 text-zinc-300 rounded-lg hover:bg-zinc-800 transition-colors">
      Secondary
    </button>
  </div>
</div>`,
    preview: <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-xl font-semibold text-white mb-2">Card with Actions</h3><p className="text-zinc-400 mb-4">Card with multiple action buttons at the bottom.</p><div className="flex gap-2"><button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Primary</button><button className="px-4 py-2 border border-zinc-700 text-zinc-300 rounded-lg hover:bg-zinc-800 transition-colors">Secondary</button></div></div>
  },
  {
    name: "Card with Badge",
    code: `<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-xl font-semibold text-white">Card with Badge</h3>
    <span className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded-full text-xs">
      New
    </span>
  </div>
  <p className="text-zinc-400">
    Card featuring a badge indicator in the top right corner.
  </p>
</div>`,
    preview: <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><div className="flex items-center justify-between mb-4"><h3 className="text-xl font-semibold text-white">Card with Badge</h3><span className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded-full text-xs">New</span></div><p className="text-zinc-400">Card featuring a badge indicator in the top right corner.</p></div>
  },
  {
    name: "Card with Avatar",
    code: `<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
  <div className="flex items-center gap-4 mb-4">
    <div className="w-12 h-12 bg-zinc-700 rounded-full"></div>
    <div>
      <h3 className="text-xl font-semibold text-white">Card with Avatar</h3>
      <p className="text-zinc-400 text-sm">User Name</p>
    </div>
  </div>
  <p className="text-zinc-400">
    Card with user avatar and profile information.
  </p>
</div>`,
    preview: <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><div className="flex items-center gap-4 mb-4"><div className="w-12 h-12 bg-zinc-700 rounded-full"></div><div><h3 className="text-xl font-semibold text-white">Card with Avatar</h3><p className="text-zinc-400 text-sm">User Name</p></div></div><p className="text-zinc-400">Card with user avatar and profile information.</p></div>
  },
  {
    name: "Card with Stats",
    code: `<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
  <h3 className="text-xl font-semibold text-white mb-4">Card with Stats</h3>
  <div className="grid grid-cols-3 gap-4">
    <div className="text-center">
      <div className="text-2xl font-bold text-white">1.2k</div>
      <div className="text-zinc-400 text-sm">Views</div>
    </div>
    <div className="text-center">
      <div className="text-2xl font-bold text-white">89</div>
      <div className="text-zinc-400 text-sm">Likes</div>
    </div>
    <div className="text-center">
      <div className="text-2xl font-bold text-white">23</div>
      <div className="text-zinc-400 text-sm">Comments</div>
    </div>
  </div>
</div>`,
    preview: <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-xl font-semibold text-white mb-4">Card with Stats</h3><div className="grid grid-cols-3 gap-4"><div className="text-center"><div className="text-2xl font-bold text-white">1.2k</div><div className="text-zinc-400 text-sm">Views</div></div><div className="text-center"><div className="text-2xl font-bold text-white">89</div><div className="text-zinc-400 text-sm">Likes</div></div><div className="text-center"><div className="text-2xl font-bold text-white">23</div><div className="text-zinc-400 text-sm">Comments</div></div></div></div>
  },
  {
    name: "Card with Progress",
    code: `<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
  <h3 className="text-xl font-semibold text-white mb-4">Card with Progress</h3>
  <div className="space-y-3">
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-zinc-300">Progress</span>
        <span className="text-zinc-400">75%</span>
      </div>
      <div className="w-full bg-zinc-800 rounded-full h-2">
        <div className="bg-white h-2 rounded-full" style={{width: '75%'}}></div>
      </div>
    </div>
    <p className="text-zinc-400 text-sm">
      Progress indicator showing completion status.
    </p>
  </div>
</div>`,
    preview: <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"><h3 className="text-xl font-semibold text-white mb-4">Card with Progress</h3><div className="space-y-3"><div><div className="flex justify-between text-sm mb-1"><span className="text-zinc-300">Progress</span><span className="text-zinc-400">75%</span></div><div className="w-full bg-zinc-800 rounded-full h-2"><div className="bg-white h-2 rounded-full" style={{width: '75%'}}></div></div></div><p className="text-zinc-400 text-sm">Progress indicator showing completion status.</p></div></div>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function CardExamples() {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
        >
          ← Volver a la galería
        </button>
      </div>
      
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Card</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Tarjetas para mostrar información estructurada. Incluye variantes con imágenes, acciones, badges, avatares y efectos hover.
        </p>
      </header>

        <div className="space-y-8">
          {cardVariants.map((variant, index) => (
            <motion.div
              key={variant.name}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 relative"
              style={{ zIndex: cardVariants.length - index }}
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
  );
} 