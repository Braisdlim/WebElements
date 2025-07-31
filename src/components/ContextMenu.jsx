import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const contextMenuVariants = [
  {
    name: "Basic Context Menu",
    code: `<div className="relative">
  <div className="w-32 h-20 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center cursor-pointer">
    <span className="text-white text-sm">Right click me</span>
  </div>
  <div className="absolute top-0 left-0 mt-2 ml-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg min-w-48">
    <div className="py-1">
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
        Copy
      </button>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
        Cut
      </button>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
        Paste
      </button>
      <div className="border-t border-zinc-700 my-1"></div>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
        Delete
      </button>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative">
        <div className="w-32 h-20 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center cursor-pointer">
          <span className="text-white text-sm">Right click me</span>
        </div>
        <div className="absolute top-0 left-0 mt-2 ml-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg min-w-48">
          <div className="py-1">
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
              Copy
            </button>
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
              Cut
            </button>
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
              Paste
            </button>
            <div className="border-t border-zinc-700 my-1"></div>
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Context Menu with Icons",
    code: `<div className="relative">
  <div className="w-32 h-20 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center cursor-pointer">
    <span className="text-white text-sm">File</span>
  </div>
  <div className="absolute top-0 left-0 mt-2 ml-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg min-w-48">
    <div className="py-1">
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center gap-3">
        <span>📄</span>
        <span>New File</span>
      </button>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center gap-3">
        <span>📁</span>
        <span>Open</span>
      </button>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center gap-3">
        <span>💾</span>
        <span>Save</span>
      </button>
      <div className="border-t border-zinc-700 my-1"></div>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center gap-3">
        <span>⚙️</span>
        <span>Settings</span>
      </button>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative">
        <div className="w-32 h-20 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center cursor-pointer">
          <span className="text-white text-sm">File</span>
        </div>
        <div className="absolute top-0 left-0 mt-2 ml-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg min-w-48">
          <div className="py-1">
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center gap-3">
              <span>📄</span>
              <span>New File</span>
            </button>
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center gap-3">
              <span>📁</span>
              <span>Open</span>
            </button>
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center gap-3">
              <span>💾</span>
              <span>Save</span>
            </button>
            <div className="border-t border-zinc-700 my-1"></div>
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center gap-3">
              <span>⚙️</span>
              <span>Settings</span>
            </button>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Nested Context Menu",
    code: `<div className="relative">
  <div className="w-32 h-20 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center cursor-pointer">
    <span className="text-white text-sm">Image</span>
  </div>
  <div className="absolute top-0 left-0 mt-2 ml-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg min-w-48">
    <div className="py-1">
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
        Copy
      </button>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
        Cut
      </button>
      <div className="relative group">
        <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center justify-between">
          <span>Format</span>
          <span>▶</span>
        </button>
        <div className="absolute left-full top-0 ml-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg min-w-32 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="py-1">
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
              JPEG
            </button>
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
              PNG
            </button>
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
              GIF
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-700 my-1"></div>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
        Delete
      </button>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative">
        <div className="w-32 h-20 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center cursor-pointer">
          <span className="text-white text-sm">Image</span>
        </div>
        <div className="absolute top-0 left-0 mt-2 ml-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg min-w-48">
          <div className="py-1">
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
              Copy
            </button>
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
              Cut
            </button>
            <div className="relative group">
              <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center justify-between">
                <span>Format</span>
                <span>▶</span>
              </button>
              <div className="absolute left-full top-0 ml-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg min-w-32 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="py-1">
                  <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
                    JPEG
                  </button>
                  <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
                    PNG
                  </button>
                  <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
                    GIF
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-zinc-700 my-1"></div>
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm">
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Context Menu with Shortcuts",
    code: `<div className="relative">
  <div className="w-32 h-20 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center cursor-pointer">
    <span className="text-white text-sm">Text</span>
  </div>
  <div className="absolute top-0 left-0 mt-2 ml-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg min-w-48">
    <div className="py-1">
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center justify-between">
        <span>Undo</span>
        <span className="text-zinc-400 text-xs">Ctrl+Z</span>
      </button>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center justify-between">
        <span>Redo</span>
        <span className="text-zinc-400 text-xs">Ctrl+Y</span>
      </button>
      <div className="border-t border-zinc-700 my-1"></div>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center justify-between">
        <span>Cut</span>
        <span className="text-zinc-400 text-xs">Ctrl+X</span>
      </button>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center justify-between">
        <span>Copy</span>
        <span className="text-zinc-400 text-xs">Ctrl+C</span>
      </button>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center justify-between">
        <span>Paste</span>
        <span className="text-zinc-400 text-xs">Ctrl+V</span>
      </button>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative">
        <div className="w-32 h-20 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center cursor-pointer">
          <span className="text-white text-sm">Text</span>
        </div>
        <div className="absolute top-0 left-0 mt-2 ml-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg min-w-48">
          <div className="py-1">
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center justify-between">
              <span>Undo</span>
              <span className="text-zinc-400 text-xs">Ctrl+Z</span>
            </button>
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center justify-between">
              <span>Redo</span>
              <span className="text-zinc-400 text-xs">Ctrl+Y</span>
            </button>
            <div className="border-t border-zinc-700 my-1"></div>
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center justify-between">
              <span>Cut</span>
              <span className="text-zinc-400 text-xs">Ctrl+X</span>
            </button>
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center justify-between">
              <span>Copy</span>
              <span className="text-zinc-400 text-xs">Ctrl+C</span>
            </button>
            <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors text-sm flex items-center justify-between">
              <span>Paste</span>
              <span className="text-zinc-400 text-xs">Ctrl+V</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function ContextMenu() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Context Menu</h1>
          <p className="text-lg text-zinc-400">
            Menús de clic derecho con opciones contextuales para diferentes elementos.
          </p>
        </header>

        <div className="space-y-8">
          {contextMenuVariants.map((variant, index) => (
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