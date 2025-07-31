import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const listVariants = [
  {
    name: "Basic List",
    code: `<ul className="space-y-2">
  <li className="px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">
    List item 1
  </li>
  <li className="px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">
    List item 2
  </li>
  <li className="px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">
    List item 3
  </li>
</ul>`,
    preview: <ul className="space-y-2"><li className="px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">List item 1</li><li className="px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">List item 2</li><li className="px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">List item 3</li></ul>
  },
  {
    name: "List with Icons",
    code: `<ul className="space-y-2">
  <li className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">
    <span className="text-lg">📁</span>
    <span>Documents</span>
  </li>
  <li className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">
    <span className="text-lg">🖼️</span>
    <span>Images</span>
  </li>
  <li className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">
    <span className="text-lg">🎵</span>
    <span>Music</span>
  </li>
</ul>`,
    preview: <ul className="space-y-2"><li className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white"><span className="text-lg">📁</span><span>Documents</span></li><li className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white"><span className="text-lg">🖼️</span><span>Images</span></li><li className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white"><span className="text-lg">🎵</span><span>Music</span></li></ul>
  },
  {
    name: "List with Actions",
    code: `<ul className="space-y-2">
  <li className="flex items-center justify-between px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">
    <span>List item 1</span>
    <div className="flex space-x-2">
      <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">Edit</button>
      <button className="px-3 py-1 bg-red-900 text-red-300 rounded text-sm hover:bg-red-800 transition-colors">Delete</button>
    </div>
  </li>
  <li className="flex items-center justify-between px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">
    <span>List item 2</span>
    <div className="flex space-x-2">
      <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">Edit</button>
      <button className="px-3 py-1 bg-red-900 text-red-300 rounded text-sm hover:bg-red-800 transition-colors">Delete</button>
    </div>
  </li>
</ul>`,
    preview: <ul className="space-y-2"><li className="flex items-center justify-between px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white"><span>List item 1</span><div className="flex space-x-2"><button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">Edit</button><button className="px-3 py-1 bg-red-900 text-red-300 rounded text-sm hover:bg-red-800 transition-colors">Delete</button></div></li><li className="flex items-center justify-between px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white"><span>List item 2</span><div className="flex space-x-2"><button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">Edit</button><button className="px-3 py-1 bg-red-900 text-red-300 rounded text-sm hover:bg-red-800 transition-colors">Delete</button></div></li></ul>
  },
  {
    name: "List with Descriptions",
    code: `<ul className="space-y-2">
  <li className="px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg">
    <div className="text-white font-medium">List item 1</div>
    <div className="text-zinc-400 text-sm mt-1">This is a description for the first item</div>
  </li>
  <li className="px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg">
    <div className="text-white font-medium">List item 2</div>
    <div className="text-zinc-400 text-sm mt-1">This is a description for the second item</div>
  </li>
  <li className="px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg">
    <div className="text-white font-medium">List item 3</div>
    <div className="text-zinc-400 text-sm mt-1">This is a description for the third item</div>
  </li>
</ul>`,
    preview: <ul className="space-y-2"><li className="px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg"><div className="text-white font-medium">List item 1</div><div className="text-zinc-400 text-sm mt-1">This is a description for the first item</div></li><li className="px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg"><div className="text-white font-medium">List item 2</div><div className="text-zinc-400 text-sm mt-1">This is a description for the second item</div></li><li className="px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg"><div className="text-white font-medium">List item 3</div><div className="text-zinc-400 text-sm mt-1">This is a description for the third item</div></li></ul>
  },
  {
    name: "List with Status",
    code: `<ul className="space-y-2">
  <li className="flex items-center justify-between px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">
    <span>Task 1</span>
    <span className="px-2 py-1 text-xs font-medium bg-green-900 text-green-300 rounded-full">Completed</span>
  </li>
  <li className="flex items-center justify-between px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">
    <span>Task 2</span>
    <span className="px-2 py-1 text-xs font-medium bg-yellow-900 text-yellow-300 rounded-full">In Progress</span>
  </li>
  <li className="flex items-center justify-between px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">
    <span>Task 3</span>
    <span className="px-2 py-1 text-xs font-medium bg-red-900 text-red-300 rounded-full">Pending</span>
  </li>
</ul>`,
    preview: <ul className="space-y-2"><li className="flex items-center justify-between px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white"><span>Task 1</span><span className="px-2 py-1 text-xs font-medium bg-green-900 text-green-300 rounded-full">Completed</span></li><li className="flex items-center justify-between px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white"><span>Task 2</span><span className="px-2 py-1 text-xs font-medium bg-yellow-900 text-yellow-300 rounded-full">In Progress</span></li><li className="flex items-center justify-between px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white"><span>Task 3</span><span className="px-2 py-1 text-xs font-medium bg-red-900 text-red-300 rounded-full">Pending</span></li></ul>
  },
  {
    name: "List with Avatars",
    code: `<ul className="space-y-2">
  <li className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">
    <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">
      <span className="text-white text-sm font-medium">JD</span>
    </div>
    <div>
      <div className="font-medium">John Doe</div>
      <div className="text-zinc-400 text-sm">john@example.com</div>
    </div>
  </li>
  <li className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">
    <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">
      <span className="text-white text-sm font-medium">JS</span>
    </div>
    <div>
      <div className="font-medium">Jane Smith</div>
      <div className="text-zinc-400 text-sm">jane@example.com</div>
    </div>
  </li>
</ul>`,
    preview: <ul className="space-y-2"><li className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white"><div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center"><span className="text-white text-sm font-medium">JD</span></div><div><div className="font-medium">John Doe</div><div className="text-zinc-400 text-sm">john@example.com</div></div></li><li className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white"><div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center"><span className="text-white text-sm font-medium">JS</span></div><div><div className="font-medium">Jane Smith</div><div className="text-zinc-400 text-sm">jane@example.com</div></div></li></ul>
  },
  {
    name: "List with Checkboxes",
    code: `<ul className="space-y-2">
  <li className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">
    <input type="checkbox" className="rounded" />
    <span>List item 1</span>
  </li>
  <li className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">
    <input type="checkbox" className="rounded" />
    <span>List item 2</span>
  </li>
  <li className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white">
    <input type="checkbox" className="rounded" />
    <span>List item 3</span>
  </li>
</ul>`,
    preview: <ul className="space-y-2"><li className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white"><input type="checkbox" className="rounded" /><span>List item 1</span></li><li className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white"><input type="checkbox" className="rounded" /><span>List item 2</span></li><li className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white"><input type="checkbox" className="rounded" /><span>List item 3</span></li></ul>
  },
  {
    name: "Compact List",
    code: `<ul className="space-y-1">
  <li className="px-3 py-2 bg-zinc-900 border border-zinc-700 rounded text-white text-sm">
    Compact list item 1
  </li>
  <li className="px-3 py-2 bg-zinc-900 border border-zinc-700 rounded text-white text-sm">
    Compact list item 2
  </li>
  <li className="px-3 py-2 bg-zinc-900 border border-zinc-700 rounded text-white text-sm">
    Compact list item 3
  </li>
</ul>`,
    preview: <ul className="space-y-1"><li className="px-3 py-2 bg-zinc-900 border border-zinc-700 rounded text-white text-sm">Compact list item 1</li><li className="px-3 py-2 bg-zinc-900 border border-zinc-700 rounded text-white text-sm">Compact list item 2</li><li className="px-3 py-2 bg-zinc-900 border border-zinc-700 rounded text-white text-sm">Compact list item 3</li></ul>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function ListExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">List</h1>
          <p className="text-lg text-zinc-400">
            Listas para mostrar elementos. Incluye variantes básicas, con iconos, acciones, descripciones y estados.
          </p>
        </header>

        <div className="space-y-8">
          {listVariants.map((variant, index) => (
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