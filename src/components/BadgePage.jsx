import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const badgeVariants = [
  {
    name: "Basic Badge",
    code: `<span className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded-full text-xs">
  Badge
</span>`,
    preview: <span className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded-full text-xs">Badge</span>
  },
  {
    name: "Colored Badges",
    code: `<div className="flex gap-2">
  <span className="px-2 py-1 bg-green-900/20 border border-green-500/30 text-green-400 rounded-full text-xs">
    Success
  </span>
  <span className="px-2 py-1 bg-red-900/20 border border-red-500/30 text-red-400 rounded-full text-xs">
    Error
  </span>
  <span className="px-2 py-1 bg-yellow-900/20 border border-yellow-500/30 text-yellow-400 rounded-full text-xs">
    Warning
  </span>
  <span className="px-2 py-1 bg-blue-900/20 border border-blue-500/30 text-blue-400 rounded-full text-xs">
    Info
  </span>
</div>`,
    preview: <div className="flex gap-2"><span className="px-2 py-1 bg-green-900/20 border border-green-500/30 text-green-400 rounded-full text-xs">Success</span><span className="px-2 py-1 bg-red-900/20 border border-red-500/30 text-red-400 rounded-full text-xs">Error</span><span className="px-2 py-1 bg-yellow-900/20 border border-yellow-500/30 text-yellow-400 rounded-full text-xs">Warning</span><span className="px-2 py-1 bg-blue-900/20 border border-blue-500/30 text-blue-400 rounded-full text-xs">Info</span></div>
  },
  {
    name: "Badge with Counter",
    code: `<div className="flex gap-2">
  <span className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded-full text-xs">
    Notifications
    <span className="ml-1 px-1.5 py-0.5 bg-red-500 text-white rounded-full text-xs">
      3
    </span>
  </span>
  <span className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded-full text-xs">
    Messages
    <span className="ml-1 px-1.5 py-0.5 bg-green-500 text-white rounded-full text-xs">
      12
    </span>
  </span>
</div>`,
    preview: <div className="flex gap-2"><span className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded-full text-xs">Notifications<span className="ml-1 px-1.5 py-0.5 bg-red-500 text-white rounded-full text-xs">3</span></span><span className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded-full text-xs">Messages<span className="ml-1 px-1.5 py-0.5 bg-green-500 text-white rounded-full text-xs">12</span></span></div>
  },
  {
    name: "Badge with Icon",
    code: `<div className="flex gap-2">
  <span className="flex items-center gap-1 px-2 py-1 bg-green-900/20 border border-green-500/30 text-green-400 rounded-full text-xs">
    <span>✓</span>
    Active
  </span>
  <span className="flex items-center gap-1 px-2 py-1 bg-red-900/20 border border-red-500/30 text-red-400 rounded-full text-xs">
    <span>✕</span>
    Inactive
  </span>
  <span className="flex items-center gap-1 px-2 py-1 bg-blue-900/20 border border-blue-500/30 text-blue-400 rounded-full text-xs">
    <span>ℹ</span>
    New
  </span>
</div>`,
    preview: <div className="flex gap-2"><span className="flex items-center gap-1 px-2 py-1 bg-green-900/20 border border-green-500/30 text-green-400 rounded-full text-xs"><span>✓</span>Active</span><span className="flex items-center gap-1 px-2 py-1 bg-red-900/20 border border-red-500/30 text-red-400 rounded-full text-xs"><span>✕</span>Inactive</span><span className="flex items-center gap-1 px-2 py-1 bg-blue-900/20 border border-blue-500/30 text-blue-400 rounded-full text-xs"><span>ℹ</span>New</span></div>
  },
  {
    name: "Status Badges",
    code: `<div className="flex gap-2">
  <span className="px-2 py-1 bg-green-900/20 border border-green-500/30 text-green-400 rounded-full text-xs">
    Online
  </span>
  <span className="px-2 py-1 bg-yellow-900/20 border border-yellow-500/30 text-yellow-400 rounded-full text-xs">
    Away
  </span>
  <span className="px-2 py-1 bg-red-900/20 border border-red-500/30 text-red-400 rounded-full text-xs">
    Offline
  </span>
  <span className="px-2 py-1 bg-purple-900/20 border border-purple-500/30 text-purple-400 rounded-full text-xs">
    Busy
  </span>
</div>`,
    preview: <div className="flex gap-2"><span className="px-2 py-1 bg-green-900/20 border border-green-500/30 text-green-400 rounded-full text-xs">Online</span><span className="px-2 py-1 bg-yellow-900/20 border border-yellow-500/30 text-yellow-400 rounded-full text-xs">Away</span><span className="px-2 py-1 bg-red-900/20 border border-red-500/30 text-red-400 rounded-full text-xs">Offline</span><span className="px-2 py-1 bg-purple-900/20 border border-purple-500/30 text-purple-400 rounded-full text-xs">Busy</span></div>
  },
  {
    name: "Removable Badge",
    code: `<div className="flex gap-2">
  <span className="flex items-center gap-1 px-2 py-1 bg-zinc-700 text-zinc-300 rounded-full text-xs">
    Tag
    <button className="ml-1 text-zinc-400 hover:text-zinc-200 transition-colors">
      ✕
    </button>
  </span>
  <span className="flex items-center gap-1 px-2 py-1 bg-zinc-700 text-zinc-300 rounded-full text-xs">
    Filter
    <button className="ml-1 text-zinc-400 hover:text-zinc-200 transition-colors">
      ✕
    </button>
  </span>
</div>`,
    preview: <div className="flex gap-2"><span className="flex items-center gap-1 px-2 py-1 bg-zinc-700 text-zinc-300 rounded-full text-xs">Tag<button className="ml-1 text-zinc-400 hover:text-zinc-200 transition-colors">✕</button></span><span className="flex items-center gap-1 px-2 py-1 bg-zinc-700 text-zinc-300 rounded-full text-xs">Filter<button className="ml-1 text-zinc-400 hover:text-zinc-200 transition-colors">✕</button></span></div>
  },
  {
    name: "Large Badge",
    code: `<div className="flex gap-2">
  <span className="px-3 py-1.5 bg-zinc-700 text-zinc-300 rounded-lg text-sm font-medium">
    Large Badge
  </span>
  <span className="px-3 py-1.5 bg-green-900/20 border border-green-500/30 text-green-400 rounded-lg text-sm font-medium">
    Success
  </span>
  <span className="px-3 py-1.5 bg-red-900/20 border border-red-500/30 text-red-400 rounded-lg text-sm font-medium">
    Error
  </span>
</div>`,
    preview: <div className="flex gap-2"><span className="px-3 py-1.5 bg-zinc-700 text-zinc-300 rounded-lg text-sm font-medium">Large Badge</span><span className="px-3 py-1.5 bg-green-900/20 border border-green-500/30 text-green-400 rounded-lg text-sm font-medium">Success</span><span className="px-3 py-1.5 bg-red-900/20 border border-red-500/30 text-red-400 rounded-lg text-sm font-medium">Error</span></div>
  },
  {
    name: "Badge in Button",
    code: `<div className="flex gap-2">
  <button className="relative px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    Notifications
    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
      3
    </span>
  </button>
  <button className="relative px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    Messages
    <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 text-white rounded-full text-xs flex items-center justify-center">
      12
    </span>
  </button>
</div>`,
    preview: <div className="flex gap-2"><button className="relative px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Notifications<span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">3</span></button><button className="relative px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Messages<span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 text-white rounded-full text-xs flex items-center justify-center">12</span></button></div>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function BadgeExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Badge</h1>
          <p className="text-lg text-zinc-400">
            Insignias para mostrar estados y contadores. Incluye variantes básicas, coloreadas, con iconos, contadores y removibles.
          </p>
        </header>

        <div className="space-y-8">
          {badgeVariants.map((variant, index) => (
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