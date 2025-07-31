import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const treeVariants = [
  {
    name: "Basic Tree",
    code: `<div className="space-y-1">
  <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
    <span className="text-zinc-400">▶</span>
    <span className="text-white text-sm">Documents</span>
  </div>
  <div className="ml-4 space-y-1">
    <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
      <span className="text-zinc-400">▶</span>
      <span className="text-white text-sm">Work</span>
    </div>
    <div className="ml-4 space-y-1">
      <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
        <span className="text-zinc-400">📄</span>
        <span className="text-white text-sm">report.pdf</span>
      </div>
      <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
        <span className="text-zinc-400">📄</span>
        <span className="text-white text-sm">presentation.pptx</span>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="space-y-1">
        <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
          <span className="text-zinc-400">▶</span>
          <span className="text-white text-sm">Documents</span>
        </div>
        <div className="ml-4 space-y-1">
          <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
            <span className="text-zinc-400">▶</span>
            <span className="text-white text-sm">Work</span>
          </div>
          <div className="ml-4 space-y-1">
            <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
              <span className="text-zinc-400">📄</span>
              <span className="text-white text-sm">report.pdf</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
              <span className="text-zinc-400">📄</span>
              <span className="text-white text-sm">presentation.pptx</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "File Explorer Tree",
    code: `<div className="space-y-1">
  <div className="flex items-center justify-between p-2 hover:bg-zinc-800 rounded cursor-pointer">
    <div className="flex items-center gap-2">
      <span className="text-zinc-400">📁</span>
      <span className="text-white text-sm">Project</span>
    </div>
    <span className="text-zinc-500 text-xs">3 items</span>
  </div>
  <div className="ml-4 space-y-1">
    <div className="flex items-center justify-between p-2 hover:bg-zinc-800 rounded cursor-pointer">
      <div className="flex items-center gap-2">
        <span className="text-zinc-400">📁</span>
        <span className="text-white text-sm">src</span>
      </div>
      <span className="text-zinc-500 text-xs">2 items</span>
    </div>
    <div className="ml-4 space-y-1">
      <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
        <span className="text-zinc-400">📄</span>
        <span className="text-white text-sm">index.js</span>
      </div>
      <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
        <span className="text-zinc-400">📄</span>
        <span className="text-white text-sm">styles.css</span>
      </div>
    </div>
    <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
      <span className="text-zinc-400">📄</span>
      <span className="text-white text-sm">README.md</span>
    </div>
  </div>
</div>`,
    preview: (
      <div className="space-y-1">
        <div className="flex items-center justify-between p-2 hover:bg-zinc-800 rounded cursor-pointer">
          <div className="flex items-center gap-2">
            <span className="text-zinc-400">📁</span>
            <span className="text-white text-sm">Project</span>
          </div>
          <span className="text-zinc-500 text-xs">3 items</span>
        </div>
        <div className="ml-4 space-y-1">
          <div className="flex items-center justify-between p-2 hover:bg-zinc-800 rounded cursor-pointer">
            <div className="flex items-center gap-2">
              <span className="text-zinc-400">📁</span>
              <span className="text-white text-sm">src</span>
            </div>
            <span className="text-zinc-500 text-xs">2 items</span>
          </div>
          <div className="ml-4 space-y-1">
            <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
              <span className="text-zinc-400">📄</span>
              <span className="text-white text-sm">index.js</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
              <span className="text-zinc-400">📄</span>
              <span className="text-white text-sm">styles.css</span>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
            <span className="text-zinc-400">📄</span>
            <span className="text-white text-sm">README.md</span>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Checkbox Tree",
    code: `<div className="space-y-1">
  <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
    <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-600 rounded focus:ring-zinc-500" />
    <span className="text-zinc-400">▶</span>
    <span className="text-white text-sm">Categories</span>
  </div>
  <div className="ml-4 space-y-1">
    <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
      <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-600 rounded focus:ring-zinc-500" />
      <span className="text-zinc-400">▶</span>
      <span className="text-white text-sm">Electronics</span>
    </div>
    <div className="ml-4 space-y-1">
      <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
        <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-600 rounded focus:ring-zinc-500" />
        <span className="text-white text-sm">Phones</span>
      </div>
      <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
        <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-600 rounded focus:ring-zinc-500" />
        <span className="text-white text-sm">Laptops</span>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="space-y-1">
        <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
          <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-600 rounded focus:ring-zinc-500" />
          <span className="text-zinc-400">▶</span>
          <span className="text-white text-sm">Categories</span>
        </div>
        <div className="ml-4 space-y-1">
          <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-600 rounded focus:ring-zinc-500" />
            <span className="text-zinc-400">▶</span>
            <span className="text-white text-sm">Electronics</span>
          </div>
          <div className="ml-4 space-y-1">
            <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-600 rounded focus:ring-zinc-500" />
              <span className="text-white text-sm">Phones</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-white bg-zinc-800 border-zinc-600 rounded focus:ring-zinc-500" />
              <span className="text-white text-sm">Laptops</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Drag and Drop Tree",
    code: `<div className="space-y-1">
  <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded cursor-move border border-zinc-700">
    <span className="text-zinc-400">⋮⋮</span>
    <span className="text-zinc-400">📁</span>
    <span className="text-white text-sm">Root</span>
  </div>
  <div className="ml-4 space-y-1">
    <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded cursor-move border border-zinc-700">
      <span className="text-zinc-400">⋮⋮</span>
      <span className="text-zinc-400">📁</span>
      <span className="text-white text-sm">Folder 1</span>
    </div>
    <div className="ml-4 space-y-1">
      <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded cursor-move border border-zinc-700">
        <span className="text-zinc-400">⋮⋮</span>
        <span className="text-zinc-400">📄</span>
        <span className="text-white text-sm">File 1</span>
      </div>
      <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded cursor-move border border-zinc-700">
        <span className="text-zinc-400">⋮⋮</span>
        <span className="text-zinc-400">📄</span>
        <span className="text-white text-sm">File 2</span>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="space-y-1">
        <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded cursor-move border border-zinc-700">
          <span className="text-zinc-400">⋮⋮</span>
          <span className="text-zinc-400">📁</span>
          <span className="text-white text-sm">Root</span>
        </div>
        <div className="ml-4 space-y-1">
          <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded cursor-move border border-zinc-700">
            <span className="text-zinc-400">⋮⋮</span>
            <span className="text-zinc-400">📁</span>
            <span className="text-white text-sm">Folder 1</span>
          </div>
          <div className="ml-4 space-y-1">
            <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded cursor-move border border-zinc-700">
              <span className="text-zinc-400">⋮⋮</span>
              <span className="text-zinc-400">📄</span>
              <span className="text-white text-sm">File 1</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-zinc-800 rounded cursor-move border border-zinc-700">
              <span className="text-zinc-400">⋮⋮</span>
              <span className="text-zinc-400">📄</span>
              <span className="text-white text-sm">File 2</span>
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

export default function Tree() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Tree</h1>
          <p className="text-lg text-zinc-400">
            Árboles jerárquicos expandibles para mostrar estructuras de datos anidadas.
          </p>
        </header>

        <div className="space-y-8">
          {treeVariants.map((variant, index) => (
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