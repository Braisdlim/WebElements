import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const imageVariants = [
  {
    name: "Basic Image",
    code: `<div className="max-w-sm">
  <img 
    src="https://via.placeholder.com/300x200" 
    alt="Sample image"
    className="w-full h-48 object-cover rounded-lg"
  />
</div>`,
    preview: (
      <div className="max-w-sm">
        <div className="w-full h-48 bg-zinc-800 rounded-lg flex items-center justify-center">
          <span className="text-zinc-400">Image</span>
        </div>
      </div>
    )
  },
  {
    name: "Image with Lazy Loading",
    code: `<div className="max-w-sm">
  <div className="relative">
    <div className="w-full h-48 bg-zinc-800 rounded-lg animate-pulse"></div>
    <img 
      src="https://via.placeholder.com/300x200" 
      alt="Sample image"
      className="w-full h-48 object-cover rounded-lg absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity"
      loading="lazy"
    />
  </div>
</div>`,
    preview: (
      <div className="max-w-sm">
        <div className="relative">
          <div className="w-full h-48 bg-zinc-800 rounded-lg animate-pulse"></div>
          <div className="w-full h-48 bg-zinc-700 rounded-lg absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-zinc-400">Image</span>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Image with Zoom",
    code: `<div className="max-w-sm">
  <div className="relative overflow-hidden rounded-lg group">
    <div className="w-full h-48 bg-zinc-800 flex items-center justify-center">
      <span className="text-zinc-400">Image</span>
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
      <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-0 h-0 border-l-6 border-l-black border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
      </button>
    </div>
  </div>
</div>`,
    preview: (
      <div className="max-w-sm">
        <div className="relative overflow-hidden rounded-lg group">
          <div className="w-full h-48 bg-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400">Image</span>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-0 h-0 border-l-6 border-l-black border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
            </button>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Image Gallery",
    code: `<div className="grid grid-cols-2 gap-4 max-w-md">
  <div className="relative overflow-hidden rounded-lg group">
    <div className="w-full h-32 bg-zinc-800 flex items-center justify-center">
      <span className="text-zinc-400 text-sm">Image 1</span>
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
  </div>
  <div className="relative overflow-hidden rounded-lg group">
    <div className="w-full h-32 bg-zinc-800 flex items-center justify-center">
      <span className="text-zinc-400 text-sm">Image 2</span>
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
  </div>
  <div className="relative overflow-hidden rounded-lg group">
    <div className="w-full h-32 bg-zinc-800 flex items-center justify-center">
      <span className="text-zinc-400 text-sm">Image 3</span>
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
  </div>
  <div className="relative overflow-hidden rounded-lg group">
    <div className="w-full h-32 bg-zinc-800 flex items-center justify-center">
      <span className="text-zinc-400 text-sm">Image 4</span>
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
  </div>
</div>`,
    preview: (
      <div className="grid grid-cols-2 gap-4 max-w-md">
        <div className="relative overflow-hidden rounded-lg group">
          <div className="w-full h-32 bg-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400 text-sm">Image 1</span>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
        </div>
        <div className="relative overflow-hidden rounded-lg group">
          <div className="w-full h-32 bg-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400 text-sm">Image 2</span>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
        </div>
        <div className="relative overflow-hidden rounded-lg group">
          <div className="w-full h-32 bg-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400 text-sm">Image 3</span>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
        </div>
        <div className="relative overflow-hidden rounded-lg group">
          <div className="w-full h-32 bg-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400 text-sm">Image 4</span>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
        </div>
      </div>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function Image() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Image</h1>
          <p className="text-lg text-zinc-400">
            Componentes de imagen con lazy loading y zoom para una mejor experiencia visual.
          </p>
        </header>

        <div className="space-y-8">
          {imageVariants.map((variant, index) => (
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