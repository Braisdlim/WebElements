import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const inputVariants = [
  {
    name: "Text Input",
    code: `<input 
  type="text" 
  placeholder="Enter your name"
  className="px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"
/>`,
    preview: <input type="text" placeholder="Enter your name" className="px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200" />
  },
  {
    name: "Email Input",
    code: `<input 
  type="email" 
  placeholder="your@email.com"
  className="px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"
/>`,
    preview: <input type="email" placeholder="your@email.com" className="px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200" />
  },
  {
    name: "Password Input",
    code: `<input 
  type="password" 
  placeholder="Enter password"
  className="px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"
/>`,
    preview: <input type="password" placeholder="Enter password" className="px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200" />
  },
  {
    name: "Number Input",
    code: `<input 
  type="number" 
  placeholder="0"
  min="0"
  max="100"
  className="px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"
/>`,
    preview: <input type="number" placeholder="0" min="0" max="100" className="px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200" />
  },
  {
    name: "Textarea",
    code: `<textarea 
  placeholder="Enter your message..."
  rows="4"
  className="px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 resize-none"
/>`,
    preview: <textarea placeholder="Enter your message..." rows="4" className="px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 resize-none" />
  },
  {
    name: "Search Input",
    code: `<div className="relative">
  <input 
    type="text" 
    placeholder="Search..."
    className="pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 w-full"
  />
  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400">
    🔍
  </span>
</div>`,
    preview: <div className="relative"><input type="text" placeholder="Search..." className="pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 w-full" /><span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400">🔍</span></div>
  },
  {
    name: "Input with Label",
    code: `<div className="space-y-2">
  <label className="block text-sm font-medium text-zinc-300">
    Email Address
  </label>
  <input 
    type="email" 
    placeholder="your@email.com"
    className="px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 w-full"
  />
</div>`,
    preview: <div className="space-y-2"><label className="block text-sm font-medium text-zinc-300">Email Address</label><input type="email" placeholder="your@email.com" className="px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 w-full" /></div>
  },
  {
    name: "Input with Error",
    code: `<div className="space-y-2">
  <input 
    type="email" 
    placeholder="your@email.com"
    className="px-4 py-3 bg-zinc-800 border border-red-500 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
  />
  <p className="text-sm text-red-400">Please enter a valid email address</p>
</div>`,
    preview: <div className="space-y-2"><input type="email" placeholder="your@email.com" className="px-4 py-3 bg-zinc-800 border border-red-500 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200" /><p className="text-sm text-red-400">Please enter a valid email address</p></div>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function InputExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Input</h1>
          <p className="text-lg text-zinc-400">
            Campos de entrada con validación y estados. Incluye diferentes tipos de input, textarea, y variantes con labels y errores.
          </p>
        </header>

        <div className="space-y-8">
          {inputVariants.map((variant, index) => (
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