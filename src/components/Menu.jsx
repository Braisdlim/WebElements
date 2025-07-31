import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const menuVariants = [
  {
    name: "Basic Menu",
    code: `<div className="relative group">
  <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    Menu
  </button>
  <div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
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
    preview: <div className="relative group"><button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Menu</button><div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"><div className="py-1"><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Option 1</button><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Option 2</button><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Option 3</button></div></div></div>
  },
  {
    name: "Menu with Icons",
    code: `<div className="relative group">
  <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    Actions
  </button>
  <div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
    <div className="py-1">
      <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        <span>✏️</span>
        Edit
      </button>
      <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        <span>📋</span>
        Copy
      </button>
      <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        <span>🔗</span>
        Share
      </button>
      <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-red-400 hover:bg-zinc-800 transition-colors">
        <span>🗑️</span>
        Delete
      </button>
    </div>
  </div>
</div>`,
    preview: <div className="relative group"><button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Actions</button><div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"><div className="py-1"><button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors"><span>✏️</span>Edit</button><button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors"><span>📋</span>Copy</button><button className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors"><span>🔗</span>Share</button><button className="flex items-center gap-2 w-full px-4 py-2 text-left text-red-400 hover:bg-zinc-800 transition-colors"><span>🗑️</span>Delete</button></div></div></div>
  },
  {
    name: "Menu with Separators",
    code: `<div className="relative group">
  <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    Settings
  </button>
  <div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
    <div className="py-1">
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        Profile
      </button>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        Preferences
      </button>
      <div className="border-t border-zinc-700 my-1"></div>
      <button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">
        Help
      </button>
      <button className="w-full px-4 py-2 text-left text-red-400 hover:bg-zinc-800 transition-colors">
        Logout
      </button>
    </div>
  </div>
</div>`,
    preview: <div className="relative group"><button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Settings</button><div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"><div className="py-1"><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Profile</button><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Preferences</button><div className="border-t border-zinc-700 my-1"></div><button className="w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors">Help</button><button className="w-full px-4 py-2 text-left text-red-400 hover:bg-zinc-800 transition-colors">Logout</button></div></div></div>
  },
  {
    name: "Menu with Descriptions",
    code: `<div className="relative group">
  <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    Export
  </button>
  <div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
    <div className="py-1">
      <button className="w-full px-4 py-2 text-left hover:bg-zinc-800 transition-colors">
        <div className="text-white font-medium">PDF</div>
        <div className="text-zinc-400 text-sm">Export as PDF document</div>
      </button>
      <button className="w-full px-4 py-2 text-left hover:bg-zinc-800 transition-colors">
        <div className="text-white font-medium">Excel</div>
        <div className="text-zinc-400 text-sm">Export as Excel spreadsheet</div>
      </button>
      <button className="w-full px-4 py-2 text-left hover:bg-zinc-800 transition-colors">
        <div className="text-white font-medium">CSV</div>
        <div className="text-zinc-400 text-sm">Export as CSV file</div>
      </button>
    </div>
  </div>
</div>`,
    preview: <div className="relative group"><button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Export</button><div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"><div className="py-1"><button className="w-full px-4 py-2 text-left hover:bg-zinc-800 transition-colors"><div className="text-white font-medium">PDF</div><div className="text-zinc-400 text-sm">Export as PDF document</div></button><button className="w-full px-4 py-2 text-left hover:bg-zinc-800 transition-colors"><div className="text-white font-medium">Excel</div><div className="text-zinc-400 text-sm">Export as Excel spreadsheet</div></button><button className="w-full px-4 py-2 text-left hover:bg-zinc-800 transition-colors"><div className="text-white font-medium">CSV</div><div className="text-zinc-400 text-sm">Export as CSV file</div></button></div></div></div>
  },
  {
    name: "Menu with Checkboxes",
    code: `<div className="relative group">
  <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    View Options
  </button>
  <div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
    <div className="py-1">
      <label className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors cursor-pointer">
        <input type="checkbox" className="rounded" />
        Show Grid
      </label>
      <label className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors cursor-pointer">
        <input type="checkbox" className="rounded" />
        Show Labels
      </label>
      <label className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors cursor-pointer">
        <input type="checkbox" className="rounded" />
        Show Tooltips
      </label>
    </div>
  </div>
</div>`,
    preview: <div className="relative group"><button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">View Options</button><div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"><div className="py-1"><label className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors cursor-pointer"><input type="checkbox" className="rounded" />Show Grid</label><label className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors cursor-pointer"><input type="checkbox" className="rounded" />Show Labels</label><label className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors cursor-pointer"><input type="checkbox" className="rounded" />Show Tooltips</label></div></div></div>
  },
  {
    name: "Menu with Radio Buttons",
    code: `<div className="relative group">
  <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">
    Theme
  </button>
  <div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
    <div className="py-1">
      <label className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors cursor-pointer">
        <input type="radio" name="theme" className="rounded" />
        Light
      </label>
      <label className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors cursor-pointer">
        <input type="radio" name="theme" className="rounded" />
        Dark
      </label>
      <label className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors cursor-pointer">
        <input type="radio" name="theme" className="rounded" />
        Auto
      </label>
    </div>
  </div>
</div>`,
    preview: <div className="relative group"><button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Theme</button><div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"><div className="py-1"><label className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors cursor-pointer"><input type="radio" name="theme" className="rounded" />Light</label><label className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors cursor-pointer"><input type="radio" name="theme" className="rounded" />Dark</label><label className="flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-zinc-800 transition-colors cursor-pointer"><input type="radio" name="theme" className="rounded" />Auto</label></div></div></div>
  },
  {
    name: "Large Menu",
    code: `<div className="relative group">
  <button className="px-6 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors text-lg">
    Large Menu
  </button>
  <div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
    <div className="py-1">
      <button className="w-full px-6 py-3 text-left text-white hover:bg-zinc-800 transition-colors text-lg">
        Large Option 1
      </button>
      <button className="w-full px-6 py-3 text-left text-white hover:bg-zinc-800 transition-colors text-lg">
        Large Option 2
      </button>
      <button className="w-full px-6 py-3 text-left text-white hover:bg-zinc-800 transition-colors text-lg">
        Large Option 3
      </button>
    </div>
  </div>
</div>`,
    preview: <div className="relative group"><button className="px-6 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors text-lg">Large Menu</button><div className="absolute top-full left-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"><div className="py-1"><button className="w-full px-6 py-3 text-left text-white hover:bg-zinc-800 transition-colors text-lg">Large Option 1</button><button className="w-full px-6 py-3 text-left text-white hover:bg-zinc-800 transition-colors text-lg">Large Option 2</button><button className="w-full px-6 py-3 text-left text-white hover:bg-zinc-800 transition-colors text-lg">Large Option 3</button></div></div></div>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function MenuExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Menu</h1>
          <p className="text-lg text-zinc-400">
            Menús contextuales para acciones. Incluye variantes básicas, con iconos, separadores y controles.
          </p>
        </header>

        <div className="space-y-8">
          {menuVariants.map((variant, index) => (
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