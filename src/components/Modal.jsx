import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const modalVariants = [
  {
    name: "Basic Modal",
    code: `<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 max-w-md w-full mx-4">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold text-white">Basic Modal</h3>
      <button className="text-zinc-400 hover:text-white transition-colors">
        ✕
      </button>
    </div>
    <p className="text-zinc-300 mb-6">
      This is a basic modal with a simple layout and close button.
    </p>
    <div className="flex gap-3">
      <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
        Cancel
      </button>
      <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
        Confirm
      </button>
    </div>
  </div>
</div>`,
    preview: <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 max-w-md w-full mx-4"><div className="flex items-center justify-between mb-4"><h3 className="text-xl font-semibold text-white">Basic Modal</h3><button className="text-zinc-400 hover:text-white transition-colors">✕</button></div><p className="text-zinc-300 mb-6">This is a basic modal with a simple layout and close button.</p><div className="flex gap-3"><button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Cancel</button><button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">Confirm</button></div></div>
  },
  {
    name: "Modal with Form",
    code: `<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 max-w-md w-full mx-4">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold text-white">Add New Item</h3>
      <button className="text-zinc-400 hover:text-white transition-colors">
        ✕
      </button>
    </div>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-2">Name</label>
        <input 
          type="text" 
          placeholder="Enter name"
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-2">Description</label>
        <textarea 
          rows="3"
          placeholder="Enter description"
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 resize-none"
        />
      </div>
      <div className="flex gap-3 pt-2">
        <button type="button" className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
          Save
        </button>
      </div>
    </form>
  </div>
</div>`,
    preview: <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 max-w-md w-full mx-4"><div className="flex items-center justify-between mb-4"><h3 className="text-xl font-semibold text-white">Add New Item</h3><button className="text-zinc-400 hover:text-white transition-colors">✕</button></div><form className="space-y-4"><div><label className="block text-sm font-medium text-zinc-300 mb-2">Name</label><input type="text" placeholder="Enter name" className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200" /></div><div><label className="block text-sm font-medium text-zinc-300 mb-2">Description</label><textarea rows="3" placeholder="Enter description" className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 resize-none" /></div><div className="flex gap-3 pt-2"><button type="button" className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Cancel</button><button type="submit" className="px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">Save</button></div></form></div>
  },
  {
    name: "Confirmation Modal",
    code: `<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 max-w-sm w-full mx-4 text-center">
    <div className="w-12 h-12 bg-red-900/20 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-red-400 text-xl">⚠</span>
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">Delete Item</h3>
    <p className="text-zinc-300 mb-6">
      Are you sure you want to delete this item? This action cannot be undone.
    </p>
    <div className="flex gap-3">
      <button className="flex-1 px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
        Cancel
      </button>
      <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
        Delete
      </button>
    </div>
  </div>
</div>`,
    preview: <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 max-w-sm w-full mx-4 text-center"><div className="w-12 h-12 bg-red-900/20 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-red-400 text-xl">⚠</span></div><h3 className="text-xl font-semibold text-white mb-2">Delete Item</h3><p className="text-zinc-300 mb-6">Are you sure you want to delete this item? This action cannot be undone.</p><div className="flex gap-3"><button className="flex-1 px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Cancel</button><button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Delete</button></div></div>
  },
  {
    name: "Large Modal",
    code: `<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-2xl font-semibold text-white">Large Modal</h3>
      <button className="text-zinc-400 hover:text-white transition-colors text-xl">
        ✕
      </button>
    </div>
    <div className="space-y-4">
      <p className="text-zinc-300">
        This is a large modal with more content and scrolling capability.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-zinc-800 rounded-lg p-4">
          <h4 className="text-white font-medium mb-2">Section 1</h4>
          <p className="text-zinc-400 text-sm">Content for the first section.</p>
        </div>
        <div className="bg-zinc-800 rounded-lg p-4">
          <h4 className="text-white font-medium mb-2">Section 2</h4>
          <p className="text-zinc-400 text-sm">Content for the second section.</p>
        </div>
      </div>
      <div className="flex gap-3 pt-4">
        <button className="px-6 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
          Cancel
        </button>
        <button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  </div>
</div>`,
    preview: <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"><div className="flex items-center justify-between mb-6"><h3 className="text-2xl font-semibold text-white">Large Modal</h3><button className="text-zinc-400 hover:text-white transition-colors text-xl">✕</button></div><div className="space-y-4"><p className="text-zinc-300">This is a large modal with more content and scrolling capability.</p><div className="grid grid-cols-2 gap-4"><div className="bg-zinc-800 rounded-lg p-4"><h4 className="text-white font-medium mb-2">Section 1</h4><p className="text-zinc-400 text-sm">Content for the first section.</p></div><div className="bg-zinc-800 rounded-lg p-4"><h4 className="text-white font-medium mb-2">Section 2</h4><p className="text-zinc-400 text-sm">Content for the second section.</p></div></div><div className="flex gap-3 pt-4"><button className="px-6 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Cancel</button><button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">Save Changes</button></div></div></div>
  },
  {
    name: "Fullscreen Modal",
    code: `<div className="fixed inset-0 bg-zinc-900 z-50">
  <div className="h-full flex flex-col">
    <div className="flex items-center justify-between p-6 border-b border-zinc-800">
      <h3 className="text-2xl font-semibold text-white">Fullscreen Modal</h3>
      <button className="text-zinc-400 hover:text-white transition-colors text-xl">
        ✕
      </button>
    </div>
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <p className="text-zinc-300 mb-6">
          This is a fullscreen modal that takes up the entire viewport.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-800 rounded-lg p-6">
            <h4 className="text-white font-medium mb-4">Content Area 1</h4>
            <p className="text-zinc-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-zinc-800 rounded-lg p-6">
            <h4 className="text-white font-medium mb-4">Content Area 2</h4>
            <p className="text-zinc-400">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="p-6 border-t border-zinc-800">
      <div className="flex gap-3 justify-end">
        <button className="px-6 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
          Cancel
        </button>
        <button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
          Save
        </button>
      </div>
    </div>
  </div>
</div>`,
    preview: <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 max-w-4xl w-full mx-4"><div className="flex items-center justify-between mb-6"><h3 className="text-2xl font-semibold text-white">Fullscreen Modal</h3><button className="text-zinc-400 hover:text-white transition-colors text-xl">✕</button></div><div className="space-y-6"><p className="text-zinc-300">This is a fullscreen modal that takes up the entire viewport.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div className="bg-zinc-800 rounded-lg p-6"><h4 className="text-white font-medium mb-4">Content Area 1</h4><p className="text-zinc-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div><div className="bg-zinc-800 rounded-lg p-6"><h4 className="text-white font-medium mb-4">Content Area 2</h4><p className="text-zinc-400">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div></div><div className="flex gap-3 justify-end pt-4"><button className="px-6 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Cancel</button><button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">Save</button></div></div></div>
  },
  {
    name: "Modal with Image",
    code: `<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
  <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden max-w-lg w-full mx-4">
    <div className="w-full h-48 bg-zinc-800 flex items-center justify-center">
      <span className="text-zinc-400 text-4xl">🖼️</span>
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Image Modal</h3>
        <button className="text-zinc-400 hover:text-white transition-colors">
          ✕
        </button>
      </div>
      <p className="text-zinc-300 mb-6">
        Modal with an image or media content at the top.
      </p>
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
          Close
        </button>
        <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
          Download
        </button>
      </div>
    </div>
  </div>
</div>`,
    preview: <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden max-w-lg w-full mx-4"><div className="w-full h-48 bg-zinc-800 flex items-center justify-center"><span className="text-zinc-400 text-4xl">🖼️</span></div><div className="p-6"><div className="flex items-center justify-between mb-4"><h3 className="text-xl font-semibold text-white">Image Modal</h3><button className="text-zinc-400 hover:text-white transition-colors">✕</button></div><p className="text-zinc-300 mb-6">Modal with an image or media content at the top.</p><div className="flex gap-3"><button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Close</button><button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">Download</button></div></div></div>
  },
  {
    name: "Alert Modal",
    code: `<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 max-w-sm w-full mx-4">
    <div className="text-center">
      <div className="w-16 h-16 bg-green-900/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-green-400 text-2xl">✓</span>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">Success!</h3>
      <p className="text-zinc-300 mb-6">
        Your action has been completed successfully.
      </p>
      <button className="w-full px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
        Continue
      </button>
    </div>
  </div>
</div>`,
    preview: <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 max-w-sm w-full mx-4"><div className="text-center"><div className="w-16 h-16 bg-green-900/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-green-400 text-2xl">✓</span></div><h3 className="text-xl font-semibold text-white mb-2">Success!</h3><p className="text-zinc-300 mb-6">Your action has been completed successfully.</p><button className="w-full px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">Continue</button></div></div>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function ModalExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Modal</h1>
          <p className="text-lg text-zinc-400">
            Ventanas modales con overlay y animaciones. Incluye variantes básicas, con formularios, confirmación, fullscreen y alertas.
          </p>
        </header>

        <div className="space-y-8">
          {modalVariants.map((variant, index) => (
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