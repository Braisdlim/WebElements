import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const accordionVariants = [
  {
    name: "Basic Accordion",
    code: `<div className="space-y-2">
  <div className="border border-zinc-700 rounded-lg">
    <button className="w-full px-4 py-3 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors rounded-t-lg">
      <div className="flex items-center justify-between">
        <span>Section 1</span>
        <span className="text-zinc-400">▼</span>
      </div>
    </button>
    <div className="px-4 py-3 bg-zinc-800 border-t border-zinc-700">
      <p className="text-zinc-300">This is the content for section 1.</p>
    </div>
  </div>
  <div className="border border-zinc-700 rounded-lg">
    <button className="w-full px-4 py-3 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
      <div className="flex items-center justify-between">
        <span>Section 2</span>
        <span className="text-zinc-400">▼</span>
      </div>
    </button>
    <div className="px-4 py-3 bg-zinc-800 border-t border-zinc-700">
      <p className="text-zinc-300">This is the content for section 2.</p>
    </div>
  </div>
</div>`,
    preview: <div className="space-y-2"><div className="border border-zinc-700 rounded-lg"><button className="w-full px-4 py-3 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors rounded-t-lg"><div className="flex items-center justify-between"><span>Section 1</span><span className="text-zinc-400">▼</span></div></button><div className="px-4 py-3 bg-zinc-800 border-t border-zinc-700"><p className="text-zinc-300">This is the content for section 1.</p></div></div><div className="border border-zinc-700 rounded-lg"><button className="w-full px-4 py-3 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"><div className="flex items-center justify-between"><span>Section 2</span><span className="text-zinc-400">▼</span></div></button><div className="px-4 py-3 bg-zinc-800 border-t border-zinc-700"><p className="text-zinc-300">This is the content for section 2.</p></div></div></div>
  },
  {
    name: "Accordion with Icons",
    code: `<div className="space-y-2">
  <div className="border border-zinc-700 rounded-lg">
    <button className="w-full px-4 py-3 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg">📁</span>
          <span>Documents</span>
        </div>
        <span className="text-zinc-400">▼</span>
      </div>
    </button>
    <div className="px-4 py-3 bg-zinc-800 border-t border-zinc-700">
      <p className="text-zinc-300">Manage your documents here.</p>
    </div>
  </div>
  <div className="border border-zinc-700 rounded-lg">
    <button className="w-full px-4 py-3 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg">🖼️</span>
          <span>Images</span>
        </div>
        <span className="text-zinc-400">▼</span>
      </div>
    </button>
    <div className="px-4 py-3 bg-zinc-800 border-t border-zinc-700">
      <p className="text-zinc-300">View and manage your images.</p>
    </div>
  </div>
</div>`,
    preview: <div className="space-y-2"><div className="border border-zinc-700 rounded-lg"><button className="w-full px-4 py-3 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><span className="text-lg">📁</span><span>Documents</span></div><span className="text-zinc-400">▼</span></div></button><div className="px-4 py-3 bg-zinc-800 border-t border-zinc-700"><p className="text-zinc-300">Manage your documents here.</p></div></div><div className="border border-zinc-700 rounded-lg"><button className="w-full px-4 py-3 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><span className="text-lg">🖼️</span><span>Images</span></div><span className="text-zinc-400">▼</span></div></button><div className="px-4 py-3 bg-zinc-800 border-t border-zinc-700"><p className="text-zinc-300">View and manage your images.</p></div></div></div>
  },
  {
    name: "Accordion with Rich Content",
    code: `<div className="space-y-2">
  <div className="border border-zinc-700 rounded-lg">
    <button className="w-full px-4 py-3 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">Advanced Settings</div>
          <div className="text-sm text-zinc-400">Configure advanced options</div>
        </div>
        <span className="text-zinc-400">▼</span>
      </div>
    </button>
    <div className="px-4 py-3 bg-zinc-800 border-t border-zinc-700">
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1">Option 1</label>
          <input type="text" className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded text-white text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1">Option 2</label>
          <select className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded text-white text-sm">
            <option>Choice 1</option>
            <option>Choice 2</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>`,
    preview: <div className="space-y-2"><div className="border border-zinc-700 rounded-lg"><button className="w-full px-4 py-3 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"><div className="flex items-center justify-between"><div><div className="font-medium">Advanced Settings</div><div className="text-sm text-zinc-400">Configure advanced options</div></div><span className="text-zinc-400">▼</span></div></button><div className="px-4 py-3 bg-zinc-800 border-t border-zinc-700"><div className="space-y-3"><div><label className="block text-sm font-medium text-zinc-300 mb-1">Option 1</label><input type="text" className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded text-white text-sm" /></div><div><label className="block text-sm font-medium text-zinc-300 mb-1">Option 2</label><select className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded text-white text-sm"><option>Choice 1</option><option>Choice 2</option></select></div></div></div></div></div>
  },
  {
    name: "Accordion with Status",
    code: `<div className="space-y-2">
  <div className="border border-zinc-700 rounded-lg">
    <button className="w-full px-4 py-3 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span>Task 1</span>
          <span className="px-2 py-1 text-xs font-medium bg-green-900 text-green-300 rounded-full">Completed</span>
        </div>
        <span className="text-zinc-400">▼</span>
      </div>
    </button>
    <div className="px-4 py-3 bg-zinc-800 border-t border-zinc-700">
      <p className="text-zinc-300">This task has been completed successfully.</p>
    </div>
  </div>
  <div className="border border-zinc-700 rounded-lg">
    <button className="w-full px-4 py-3 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span>Task 2</span>
          <span className="px-2 py-1 text-xs font-medium bg-yellow-900 text-yellow-300 rounded-full">In Progress</span>
        </div>
        <span className="text-zinc-400">▼</span>
      </div>
    </button>
    <div className="px-4 py-3 bg-zinc-800 border-t border-zinc-700">
      <p className="text-zinc-300">This task is currently in progress.</p>
    </div>
  </div>
</div>`,
    preview: <div className="space-y-2"><div className="border border-zinc-700 rounded-lg"><button className="w-full px-4 py-3 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><span>Task 1</span><span className="px-2 py-1 text-xs font-medium bg-green-900 text-green-300 rounded-full">Completed</span></div><span className="text-zinc-400">▼</span></div></button><div className="px-4 py-3 bg-zinc-800 border-t border-zinc-700"><p className="text-zinc-300">This task has been completed successfully.</p></div></div><div className="border border-zinc-700 rounded-lg"><button className="w-full px-4 py-3 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><span>Task 2</span><span className="px-2 py-1 text-xs font-medium bg-yellow-900 text-yellow-300 rounded-full">In Progress</span></div><span className="text-zinc-400">▼</span></div></button><div className="px-4 py-3 bg-zinc-800 border-t border-zinc-700"><p className="text-zinc-300">This task is currently in progress.</p></div></div></div>
  },
  {
    name: "Accordion with Actions",
    code: `<div className="space-y-2">
  <div className="border border-zinc-700 rounded-lg">
    <button className="w-full px-4 py-3 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
      <div className="flex items-center justify-between">
        <span>Section with Actions</span>
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 bg-zinc-800 text-white rounded text-xs hover:bg-zinc-700 transition-colors">
            Edit
          </button>
          <span className="text-zinc-400">▼</span>
        </div>
      </div>
    </button>
    <div className="px-4 py-3 bg-zinc-800 border-t border-zinc-700">
      <p className="text-zinc-300">This section has action buttons in the header.</p>
    </div>
  </div>
</div>`,
    preview: <div className="space-y-2"><div className="border border-zinc-700 rounded-lg"><button className="w-full px-4 py-3 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"><div className="flex items-center justify-between"><span>Section with Actions</span><div className="flex items-center gap-2"><button className="px-2 py-1 bg-zinc-800 text-white rounded text-xs hover:bg-zinc-700 transition-colors">Edit</button><span className="text-zinc-400">▼</span></div></div></button><div className="px-4 py-3 bg-zinc-800 border-t border-zinc-700"><p className="text-zinc-300">This section has action buttons in the header.</p></div></div></div>
  },
  {
    name: "Large Accordion",
    code: `<div className="space-y-3">
  <div className="border border-zinc-700 rounded-lg">
    <button className="w-full px-6 py-4 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors text-lg">
      <div className="flex items-center justify-between">
        <span>Large Section 1</span>
        <span className="text-zinc-400 text-xl">▼</span>
      </div>
    </button>
    <div className="px-6 py-4 bg-zinc-800 border-t border-zinc-700">
      <p className="text-zinc-300 text-lg">This is a large accordion section with bigger text and spacing.</p>
    </div>
  </div>
  <div className="border border-zinc-700 rounded-lg">
    <button className="w-full px-6 py-4 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors text-lg">
      <div className="flex items-center justify-between">
        <span>Large Section 2</span>
        <span className="text-zinc-400 text-xl">▼</span>
      </div>
    </button>
    <div className="px-6 py-4 bg-zinc-800 border-t border-zinc-700">
      <p className="text-zinc-300 text-lg">Another large accordion section with enhanced styling.</p>
    </div>
  </div>
</div>`,
    preview: <div className="space-y-3"><div className="border border-zinc-700 rounded-lg"><button className="w-full px-6 py-4 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors text-lg"><div className="flex items-center justify-between"><span>Large Section 1</span><span className="text-zinc-400 text-xl">▼</span></div></button><div className="px-6 py-4 bg-zinc-800 border-t border-zinc-700"><p className="text-zinc-300 text-lg">This is a large accordion section with bigger text and spacing.</p></div></div><div className="border border-zinc-700 rounded-lg"><button className="w-full px-6 py-4 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors text-lg"><div className="flex items-center justify-between"><span>Large Section 2</span><span className="text-zinc-400 text-xl">▼</span></div></button><div className="px-6 py-4 bg-zinc-800 border-t border-zinc-700"><p className="text-zinc-300 text-lg">Another large accordion section with enhanced styling.</p></div></div></div>
  },
  {
    name: "Compact Accordion",
    code: `<div className="space-y-1">
  <div className="border border-zinc-700 rounded">
    <button className="w-full px-3 py-2 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors text-sm">
      <div className="flex items-center justify-between">
        <span>Compact Section 1</span>
        <span className="text-zinc-400 text-sm">▼</span>
      </div>
    </button>
    <div className="px-3 py-2 bg-zinc-800 border-t border-zinc-700">
      <p className="text-zinc-300 text-sm">This is a compact accordion section.</p>
    </div>
  </div>
  <div className="border border-zinc-700 rounded">
    <button className="w-full px-3 py-2 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors text-sm">
      <div className="flex items-center justify-between">
        <span>Compact Section 2</span>
        <span className="text-zinc-400 text-sm">▼</span>
      </div>
    </button>
    <div className="px-3 py-2 bg-zinc-800 border-t border-zinc-700">
      <p className="text-zinc-300 text-sm">Another compact accordion section.</p>
    </div>
  </div>
</div>`,
    preview: <div className="space-y-1"><div className="border border-zinc-700 rounded"><button className="w-full px-3 py-2 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors text-sm"><div className="flex items-center justify-between"><span>Compact Section 1</span><span className="text-zinc-400 text-sm">▼</span></div></button><div className="px-3 py-2 bg-zinc-800 border-t border-zinc-700"><p className="text-zinc-300 text-sm">This is a compact accordion section.</p></div></div><div className="border border-zinc-700 rounded"><button className="w-full px-3 py-2 text-left bg-zinc-900 text-white hover:bg-zinc-800 transition-colors text-sm"><div className="flex items-center justify-between"><span>Compact Section 2</span><span className="text-zinc-400 text-sm">▼</span></div></button><div className="px-3 py-2 bg-zinc-800 border-t border-zinc-700"><p className="text-zinc-300 text-sm">Another compact accordion section.</p></div></div></div>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function AccordionExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Accordion</h1>
          <p className="text-lg text-zinc-400">
            Acordeones para mostrar contenido colapsable. Incluye variantes básicas, con iconos, contenido rico y estados.
          </p>
        </header>

        <div className="space-y-8">
          {accordionVariants.map((variant, index) => (
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