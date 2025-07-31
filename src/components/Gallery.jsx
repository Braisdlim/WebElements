import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const galleryVariants = [
  {
    name: "Grid Gallery",
    code: `<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
      <span className="text-zinc-400 text-sm">Image 1</span>
    </div>
  </div>
  <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
      <span className="text-zinc-400 text-sm">Image 2</span>
    </div>
  </div>
  <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
      <span className="text-zinc-400 text-sm">Image 3</span>
    </div>
  </div>
  <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
      <span className="text-zinc-400 text-sm">Image 4</span>
    </div>
  </div>
</div>`,
    preview: (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
          <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400 text-sm">Image 1</span>
          </div>
        </div>
        <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
          <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400 text-sm">Image 2</span>
          </div>
        </div>
        <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
          <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400 text-sm">Image 3</span>
          </div>
        </div>
        <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
          <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400 text-sm">Image 4</span>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Gallery with Overlay",
    code: `<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div className="relative aspect-square bg-zinc-800 rounded-lg overflow-hidden group cursor-pointer">
    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
      <span className="text-zinc-400 text-sm">Image 1</span>
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
      <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium">
        View
      </button>
    </div>
  </div>
  <div className="relative aspect-square bg-zinc-800 rounded-lg overflow-hidden group cursor-pointer">
    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
      <span className="text-zinc-400 text-sm">Image 2</span>
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
      <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium">
        View
      </button>
    </div>
  </div>
  <div className="relative aspect-square bg-zinc-800 rounded-lg overflow-hidden group cursor-pointer">
    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
      <span className="text-zinc-400 text-sm">Image 3</span>
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
      <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium">
        View
      </button>
    </div>
  </div>
</div>`,
    preview: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="relative aspect-square bg-zinc-800 rounded-lg overflow-hidden group cursor-pointer">
          <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400 text-sm">Image 1</span>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium">
              View
            </button>
          </div>
        </div>
        <div className="relative aspect-square bg-zinc-800 rounded-lg overflow-hidden group cursor-pointer">
          <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400 text-sm">Image 2</span>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium">
              View
            </button>
          </div>
        </div>
        <div className="relative aspect-square bg-zinc-800 rounded-lg overflow-hidden group cursor-pointer">
          <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400 text-sm">Image 3</span>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium">
              View
            </button>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Gallery with Info",
    code: `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
    <div className="aspect-video bg-zinc-800 relative">
      <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
        <span className="text-zinc-400 text-sm">Image 1</span>
      </div>
      <div className="absolute top-2 right-2">
        <button className="w-6 h-6 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white text-xs">
          ♥
        </button>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-white font-medium mb-1">Beautiful Landscape</h3>
      <p className="text-zinc-400 text-sm">Nature photography</p>
    </div>
  </div>
  <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
    <div className="aspect-video bg-zinc-800 relative">
      <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
        <span className="text-zinc-400 text-sm">Image 2</span>
      </div>
      <div className="absolute top-2 right-2">
        <button className="w-6 h-6 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white text-xs">
          ♥
        </button>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-white font-medium mb-1">Urban Architecture</h3>
      <p className="text-zinc-400 text-sm">City photography</p>
    </div>
  </div>
  <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
    <div className="aspect-video bg-zinc-800 relative">
      <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
        <span className="text-zinc-400 text-sm">Image 3</span>
      </div>
      <div className="absolute top-2 right-2">
        <button className="w-6 h-6 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white text-xs">
          ♥
        </button>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-white font-medium mb-1">Abstract Art</h3>
      <p className="text-zinc-400 text-sm">Modern art</p>
    </div>
  </div>
</div>`,
    preview: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
          <div className="aspect-video bg-zinc-800 relative">
            <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
              <span className="text-zinc-400 text-sm">Image 1</span>
            </div>
            <div className="absolute top-2 right-2">
              <button className="w-6 h-6 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white text-xs">
                ♥
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-white font-medium mb-1">Beautiful Landscape</h3>
            <p className="text-zinc-400 text-sm">Nature photography</p>
          </div>
        </div>
        <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
          <div className="aspect-video bg-zinc-800 relative">
            <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
              <span className="text-zinc-400 text-sm">Image 2</span>
            </div>
            <div className="absolute top-2 right-2">
              <button className="w-6 h-6 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white text-xs">
                ♥
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-white font-medium mb-1">Urban Architecture</h3>
            <p className="text-zinc-400 text-sm">City photography</p>
          </div>
        </div>
        <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
          <div className="aspect-video bg-zinc-800 relative">
            <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
              <span className="text-zinc-400 text-sm">Image 3</span>
            </div>
            <div className="absolute top-2 right-2">
              <button className="w-6 h-6 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white text-xs">
                ♥
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-white font-medium mb-1">Abstract Art</h3>
            <p className="text-zinc-400 text-sm">Modern art</p>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Gallery with Filters",
    code: `<div className="space-y-6">
  <div className="flex gap-2">
    <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
      All
    </button>
    <button className="px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors">
      Nature
    </button>
    <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
      Urban
    </button>
    <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
      Abstract
    </button>
  </div>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
      <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
        <span className="text-zinc-400 text-sm">Nature</span>
      </div>
    </div>
    <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
      <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
        <span className="text-zinc-400 text-sm">Urban</span>
      </div>
    </div>
    <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
      <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
        <span className="text-zinc-400 text-sm">Abstract</span>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="space-y-6">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
            All
          </button>
          <button className="px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors">
            Nature
          </button>
          <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
            Urban
          </button>
          <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
            Abstract
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
              <span className="text-zinc-400 text-sm">Nature</span>
            </div>
          </div>
          <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
              <span className="text-zinc-400 text-sm">Urban</span>
            </div>
          </div>
          <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
              <span className="text-zinc-400 text-sm">Abstract</span>
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

export default function Gallery() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-lg text-zinc-400">
            Galerías de imágenes con lightbox y navegación para mostrar colecciones de fotos.
          </p>
        </header>

        <div className="space-y-8">
          {galleryVariants.map((variant, index) => (
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