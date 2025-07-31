import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const progressVariants = [
  {
    name: "Basic Progress Bar",
    code: `<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span className="text-zinc-300">Progress</span>
    <span className="text-zinc-400">75%</span>
  </div>
  <div className="w-full bg-zinc-800 rounded-full h-2">
    <div className="bg-white h-2 rounded-full transition-all duration-300" style={{width: '75%'}}></div>
  </div>
</div>`,
    preview: <div className="space-y-2"><div className="flex justify-between text-sm"><span className="text-zinc-300">Progress</span><span className="text-zinc-400">75%</span></div><div className="w-full bg-zinc-800 rounded-full h-2"><div className="bg-white h-2 rounded-full transition-all duration-300" style={{width: '75%'}}></div></div></div>
  },
  {
    name: "Colored Progress Bar",
    code: `<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span className="text-zinc-300">Upload Progress</span>
    <span className="text-green-400">75%</span>
  </div>
  <div className="w-full bg-zinc-800 rounded-full h-3">
    <div className="bg-green-500 h-3 rounded-full transition-all duration-300" style={{width: '75%'}}></div>
  </div>
</div>`,
    preview: <div className="space-y-2"><div className="flex justify-between text-sm"><span className="text-zinc-300">Upload Progress</span><span className="text-green-400">75%</span></div><div className="w-full bg-zinc-800 rounded-full h-3"><div className="bg-green-500 h-3 rounded-full transition-all duration-300" style={{width: '75%'}}></div></div></div>
  },
  {
    name: "Animated Progress Bar",
    code: `<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span className="text-zinc-300">Loading...</span>
    <span className="text-zinc-400">75%</span>
  </div>
  <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
    <div className="bg-white h-2 rounded-full transition-all duration-300 relative" style={{width: '75%'}}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
    </div>
  </div>
</div>`,
    preview: <div className="space-y-2"><div className="flex justify-between text-sm"><span className="text-zinc-300">Loading...</span><span className="text-zinc-400">75%</span></div><div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden"><div className="bg-white h-2 rounded-full transition-all duration-300 relative" style={{width: '75%'}}><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div></div></div></div>
  },
  {
    name: "Circular Progress",
    code: `<div className="flex items-center justify-center">
  <div className="relative w-16 h-16">
    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
      <path
        className="text-zinc-800"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        className="text-white"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeDasharray="75, 100"
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white text-sm font-medium">75%</span>
    </div>
  </div>
</div>`,
    preview: <div className="flex items-center justify-center"><div className="relative w-16 h-16"><svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36"><path className="text-zinc-800" stroke="currentColor" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="text-white" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg><div className="absolute inset-0 flex items-center justify-center"><span className="text-white text-sm font-medium">75%</span></div></div></div>
  },
  {
    name: "Large Circular Progress",
    code: `<div className="flex items-center justify-center">
  <div className="relative w-24 h-24">
    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
      <path
        className="text-zinc-800"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        className="text-green-500"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeDasharray="60, 100"
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className="text-white text-lg font-bold">60%</div>
        <div className="text-zinc-400 text-xs">Complete</div>
      </div>
    </div>
  </div>
</div>`,
    preview: <div className="flex items-center justify-center"><div className="relative w-24 h-24"><svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36"><path className="text-zinc-800" stroke="currentColor" strokeWidth="2" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="text-green-500" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg><div className="absolute inset-0 flex items-center justify-center"><div className="text-center"><div className="text-white text-lg font-bold">60%</div><div className="text-zinc-400 text-xs">Complete</div></div></div></div></div>
  },
  {
    name: "Steps Progress",
    code: `<div className="space-y-4">
  <div className="flex items-center justify-between">
    <span className="text-zinc-300 text-sm">Step 3 of 5</span>
    <span className="text-zinc-400 text-sm">60%</span>
  </div>
  <div className="flex gap-2">
    <div className="flex-1 h-2 bg-green-500 rounded-full"></div>
    <div className="flex-1 h-2 bg-green-500 rounded-full"></div>
    <div className="flex-1 h-2 bg-green-500 rounded-full"></div>
    <div className="flex-1 h-2 bg-zinc-800 rounded-full"></div>
    <div className="flex-1 h-2 bg-zinc-800 rounded-full"></div>
  </div>
  <div className="flex justify-between text-xs text-zinc-400">
    <span>Step 1</span>
    <span>Step 2</span>
    <span>Step 3</span>
    <span>Step 4</span>
    <span>Step 5</span>
  </div>
</div>`,
    preview: <div className="space-y-4"><div className="flex items-center justify-between"><span className="text-zinc-300 text-sm">Step 3 of 5</span><span className="text-zinc-400 text-sm">60%</span></div><div className="flex gap-2"><div className="flex-1 h-2 bg-green-500 rounded-full"></div><div className="flex-1 h-2 bg-green-500 rounded-full"></div><div className="flex-1 h-2 bg-green-500 rounded-full"></div><div className="flex-1 h-2 bg-zinc-800 rounded-full"></div><div className="flex-1 h-2 bg-zinc-800 rounded-full"></div></div><div className="flex justify-between text-xs text-zinc-400"><span>Step 1</span><span>Step 2</span><span>Step 3</span><span>Step 4</span><span>Step 5</span></div></div>
  },
  {
    name: "Progress with Status",
    code: `<div className="space-y-3">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <span className="text-zinc-300">File Upload</span>
      <span className="px-2 py-1 bg-green-900/20 border border-green-500/30 rounded text-xs text-green-400">
        Uploading
      </span>
    </div>
    <span className="text-zinc-400 text-sm">75%</span>
  </div>
  <div className="w-full bg-zinc-800 rounded-full h-3">
    <div className="bg-green-500 h-3 rounded-full transition-all duration-300" style={{width: '75%'}}></div>
  </div>
  <div className="text-xs text-zinc-400">
    Uploaded 3.2 MB of 4.2 MB
  </div>
</div>`,
    preview: <div className="space-y-3"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="text-zinc-300">File Upload</span><span className="px-2 py-1 bg-green-900/20 border border-green-500/30 rounded text-xs text-green-400">Uploading</span></div><span className="text-zinc-400 text-sm">75%</span></div><div className="w-full bg-zinc-800 rounded-full h-3"><div className="bg-green-500 h-3 rounded-full transition-all duration-300" style={{width: '75%'}}></div></div><div className="text-xs text-zinc-400">Uploaded 3.2 MB of 4.2 MB</div></div>
  },
  {
    name: "Indeterminate Progress",
    code: `<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span className="text-zinc-300">Processing...</span>
    <span className="text-zinc-400">Please wait</span>
  </div>
  <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
    <div className="bg-white h-2 rounded-full animate-pulse" style={{width: '100%'}}>
      <div className="bg-gradient-to-r from-transparent via-white to-transparent h-full w-1/3 animate-ping"></div>
    </div>
  </div>
</div>`,
    preview: <div className="space-y-2"><div className="flex justify-between text-sm"><span className="text-zinc-300">Processing...</span><span className="text-zinc-400">Please wait</span></div><div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden"><div className="bg-white h-2 rounded-full animate-pulse" style={{width: '100%'}}><div className="bg-gradient-to-r from-transparent via-white to-transparent h-full w-1/3 animate-ping"></div></div></div></div>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function ProgressExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Progress</h1>
          <p className="text-lg text-zinc-400">
            Barras de progreso lineales y circulares. Incluye variantes básicas, coloreadas, animadas, circulares y con estados.
          </p>
        </header>

        <div className="space-y-8">
          {progressVariants.map((variant, index) => (
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