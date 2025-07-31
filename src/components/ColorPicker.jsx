import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const colorPickerVariants = [
  {
    name: "Basic Color Picker",
    code: `<div className="relative max-w-xs">
  <input 
    type="text" 
    placeholder="Select color..."
    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
  />
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4">
    <div className="grid grid-cols-8 gap-2">
      <div className="w-8 h-8 bg-red-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-orange-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-yellow-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-green-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-blue-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-purple-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-pink-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-gray-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-red-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-orange-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-yellow-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-green-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-blue-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-purple-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-pink-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-gray-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-red-700 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-orange-700 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-yellow-700 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-green-700 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-blue-700 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-purple-700 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-pink-700 rounded cursor-pointer hover:scale-110 transition-transform"></div>
      <div className="w-8 h-8 bg-gray-700 rounded cursor-pointer hover:scale-110 transition-transform"></div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative max-w-xs">
        <input 
          type="text" 
          placeholder="Select color..."
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
        />
        <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4">
          <div className="grid grid-cols-8 gap-2">
            <div className="w-8 h-8 bg-red-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-orange-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-yellow-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-green-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-blue-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-purple-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-pink-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-gray-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-red-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-orange-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-yellow-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-green-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-blue-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-purple-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-pink-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-gray-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-red-700 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-orange-700 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-yellow-700 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-green-700 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-blue-700 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-purple-700 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-pink-700 rounded cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 bg-gray-700 rounded cursor-pointer hover:scale-110 transition-transform"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Color Picker with RGB Sliders",
    code: `<div className="relative max-w-xs">
  <input 
    type="text" 
    placeholder="Select color..."
    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
  />
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4">
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-white text-sm w-8">R</span>
        <input type="range" min="0" max="255" className="flex-1 h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer" />
        <span className="text-white text-sm w-12">255</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-white text-sm w-8">G</span>
        <input type="range" min="0" max="255" className="flex-1 h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer" />
        <span className="text-white text-sm w-12">128</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-white text-sm w-8">B</span>
        <input type="range" min="0" max="255" className="flex-1 h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer" />
        <span className="text-white text-sm w-12">64</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-white text-sm w-8">A</span>
        <input type="range" min="0" max="100" className="flex-1 h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer" />
        <span className="text-white text-sm w-12">100%</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-red-500 rounded border border-zinc-600"></div>
        <span className="text-white text-sm">#FF8040</span>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative max-w-xs">
        <input 
          type="text" 
          placeholder="Select color..."
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
        />
        <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-white text-sm w-8">R</span>
              <input type="range" min="0" max="255" className="flex-1 h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer" />
              <span className="text-white text-sm w-12">255</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white text-sm w-8">G</span>
              <input type="range" min="0" max="255" className="flex-1 h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer" />
              <span className="text-white text-sm w-12">128</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white text-sm w-8">B</span>
              <input type="range" min="0" max="255" className="flex-1 h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer" />
              <span className="text-white text-sm w-12">64</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white text-sm w-8">A</span>
              <input type="range" min="0" max="100" className="flex-1 h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer" />
              <span className="text-white text-sm w-12">100%</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-500 rounded border border-zinc-600"></div>
              <span className="text-white text-sm">#FF8040</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Color Picker with Presets",
    code: `<div className="relative max-w-xs">
  <input 
    type="text" 
    placeholder="Select color..."
    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
  />
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4">
    <div className="space-y-4">
      <div>
        <div className="text-zinc-400 text-xs mb-2">Primary Colors</div>
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-red-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-8 h-8 bg-blue-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-8 h-8 bg-green-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-8 h-8 bg-yellow-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-8 h-8 bg-purple-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-8 h-8 bg-orange-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
        </div>
      </div>
      <div>
        <div className="text-zinc-400 text-xs mb-2">Neutral Colors</div>
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-gray-100 rounded cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-8 h-8 bg-gray-300 rounded cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-8 h-8 bg-gray-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-8 h-8 bg-gray-700 rounded cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-8 h-8 bg-gray-900 rounded cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-8 h-8 bg-black rounded cursor-pointer hover:scale-110 transition-transform"></div>
        </div>
      </div>
      <div>
        <div className="text-zinc-400 text-xs mb-2">Brand Colors</div>
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-8 h-8 bg-indigo-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-8 h-8 bg-purple-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-8 h-8 bg-pink-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-8 h-8 bg-red-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-8 h-8 bg-orange-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative max-w-xs">
        <input 
          type="text" 
          placeholder="Select color..."
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
        />
        <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4">
          <div className="space-y-4">
            <div>
              <div className="text-zinc-400 text-xs mb-2">Primary Colors</div>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-red-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="w-8 h-8 bg-blue-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="w-8 h-8 bg-green-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="w-8 h-8 bg-yellow-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="w-8 h-8 bg-purple-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="w-8 h-8 bg-orange-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
              </div>
            </div>
            <div>
              <div className="text-zinc-400 text-xs mb-2">Neutral Colors</div>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="w-8 h-8 bg-gray-300 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="w-8 h-8 bg-gray-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="w-8 h-8 bg-gray-700 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="w-8 h-8 bg-gray-900 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="w-8 h-8 bg-black rounded cursor-pointer hover:scale-110 transition-transform"></div>
              </div>
            </div>
            <div>
              <div className="text-zinc-400 text-xs mb-2">Brand Colors</div>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="w-8 h-8 bg-indigo-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="w-8 h-8 bg-purple-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="w-8 h-8 bg-pink-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="w-8 h-8 bg-red-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="w-8 h-8 bg-orange-600 rounded cursor-pointer hover:scale-110 transition-transform"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function ColorPicker() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Color Picker</h1>
          <p className="text-lg text-zinc-400">
            Selectores de color con paleta y valores para una mejor experiencia de diseño.
          </p>
        </header>

        <div className="space-y-8">
          {colorPickerVariants.map((variant, index) => (
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