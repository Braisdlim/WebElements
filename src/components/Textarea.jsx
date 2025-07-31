import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const textareaVariants = [
  {
    name: "Basic Textarea",
    code: `<textarea 
  rows="4"
  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 resize-none"
  placeholder="Enter your message..."
></textarea>`,
    preview: <textarea rows="4" className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 resize-none" placeholder="Enter your message..."></textarea>
  },
  {
    name: "Textarea with Label",
    code: `<div className="space-y-2">
  <label className="block text-sm font-medium text-zinc-300">
    Description
  </label>
  <textarea 
    rows="4"
    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 resize-none"
    placeholder="Enter your description..."
  ></textarea>
</div>`,
    preview: <div className="space-y-2"><label className="block text-sm font-medium text-zinc-300">Description</label><textarea rows="4" className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 resize-none" placeholder="Enter your description..."></textarea></div>
  },
  {
    name: "Textarea with Character Count",
    code: `<div className="space-y-2">
  <textarea 
    rows="4"
    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 resize-none"
    placeholder="Enter your message..."
    maxLength="200"
  ></textarea>
  <div className="flex justify-between text-xs text-zinc-400">
    <span>0 characters</span>
    <span>200 max</span>
  </div>
</div>`,
    preview: <div className="space-y-2"><textarea rows="4" className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 resize-none" placeholder="Enter your message..." maxLength="200"></textarea><div className="flex justify-between text-xs text-zinc-400"><span>0 characters</span><span>200 max</span></div></div>
  },
  {
    name: "Large Textarea",
    code: `<textarea 
  rows="8"
  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 resize-none text-lg"
  placeholder="Write a longer message..."
></textarea>`,
    preview: <textarea rows="8" className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 resize-none text-lg" placeholder="Write a longer message..."></textarea>
  },
  {
    name: "Textarea with Error",
    code: `<div className="space-y-2">
  <label className="block text-sm font-medium text-red-400">
    Description
  </label>
  <textarea 
    rows="4"
    className="w-full px-3 py-2 bg-zinc-800 border border-red-500 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none"
    placeholder="Enter your description..."
  ></textarea>
  <p className="text-red-400 text-sm">This field is required</p>
</div>`,
    preview: <div className="space-y-2"><label className="block text-sm font-medium text-red-400">Description</label><textarea rows="4" className="w-full px-3 py-2 bg-zinc-800 border border-red-500 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none" placeholder="Enter your description..."></textarea><p className="text-red-400 text-sm">This field is required</p></div>
  },
  {
    name: "Textarea with Success",
    code: `<div className="space-y-2">
  <label className="block text-sm font-medium text-green-400">
    Description
  </label>
  <textarea 
    rows="4"
    className="w-full px-3 py-2 bg-zinc-800 border border-green-500 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
    placeholder="Enter your description..."
  ></textarea>
  <p className="text-green-400 text-sm">✓ Valid input</p>
</div>`,
    preview: <div className="space-y-2"><label className="block text-sm font-medium text-green-400">Description</label><textarea rows="4" className="w-full px-3 py-2 bg-zinc-800 border border-green-500 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none" placeholder="Enter your description..."></textarea><p className="text-green-400 text-sm">✓ Valid input</p></div>
  },
  {
    name: "Disabled Textarea",
    code: `<textarea 
  rows="4"
  disabled
  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-400 placeholder-zinc-500 resize-none cursor-not-allowed"
  placeholder="This textarea is disabled..."
></textarea>`,
    preview: <textarea rows="4" disabled className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-400 placeholder-zinc-500 resize-none cursor-not-allowed" placeholder="This textarea is disabled..."></textarea>
  },
  {
    name: "Textarea with Icon",
    code: `<div className="relative">
  <textarea 
    rows="4"
    className="w-full pl-10 pr-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 resize-none"
    placeholder="Enter your message..."
  ></textarea>
  <div className="absolute left-3 top-3 text-zinc-400">
    💬
  </div>
</div>`,
    preview: <div className="relative"><textarea rows="4" className="w-full pl-10 pr-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 resize-none" placeholder="Enter your message..."></textarea><div className="absolute left-3 top-3 text-zinc-400">💬</div></div>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function TextareaExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Textarea</h1>
          <p className="text-lg text-zinc-400">
            Áreas de texto para contenido largo. Incluye variantes básicas, con contador, estados y iconos.
          </p>
        </header>

        <div className="space-y-8">
          {textareaVariants.map((variant, index) => (
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