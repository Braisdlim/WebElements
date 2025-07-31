import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const dropdownVariants = [
  {
    name: "Basic Dropdown",
    code: `<div className="relative">
  <button className="flex items-center justify-between w-full px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    <span>Select option</span>
    <span className="text-zinc-400">▼</span>
  </button>
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg">
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
    preview: <div className="relative"><button className="flex items-center justify-between w-full px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"><span>Select option</span><span className="text-zinc-400">▼</span></button><div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg"><div className="py-1"><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Option 1</button><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Option 2</button><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Option 3</button></div></div></div>
  },
  {
    name: "Dropdown with Icons",
    code: `<div className="relative">
  <button className="flex items-center justify-between w-full px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    <span>Choose category</span>
    <span className="text-zinc-400">▼</span>
  </button>
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg">
    <div className="py-1">
      <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        <span>📁</span>
        Documents
      </button>
      <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        <span>🖼️</span>
        Images
      </button>
      <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        <span>🎵</span>
        Music
      </button>
    </div>
  </div>
</div>`,
    preview: <div className="relative"><button className="flex items-center justify-between w-full px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"><span>Choose category</span><span className="text-zinc-400">▼</span></button><div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg"><div className="py-1"><button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors"><span>📁</span>Documents</button><button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors"><span>🖼️</span>Images</button><button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors"><span>🎵</span>Music</button></div></div></div>
  },
  {
    name: "Multi-Select Dropdown",
    code: `<div className="relative">
  <button className="flex items-center justify-between w-full px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    <span>Select multiple</span>
    <span className="text-zinc-400">▼</span>
  </button>
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg">
    <div className="py-1">
      <label className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors cursor-pointer">
        <input type="checkbox" className="rounded" />
        Option 1
      </label>
      <label className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors cursor-pointer">
        <input type="checkbox" className="rounded" />
        Option 2
      </label>
      <label className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors cursor-pointer">
        <input type="checkbox" className="rounded" />
        Option 3
      </label>
    </div>
  </div>
</div>`,
    preview: <div className="relative"><button className="flex items-center justify-between w-full px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"><span>Select multiple</span><span className="text-zinc-400">▼</span></button><div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg"><div className="py-1"><label className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors cursor-pointer"><input type="checkbox" className="rounded" />Option 1</label><label className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors cursor-pointer"><input type="checkbox" className="rounded" />Option 2</label><label className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors cursor-pointer"><input type="checkbox" className="rounded" />Option 3</label></div></div></div>
  },
  {
    name: "Dropdown with Search",
    code: `<div className="relative">
  <button className="flex items-center justify-between w-full px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    <span>Search options</span>
    <span className="text-zinc-400">▼</span>
  </button>
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg">
    <div className="p-2 border-b border-zinc-700">
      <input 
        type="text" 
        placeholder="Search..."
        className="w-full px-3 py-1 bg-zinc-800 border border-zinc-600 rounded text-white text-sm placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-500"
      />
    </div>
    <div className="py-1 max-h-32 overflow-y-auto">
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
    preview: <div className="relative"><button className="flex items-center justify-between w-full px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"><span>Search options</span><span className="text-zinc-400">▼</span></button><div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg"><div className="p-2 border-b border-zinc-700"><input type="text" placeholder="Search..." className="w-full px-3 py-1 bg-zinc-800 border border-zinc-600 rounded text-white text-sm placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-500" /></div><div className="py-1 max-h-32 overflow-y-auto"><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Option 1</button><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Option 2</button><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Option 3</button></div></div></div>
  },
  {
    name: "Dropdown with Groups",
    code: `<div className="relative">
  <button className="flex items-center justify-between w-full px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    <span>Select category</span>
    <span className="text-zinc-400">▼</span>
  </button>
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg">
    <div className="py-1">
      <div className="px-4 py-2 text-xs font-medium text-zinc-400 uppercase tracking-wide">
        Popular
      </div>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        Option 1
      </button>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        Option 2
      </button>
      <div className="px-4 py-2 text-xs font-medium text-zinc-400 uppercase tracking-wide">
        Other
      </div>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        Option 3
      </button>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        Option 4
      </button>
    </div>
  </div>
</div>`,
    preview: <div className="relative"><button className="flex items-center justify-between w-full px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"><span>Select category</span><span className="text-zinc-400">▼</span></button><div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg"><div className="py-1"><div className="px-4 py-2 text-xs font-medium text-zinc-400 uppercase tracking-wide">Popular</div><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Option 1</button><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Option 2</button><div className="px-4 py-2 text-xs font-medium text-zinc-400 uppercase tracking-wide">Other</div><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Option 3</button><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Option 4</button></div></div></div>
  },
  {
    name: "Dropdown with Actions",
    code: `<div className="relative">
  <button className="flex items-center justify-between w-full px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    <span>More actions</span>
    <span className="text-zinc-400">▼</span>
  </button>
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg">
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
    preview: <div className="relative"><button className="flex items-center justify-between w-full px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"><span>More actions</span><span className="text-zinc-400">▼</span></button><div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg"><div className="py-1"><button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors"><span>✏️</span>Edit</button><button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors"><span>📋</span>Copy</button><button className="flex items-center gap-2 w-full px-4 py-2 text-left text-red-400 hover:bg-zinc-800 transition-colors"><span>🗑️</span>Delete</button></div></div></div>
  },
  {
    name: "Dropdown with Status",
    code: `<div className="relative">
  <button className="flex items-center justify-between w-full px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    <span>Select status</span>
    <span className="text-zinc-400">▼</span>
  </button>
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg">
    <div className="py-1">
      <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        Active
      </button>
      <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        Pending
      </button>
      <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        Inactive
      </button>
    </div>
  </div>
</div>`,
    preview: <div className="relative"><button className="flex items-center justify-between w-full px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"><span>Select status</span><span className="text-zinc-400">▼</span></button><div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg"><div className="py-1"><button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors"><div className="w-2 h-2 bg-green-500 rounded-full"></div>Active</button><button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors"><div className="w-2 h-2 bg-yellow-500 rounded-full"></div>Pending</button><button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors"><div className="w-2 h-2 bg-red-500 rounded-full"></div>Inactive</button></div></div></div>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function DropdownExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Dropdown</h1>
          <p className="text-lg text-zinc-400">
            Menús desplegables con opciones. Incluye variantes básicas, con iconos, multi-select, búsqueda y grupos.
          </p>
        </header>

        <div className="space-y-8">
          {dropdownVariants.map((variant, index) => (
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