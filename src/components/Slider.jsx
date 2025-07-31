import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const sliderVariants = [
  {
    name: "Basic Slider",
    code: `<div className="w-full max-w-md">
  <div className="flex items-center justify-between mb-2">
    <span className="text-white text-sm">Volume</span>
    <span className="text-zinc-400 text-sm">75%</span>
  </div>
  <div className="relative">
    <div className="w-full h-2 bg-zinc-800 rounded-full">
      <div className="w-3/4 h-2 bg-white rounded-full"></div>
    </div>
    <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
  </div>
</div>`,
    preview: (
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white text-sm">Volume</span>
          <span className="text-zinc-400 text-sm">75%</span>
        </div>
        <div className="relative">
          <div className="w-full h-2 bg-zinc-800 rounded-full">
            <div className="w-3/4 h-2 bg-white rounded-full"></div>
          </div>
          <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
        </div>
      </div>
    )
  },
  {
    name: "Range Slider",
    code: `<div className="w-full max-w-md">
  <div className="flex items-center justify-between mb-2">
    <span className="text-white text-sm">Price Range</span>
    <span className="text-zinc-400 text-sm">$50 - $200</span>
  </div>
  <div className="relative">
    <div className="w-full h-2 bg-zinc-800 rounded-full">
      <div className="w-1/3 h-2 bg-zinc-600 rounded-full"></div>
      <div className="w-1/3 h-2 bg-white rounded-full"></div>
    </div>
    <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-600 rounded-full shadow-lg"></div>
    <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
  </div>
</div>`,
    preview: (
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white text-sm">Price Range</span>
          <span className="text-zinc-400 text-sm">$50 - $200</span>
        </div>
        <div className="relative">
          <div className="w-full h-2 bg-zinc-800 rounded-full">
            <div className="w-1/3 h-2 bg-zinc-600 rounded-full"></div>
            <div className="w-1/3 h-2 bg-white rounded-full"></div>
          </div>
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-600 rounded-full shadow-lg"></div>
          <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
        </div>
      </div>
    )
  },
  {
    name: "Vertical Slider",
    code: `<div className="flex items-center gap-4">
  <div className="flex flex-col items-center">
    <span className="text-white text-sm mb-2">Brightness</span>
    <div className="relative h-32 w-2">
      <div className="w-full h-full bg-zinc-800 rounded-full">
        <div className="w-full h-2/3 bg-white rounded-full"></div>
      </div>
      <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
    </div>
    <span className="text-zinc-400 text-xs mt-2">67%</span>
  </div>
</div>`,
    preview: (
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Brightness</span>
          <div className="relative h-32 w-2">
            <div className="w-full h-full bg-zinc-800 rounded-full">
              <div className="w-full h-2/3 bg-white rounded-full"></div>
            </div>
            <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
          </div>
          <span className="text-zinc-400 text-xs mt-2">67%</span>
        </div>
      </div>
    )
  },
  {
    name: "Slider with Steps",
    code: `<div className="w-full max-w-md">
  <div className="flex items-center justify-between mb-2">
    <span className="text-white text-sm">Quality</span>
    <span className="text-zinc-400 text-sm">High</span>
  </div>
  <div className="relative">
    <div className="w-full h-2 bg-zinc-800 rounded-full">
      <div className="w-4/5 h-2 bg-white rounded-full"></div>
    </div>
    <div className="absolute top-1/2 left-1/5 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-600 rounded-full"></div>
    <div className="absolute top-1/2 left-2/5 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-600 rounded-full"></div>
    <div className="absolute top-1/2 left-3/5 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-600 rounded-full"></div>
    <div className="absolute top-1/2 left-4/5 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
  </div>
  <div className="flex justify-between mt-1">
    <span className="text-zinc-500 text-xs">Low</span>
    <span className="text-zinc-500 text-xs">Medium</span>
    <span className="text-zinc-500 text-xs">High</span>
  </div>
</div>`,
    preview: (
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white text-sm">Quality</span>
          <span className="text-zinc-400 text-sm">High</span>
        </div>
        <div className="relative">
          <div className="w-full h-2 bg-zinc-800 rounded-full">
            <div className="w-4/5 h-2 bg-white rounded-full"></div>
          </div>
          <div className="absolute top-1/2 left-1/5 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-600 rounded-full"></div>
          <div className="absolute top-1/2 left-2/5 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-600 rounded-full"></div>
          <div className="absolute top-1/2 left-3/5 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-600 rounded-full"></div>
          <div className="absolute top-1/2 left-4/5 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-zinc-500 text-xs">Low</span>
          <span className="text-zinc-500 text-xs">Medium</span>
          <span className="text-zinc-500 text-xs">High</span>
        </div>
      </div>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function Slider() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Slider</h1>
          <p className="text-lg text-zinc-400">
            Controles deslizantes para rangos de valores con diferentes estilos y funcionalidades.
          </p>
        </header>

        <div className="space-y-8">
          {sliderVariants.map((variant, index) => (
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