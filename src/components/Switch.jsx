import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const switchVariants = [
  {
    name: "Basic Switch",
    code: `<div className="flex items-center">
  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-700 transition-colors">
    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
  </button>
</div>`,
    preview: <div className="flex items-center"><button className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-700 transition-colors"><span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span></button></div>
  },
  {
    name: "Switch with Text",
    code: `<div className="flex items-center justify-between">
  <span className="text-zinc-300 text-sm">Enable notifications</span>
  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-700 transition-colors">
    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
  </button>
</div>`,
    preview: <div className="flex items-center justify-between"><span className="text-zinc-300 text-sm">Enable notifications</span><button className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-700 transition-colors"><span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span></button></div>
  },
  {
    name: "Active Switch",
    code: `<div className="flex items-center">
  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-600 transition-colors">
    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
  </button>
</div>`,
    preview: <div className="flex items-center"><button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-600 transition-colors"><span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span></button></div>
  },
  {
    name: "Large Switch",
    code: `<div className="flex items-center">
  <button className="relative inline-flex h-8 w-14 items-center rounded-full bg-zinc-700 transition-colors">
    <span className="inline-block h-6 w-6 transform rounded-full bg-white transition-transform translate-x-1"></span>
  </button>
</div>`,
    preview: <div className="flex items-center"><button className="relative inline-flex h-8 w-14 items-center rounded-full bg-zinc-700 transition-colors"><span className="inline-block h-6 w-6 transform rounded-full bg-white transition-transform translate-x-1"></span></button></div>
  },
  {
    name: "Switch with Icons",
    code: `<div className="flex items-center justify-between">
  <div className="flex items-center gap-2">
    <span className="text-lg">🌙</span>
    <span className="text-zinc-300 text-sm">Dark mode</span>
  </div>
  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-700 transition-colors">
    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
  </button>
</div>`,
    preview: <div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="text-lg">🌙</span><span className="text-zinc-300 text-sm">Dark mode</span></div><button className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-700 transition-colors"><span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span></button></div>
  },
  {
    name: "Switch with Description",
    code: `<div className="space-y-2">
  <div className="flex items-center justify-between">
    <div>
      <div className="text-zinc-300 font-medium">Auto-save</div>
      <div className="text-zinc-400 text-sm">Automatically save your changes</div>
    </div>
    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-700 transition-colors">
      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
    </button>
  </div>
</div>`,
    preview: <div className="space-y-2"><div className="flex items-center justify-between"><div><div className="text-zinc-300 font-medium">Auto-save</div><div className="text-zinc-400 text-sm">Automatically save your changes</div></div><button className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-700 transition-colors"><span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span></button></div></div>
  },
  {
    name: "Colored Switch",
    code: `<div className="flex items-center gap-4">
  <div className="flex items-center justify-between">
    <span className="text-zinc-300 text-sm">Blue theme</span>
    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors">
      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
    </button>
  </div>
  <div className="flex items-center justify-between">
    <span className="text-zinc-300 text-sm">Purple theme</span>
    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600 transition-colors">
      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
    </button>
  </div>
</div>`,
    preview: <div className="flex items-center gap-4"><div className="flex items-center justify-between"><span className="text-zinc-300 text-sm">Blue theme</span><button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors"><span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span></button></div><div className="flex items-center justify-between"><span className="text-zinc-300 text-sm">Purple theme</span><button className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600 transition-colors"><span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span></button></div></div>
  },
  {
    name: "Switch Group",
    code: `<div className="space-y-4">
  <div className="flex items-center justify-between">
    <span className="text-zinc-300 text-sm">Email notifications</span>
    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-600 transition-colors">
      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
    </button>
  </div>
  <div className="flex items-center justify-between">
    <span className="text-zinc-300 text-sm">Push notifications</span>
    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-700 transition-colors">
      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
    </button>
  </div>
  <div className="flex items-center justify-between">
    <span className="text-zinc-300 text-sm">SMS notifications</span>
    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-700 transition-colors">
      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
    </button>
  </div>
</div>`,
    preview: <div className="space-y-4"><div className="flex items-center justify-between"><span className="text-zinc-300 text-sm">Email notifications</span><button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-600 transition-colors"><span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span></button></div><div className="flex items-center justify-between"><span className="text-zinc-300 text-sm">Push notifications</span><button className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-700 transition-colors"><span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span></button></div><div className="flex items-center justify-between"><span className="text-zinc-300 text-sm">SMS notifications</span><button className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-700 transition-colors"><span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span></button></div></div>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function SwitchExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Switch</h1>
          <p className="text-lg text-zinc-400">
            Interruptores para activar/desactivar opciones. Incluye variantes básicas, con texto, iconos y grupos.
          </p>
        </header>

        <div className="space-y-8">
          {switchVariants.map((variant, index) => (
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