import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const lightboxVariants = [
  {
    name: "Basic Lightbox",
    code: `<div className="relative">
  <div className="grid grid-cols-3 gap-4 max-w-md">
    <div className="w-full h-24 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity">
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-zinc-400 text-xs">Image 1</span>
      </div>
    </div>
    <div className="w-full h-24 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity">
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-zinc-400 text-xs">Image 2</span>
      </div>
    </div>
    <div className="w-full h-24 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity">
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-zinc-400 text-xs">Image 3</span>
      </div>
    </div>
  </div>
  <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
    <div className="relative max-w-4xl max-h-full">
      <div className="w-full h-96 bg-zinc-800 rounded flex items-center justify-center">
        <span className="text-zinc-400">Full Size Image</span>
      </div>
      <button className="absolute top-4 right-4 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
        ×
      </button>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative">
        <div className="grid grid-cols-3 gap-4 max-w-md">
          <div className="w-full h-24 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-zinc-400 text-xs">Image 1</span>
            </div>
          </div>
          <div className="w-full h-24 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-zinc-400 text-xs">Image 2</span>
            </div>
          </div>
          <div className="w-full h-24 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-zinc-400 text-xs">Image 3</span>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-full">
            <div className="w-full h-96 bg-zinc-800 rounded flex items-center justify-center">
              <span className="text-zinc-400">Full Size Image</span>
            </div>
            <button className="absolute top-4 right-4 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
              ×
            </button>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Lightbox with Navigation",
    code: `<div className="relative">
  <div className="grid grid-cols-3 gap-4 max-w-md">
    <div className="w-full h-24 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity">
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-zinc-400 text-xs">Image 1</span>
      </div>
    </div>
    <div className="w-full h-24 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity">
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-zinc-400 text-xs">Image 2</span>
      </div>
    </div>
    <div className="w-full h-24 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity">
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-zinc-400 text-xs">Image 3</span>
      </div>
    </div>
  </div>
  <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
    <div className="relative max-w-4xl max-h-full">
      <div className="w-full h-96 bg-zinc-800 rounded flex items-center justify-center">
        <span className="text-zinc-400">Full Size Image</span>
      </div>
      <button className="absolute top-4 right-4 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
        ×
      </button>
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
        ←
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
        →
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
        2 / 3
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative">
        <div className="grid grid-cols-3 gap-4 max-w-md">
          <div className="w-full h-24 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-zinc-400 text-xs">Image 1</span>
            </div>
          </div>
          <div className="w-full h-24 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-zinc-400 text-xs">Image 2</span>
            </div>
          </div>
          <div className="w-full h-24 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-zinc-400 text-xs">Image 3</span>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-full">
            <div className="w-full h-96 bg-zinc-800 rounded flex items-center justify-center">
              <span className="text-zinc-400">Full Size Image</span>
            </div>
            <button className="absolute top-4 right-4 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
              ×
            </button>
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
              ←
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
              →
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              2 / 3
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Lightbox with Thumbnails",
    code: `<div className="relative">
  <div className="grid grid-cols-3 gap-4 max-w-md">
    <div className="w-full h-24 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity">
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-zinc-400 text-xs">Image 1</span>
      </div>
    </div>
    <div className="w-full h-24 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity">
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-zinc-400 text-xs">Image 2</span>
      </div>
    </div>
    <div className="w-full h-24 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity">
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-zinc-400 text-xs">Image 3</span>
      </div>
    </div>
  </div>
  <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
    <div className="relative max-w-4xl max-h-full">
      <div className="w-full h-96 bg-zinc-800 rounded flex items-center justify-center">
        <span className="text-zinc-400">Full Size Image</span>
      </div>
      <button className="absolute top-4 right-4 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
        ×
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-2">
          <div className="w-16 h-12 bg-zinc-700 rounded cursor-pointer hover:opacity-80 transition-opacity"></div>
          <div className="w-16 h-12 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity border-2 border-white"></div>
          <div className="w-16 h-12 bg-zinc-700 rounded cursor-pointer hover:opacity-80 transition-opacity"></div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative">
        <div className="grid grid-cols-3 gap-4 max-w-md">
          <div className="w-full h-24 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-zinc-400 text-xs">Image 1</span>
            </div>
          </div>
          <div className="w-full h-24 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-zinc-400 text-xs">Image 2</span>
            </div>
          </div>
          <div className="w-full h-24 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-zinc-400 text-xs">Image 3</span>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-full">
            <div className="w-full h-96 bg-zinc-800 rounded flex items-center justify-center">
              <span className="text-zinc-400">Full Size Image</span>
            </div>
            <button className="absolute top-4 right-4 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors">
              ×
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex gap-2">
                <div className="w-16 h-12 bg-zinc-700 rounded cursor-pointer hover:opacity-80 transition-opacity"></div>
                <div className="w-16 h-12 bg-zinc-800 rounded cursor-pointer hover:opacity-80 transition-opacity border-2 border-white"></div>
                <div className="w-16 h-12 bg-zinc-700 rounded cursor-pointer hover:opacity-80 transition-opacity"></div>
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

export default function Lightbox() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Lightbox</h1>
          <p className="text-lg text-zinc-400">
            Visores de imágenes a pantalla completa con navegación y controles.
          </p>
        </header>

        <div className="space-y-8">
          {lightboxVariants.map((variant, index) => (
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