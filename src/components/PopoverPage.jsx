import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const popoverVariants = [
  {
    name: "Basic Popover",
    code: `<div className="relative group">
  <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    Hover me
  </button>
  <div className="absolute top-full left-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
    <div className="p-3">
      <div className="text-white text-sm">This is a basic popover content.</div>
    </div>
  </div>
</div>`,
    preview: <div className="relative group"><button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Hover me</button><div className="absolute top-full left-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"><div className="p-3"><div className="text-white text-sm">This is a basic popover content.</div></div></div></div>
  },
  {
    name: "Popover with Actions",
    code: `<div className="relative group">
  <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    Actions
  </button>
  <div className="absolute top-full left-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
    <div className="py-1">
      <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        <span>✏️</span>
        Edit
      </button>
      <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        <span>📋</span>
        Copy
      </button>
      <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-red-400 hover:bg-zinc-800 transition-colors">
        <span>🗑️</span>
        Delete
      </button>
    </div>
  </div>
</div>`,
    preview: <div className="relative group"><button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Actions</button><div className="absolute top-full left-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"><div className="py-1"><button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors"><span>✏️</span>Edit</button><button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors"><span>📋</span>Copy</button><button className="flex items-center gap-2 w-full px-4 py-2 text-left text-red-400 hover:bg-zinc-800 transition-colors"><span>🗑️</span>Delete</button></div></div></div>
  },
  {
    name: "Popover with Form",
    code: `<div className="relative group">
  <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    Quick Add
  </button>
  <div className="absolute top-full left-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
    <div className="p-4 w-64">
      <h4 className="text-white font-medium mb-3">Add New Item</h4>
      <div className="space-y-3">
        <input 
          type="text" 
          placeholder="Item name"
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded text-white text-sm placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-500"
        />
        <div className="flex gap-2">
          <button className="flex-1 px-3 py-2 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">
            Cancel
          </button>
          <button className="flex-1 px-3 py-2 bg-white text-black rounded text-sm hover:bg-zinc-200 transition-colors">
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`,
    preview: <div className="relative group"><button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Quick Add</button><div className="absolute top-full left-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"><div className="p-4 w-64"><h4 className="text-white font-medium mb-3">Add New Item</h4><div className="space-y-3"><input type="text" placeholder="Item name" className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded text-white text-sm placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-500" /><div className="flex gap-2"><button className="flex-1 px-3 py-2 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">Cancel</button><button className="flex-1 px-3 py-2 bg-white text-black rounded text-sm hover:bg-zinc-200 transition-colors">Add</button></div></div></div></div></div>
  },
  {
    name: "Popover with Info",
    code: `<div className="relative group">
  <button className="p-2 bg-zinc-800 text-zinc-400 rounded-lg hover:bg-zinc-700 hover:text-white transition-colors">
    <span className="text-lg">ℹ</span>
  </button>
  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
    <div className="p-3 max-w-xs">
      <div className="text-white text-sm">
        This feature allows you to quickly access important information and actions.
      </div>
    </div>
  </div>
</div>`,
    preview: <div className="relative group"><button className="p-2 bg-zinc-800 text-zinc-400 rounded-lg hover:bg-zinc-700 hover:text-white transition-colors"><span className="text-lg">ℹ</span></button><div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"><div className="p-3 max-w-xs"><div className="text-white text-sm">This feature allows you to quickly access important information and actions.</div></div></div></div>
  },
  {
    name: "Popover with List",
    code: `<div className="relative group">
  <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    Select Option
  </button>
  <div className="absolute top-full left-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
    <div className="py-1">
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        Option 1
      </button>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        Option 2
      </button>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        Option 3
      </button>
    </div>
  </div>
</div>`,
    preview: <div className="relative group"><button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Select Option</button><div className="absolute top-full left-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"><div className="py-1"><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Option 1</button><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Option 2</button><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Option 3</button></div></div></div>
  },
  {
    name: "Popover with Status",
    code: `<div className="relative group">
  <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    Status
  </button>
  <div className="absolute top-full left-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
    <div className="p-3">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-white text-sm">Online</span>
      </div>
      <div className="text-zinc-400 text-xs">
        Last seen 2 minutes ago
      </div>
    </div>
  </div>
</div>`,
    preview: <div className="relative group"><button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Status</button><div className="absolute top-full left-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"><div className="p-3"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div><span className="text-white text-sm">Online</span></div><div className="text-zinc-400 text-xs">Last seen 2 minutes ago</div></div></div></div>
  },
  {
    name: "Large Popover",
    code: `<div className="relative group">
  <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    User Profile
  </button>
  <div className="absolute top-full left-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
    <div className="p-4 w-80">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center">
          <span className="text-white text-lg font-medium">JD</span>
        </div>
        <div>
          <div className="text-white font-medium">John Doe</div>
          <div className="text-zinc-400 text-sm">Software Engineer</div>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-zinc-400">Email:</span>
          <span className="text-white">john@example.com</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-400">Location:</span>
          <span className="text-white">San Francisco</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-400">Status:</span>
          <span className="text-green-400">Active</span>
        </div>
      </div>
    </div>
  </div>
</div>`,
    preview: <div className="relative group"><button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">User Profile</button><div className="absolute top-full left-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"><div className="p-4 w-80"><div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center"><span className="text-white text-lg font-medium">JD</span></div><div><div className="text-white font-medium">John Doe</div><div className="text-zinc-400 text-sm">Software Engineer</div></div></div><div className="space-y-2 text-sm"><div className="flex justify-between"><span className="text-zinc-400">Email:</span><span className="text-white">john@example.com</span></div><div className="flex justify-between"><span className="text-zinc-400">Location:</span><span className="text-white">San Francisco</span></div><div className="flex justify-between"><span className="text-zinc-400">Status:</span><span className="text-green-400">Active</span></div></div></div></div></div>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function PopoverExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Popover</h1>
          <p className="text-lg text-zinc-400">
            Contenido contextual que aparece al hacer hover. Incluye variantes básicas, con acciones, formularios y información.
          </p>
        </header>

        <div className="space-y-8">
          {popoverVariants.map((variant, index) => (
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