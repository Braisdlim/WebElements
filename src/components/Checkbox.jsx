import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const checkboxVariants = [
  {
    name: "Basic Checkbox",
    code: `<div className="flex items-center">
  <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" />
</div>`,
    preview: <div className="flex items-center"><input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" /></div>
  },
  {
    name: "Checkbox with Label",
    code: `<label className="flex items-center gap-2 cursor-pointer">
  <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" />
  <span className="text-zinc-300 text-sm">Accept terms and conditions</span>
</label>`,
    preview: <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" /><span className="text-zinc-300 text-sm">Accept terms and conditions</span></label>
  },
  {
    name: "Large Checkbox",
    code: `<label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" className="w-5 h-5 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" />
  <span className="text-zinc-300">Large checkbox option</span>
</label>`,
    preview: <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-5 h-5 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" /><span className="text-zinc-300">Large checkbox option</span></label>
  },
  {
    name: "Checkbox with Description",
    code: `<label className="flex items-start gap-3 cursor-pointer">
  <input type="checkbox" className="w-4 h-4 mt-0.5 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" />
  <div>
    <div className="text-zinc-300 font-medium">Newsletter subscription</div>
    <div className="text-zinc-400 text-sm">Receive updates about new features and products</div>
  </div>
</label>`,
    preview: <label className="flex items-start gap-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 mt-0.5 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" /><div><div className="text-zinc-300 font-medium">Newsletter subscription</div><div className="text-zinc-400 text-sm">Receive updates about new features and products</div></div></label>
  },
  {
    name: "Checkbox Group",
    code: `<div className="space-y-3">
  <label className="flex items-center gap-2 cursor-pointer">
    <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" />
    <span className="text-zinc-300 text-sm">Email notifications</span>
  </label>
  <label className="flex items-center gap-2 cursor-pointer">
    <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" />
    <span className="text-zinc-300 text-sm">Push notifications</span>
  </label>
  <label className="flex items-center gap-2 cursor-pointer">
    <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" />
    <span className="text-zinc-300 text-sm">SMS notifications</span>
  </label>
</div>`,
    preview: <div className="space-y-3"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" /><span className="text-zinc-300 text-sm">Email notifications</span></label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" /><span className="text-zinc-300 text-sm">Push notifications</span></label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" /><span className="text-zinc-300 text-sm">SMS notifications</span></label></div>
  },
  {
    name: "Indeterminate Checkbox",
    code: `<div className="space-y-3">
  <label className="flex items-center gap-2 cursor-pointer">
    <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" />
    <span className="text-zinc-300 text-sm">Select all</span>
  </label>
  <div className="ml-6 space-y-2">
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" />
      <span className="text-zinc-300 text-sm">Option 1</span>
    </label>
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" />
      <span className="text-zinc-300 text-sm">Option 2</span>
    </label>
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" />
      <span className="text-zinc-300 text-sm">Option 3</span>
    </label>
  </div>
</div>`,
    preview: <div className="space-y-3"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" /><span className="text-zinc-300 text-sm">Select all</span></label><div className="ml-6 space-y-2"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" /><span className="text-zinc-300 text-sm">Option 1</span></label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" /><span className="text-zinc-300 text-sm">Option 2</span></label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" /><span className="text-zinc-300 text-sm">Option 3</span></label></div></div>
  },
  {
    name: "Checkbox with Icon",
    code: `<label className="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" />
  <span className="text-lg">🔔</span>
  <span className="text-zinc-300">Enable notifications</span>
</label>`,
    preview: <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" /><span className="text-lg">🔔</span><span className="text-zinc-300">Enable notifications</span></label>
  },
  {
    name: "Disabled Checkbox",
    code: `<div className="space-y-3">
  <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
    <input type="checkbox" disabled className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" />
    <span className="text-zinc-300 text-sm">Disabled option</span>
  </label>
  <label className="flex items-center gap-2 cursor-pointer">
    <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" />
    <span className="text-zinc-300 text-sm">Enabled option</span>
  </label>
</div>`,
    preview: <div className="space-y-3"><label className="flex items-center gap-2 cursor-not-allowed opacity-50"><input type="checkbox" disabled className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" /><span className="text-zinc-300 text-sm">Disabled option</span></label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-700 rounded focus:ring-zinc-500" /><span className="text-zinc-300 text-sm">Enabled option</span></label></div>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function CheckboxExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Checkbox</h1>
          <p className="text-lg text-zinc-400">
            Casillas de verificación para selecciones múltiples. Incluye variantes básicas, con texto, grupos y estados.
          </p>
        </header>

        <div className="space-y-8">
          {checkboxVariants.map((variant, index) => (
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