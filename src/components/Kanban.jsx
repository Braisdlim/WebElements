import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const kanbanVariants = [
  {
    name: "Basic Kanban Board",
    code: `<div className="max-w-6xl">
  <div className="grid grid-cols-3 gap-6">
    <div className="bg-zinc-900 rounded-lg p-4">
      <h3 className="text-white font-semibold mb-4">To Do</h3>
      <div className="space-y-3">
        <div className="bg-zinc-800 rounded-lg p-3 cursor-pointer hover:bg-zinc-700 transition-colors">
          <div className="text-white font-medium">Design homepage</div>
          <div className="text-zinc-400 text-sm mt-1">Create wireframes and mockups</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Design</span>
            <span className="text-zinc-500 text-xs">2 days ago</span>
          </div>
        </div>
        <div className="bg-zinc-800 rounded-lg p-3 cursor-pointer hover:bg-zinc-700 transition-colors">
          <div className="text-white font-medium">Setup database</div>
          <div className="text-zinc-400 text-sm mt-1">Configure PostgreSQL</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Backend</span>
            <span className="text-zinc-500 text-xs">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-zinc-900 rounded-lg p-4">
      <h3 className="text-white font-semibold mb-4">In Progress</h3>
      <div className="space-y-3">
        <div className="bg-zinc-800 rounded-lg p-3 cursor-pointer hover:bg-zinc-700 transition-colors">
          <div className="text-white font-medium">Implement API</div>
          <div className="text-zinc-400 text-sm mt-1">Create REST endpoints</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">API</span>
            <span className="text-zinc-500 text-xs">Today</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-zinc-900 rounded-lg p-4">
      <h3 className="text-white font-semibold mb-4">Done</h3>
      <div className="space-y-3">
        <div className="bg-zinc-800 rounded-lg p-3 cursor-pointer hover:bg-zinc-700 transition-colors">
          <div className="text-white font-medium">Project setup</div>
          <div className="text-zinc-400 text-sm mt-1">Initialize repository</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Setup</span>
            <span className="text-zinc-500 text-xs">3 days ago</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="max-w-6xl">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-zinc-900 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-4">To Do</h3>
            <div className="space-y-3">
              <div className="bg-zinc-800 rounded-lg p-3 cursor-pointer hover:bg-zinc-700 transition-colors">
                <div className="text-white font-medium">Design homepage</div>
                <div className="text-zinc-400 text-sm mt-1">Create wireframes and mockups</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Design</span>
                  <span className="text-zinc-500 text-xs">2 days ago</span>
                </div>
              </div>
              <div className="bg-zinc-800 rounded-lg p-3 cursor-pointer hover:bg-zinc-700 transition-colors">
                <div className="text-white font-medium">Setup database</div>
                <div className="text-zinc-400 text-sm mt-1">Configure PostgreSQL</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Backend</span>
                  <span className="text-zinc-500 text-xs">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-4">In Progress</h3>
            <div className="space-y-3">
              <div className="bg-zinc-800 rounded-lg p-3 cursor-pointer hover:bg-zinc-700 transition-colors">
                <div className="text-white font-medium">Implement API</div>
                <div className="text-zinc-400 text-sm mt-1">Create REST endpoints</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">API</span>
                  <span className="text-zinc-500 text-xs">Today</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-4">Done</h3>
            <div className="space-y-3">
              <div className="bg-zinc-800 rounded-lg p-3 cursor-pointer hover:bg-zinc-700 transition-colors">
                <div className="text-white font-medium">Project setup</div>
                <div className="text-zinc-400 text-sm mt-1">Initialize repository</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Setup</span>
                  <span className="text-zinc-500 text-xs">3 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Kanban with Drag & Drop",
    code: `<div className="max-w-6xl">
  <div className="grid grid-cols-4 gap-6">
    <div className="bg-zinc-900 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold">Backlog</h3>
        <span className="text-zinc-400 text-sm">3</span>
      </div>
      <div className="space-y-3">
        <div className="bg-zinc-800 rounded-lg p-3 cursor-move hover:bg-zinc-700 transition-colors border-l-4 border-red-500">
          <div className="text-white font-medium">Bug fix</div>
          <div className="text-zinc-400 text-sm mt-1">Fix login issue</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Bug</span>
            <span className="text-zinc-500 text-xs">High</span>
          </div>
        </div>
        <div className="bg-zinc-800 rounded-lg p-3 cursor-move hover:bg-zinc-700 transition-colors border-l-4 border-blue-500">
          <div className="text-white font-medium">New feature</div>
          <div className="text-zinc-400 text-sm mt-1">Add dark mode</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Feature</span>
            <span className="text-zinc-500 text-xs">Medium</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-zinc-900 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold">To Do</h3>
        <span className="text-zinc-400 text-sm">2</span>
      </div>
      <div className="space-y-3">
        <div className="bg-zinc-800 rounded-lg p-3 cursor-move hover:bg-zinc-700 transition-colors border-l-4 border-green-500">
          <div className="text-white font-medium">Design review</div>
          <div className="text-zinc-400 text-sm mt-1">Review mockups</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Design</span>
            <span className="text-zinc-500 text-xs">Low</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-zinc-900 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold">In Progress</h3>
        <span className="text-zinc-400 text-sm">1</span>
      </div>
      <div className="space-y-3">
        <div className="bg-zinc-800 rounded-lg p-3 cursor-move hover:bg-zinc-700 transition-colors border-l-4 border-yellow-500">
          <div className="text-white font-medium">API development</div>
          <div className="text-zinc-400 text-sm mt-1">Build endpoints</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Backend</span>
            <span className="text-zinc-500 text-xs">High</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-zinc-900 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold">Done</h3>
        <span className="text-zinc-400 text-sm">0</span>
      </div>
      <div className="space-y-3">
        <div className="text-zinc-500 text-sm text-center py-8">No tasks completed</div>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="max-w-6xl">
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-zinc-900 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Backlog</h3>
              <span className="text-zinc-400 text-sm">3</span>
            </div>
            <div className="space-y-3">
              <div className="bg-zinc-800 rounded-lg p-3 cursor-move hover:bg-zinc-700 transition-colors border-l-4 border-red-500">
                <div className="text-white font-medium">Bug fix</div>
                <div className="text-zinc-400 text-sm mt-1">Fix login issue</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Bug</span>
                  <span className="text-zinc-500 text-xs">High</span>
                </div>
              </div>
              <div className="bg-zinc-800 rounded-lg p-3 cursor-move hover:bg-zinc-700 transition-colors border-l-4 border-blue-500">
                <div className="text-white font-medium">New feature</div>
                <div className="text-zinc-400 text-sm mt-1">Add dark mode</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Feature</span>
                  <span className="text-zinc-500 text-xs">Medium</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">To Do</h3>
              <span className="text-zinc-400 text-sm">2</span>
            </div>
            <div className="space-y-3">
              <div className="bg-zinc-800 rounded-lg p-3 cursor-move hover:bg-zinc-700 transition-colors border-l-4 border-green-500">
                <div className="text-white font-medium">Design review</div>
                <div className="text-zinc-400 text-sm mt-1">Review mockups</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Design</span>
                  <span className="text-zinc-500 text-xs">Low</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">In Progress</h3>
              <span className="text-zinc-400 text-sm">1</span>
            </div>
            <div className="space-y-3">
              <div className="bg-zinc-800 rounded-lg p-3 cursor-move hover:bg-zinc-700 transition-colors border-l-4 border-yellow-500">
                <div className="text-white font-medium">API development</div>
                <div className="text-zinc-400 text-sm mt-1">Build endpoints</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Backend</span>
                  <span className="text-zinc-500 text-xs">High</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Done</h3>
              <span className="text-zinc-400 text-sm">0</span>
            </div>
            <div className="space-y-3">
              <div className="text-zinc-500 text-sm text-center py-8">No tasks completed</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Kanban with Filters",
    code: `<div className="max-w-6xl">
  <div className="mb-6">
    <div className="flex gap-4">
      <input 
        type="text" 
        placeholder="Search tasks..."
        className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
      />
      <select className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent">
        <option>All Priorities</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <select className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent">
        <option>All Types</option>
        <option>Bug</option>
        <option>Feature</option>
        <option>Design</option>
      </select>
    </div>
  </div>
  <div className="grid grid-cols-3 gap-6">
    <div className="bg-zinc-900 rounded-lg p-4">
      <h3 className="text-white font-semibold mb-4">To Do</h3>
      <div className="space-y-3">
        <div className="bg-zinc-800 rounded-lg p-3 cursor-pointer hover:bg-zinc-700 transition-colors">
          <div className="text-white font-medium">User authentication</div>
          <div className="text-zinc-400 text-sm mt-1">Implement login system</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Feature</span>
            <span className="text-zinc-500 text-xs">High</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-zinc-900 rounded-lg p-4">
      <h3 className="text-white font-semibold mb-4">In Progress</h3>
      <div className="space-y-3">
        <div className="bg-zinc-800 rounded-lg p-3 cursor-pointer hover:bg-zinc-700 transition-colors">
          <div className="text-white font-medium">Database schema</div>
          <div className="text-zinc-400 text-sm mt-1">Design tables</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Backend</span>
            <span className="text-zinc-500 text-xs">Medium</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-zinc-900 rounded-lg p-4">
      <h3 className="text-white font-semibold mb-4">Done</h3>
      <div className="space-y-3">
        <div className="bg-zinc-800 rounded-lg p-3 cursor-pointer hover:bg-zinc-700 transition-colors">
          <div className="text-white font-medium">Project setup</div>
          <div className="text-zinc-400 text-sm mt-1">Initialize repository</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Setup</span>
            <span className="text-zinc-500 text-xs">Low</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="max-w-6xl">
        <div className="mb-6">
          <div className="flex gap-4">
            <input 
              type="text" 
              placeholder="Search tasks..."
              className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
            />
            <select className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent">
              <option>All Priorities</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <select className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent">
              <option>All Types</option>
              <option>Bug</option>
              <option>Feature</option>
              <option>Design</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-zinc-900 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-4">To Do</h3>
            <div className="space-y-3">
              <div className="bg-zinc-800 rounded-lg p-3 cursor-pointer hover:bg-zinc-700 transition-colors">
                <div className="text-white font-medium">User authentication</div>
                <div className="text-zinc-400 text-sm mt-1">Implement login system</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Feature</span>
                  <span className="text-zinc-500 text-xs">High</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-4">In Progress</h3>
            <div className="space-y-3">
              <div className="bg-zinc-800 rounded-lg p-3 cursor-pointer hover:bg-zinc-700 transition-colors">
                <div className="text-white font-medium">Database schema</div>
                <div className="text-zinc-400 text-sm mt-1">Design tables</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Backend</span>
                  <span className="text-zinc-500 text-xs">Medium</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-4">Done</h3>
            <div className="space-y-3">
              <div className="bg-zinc-800 rounded-lg p-3 cursor-pointer hover:bg-zinc-700 transition-colors">
                <div className="text-white font-medium">Project setup</div>
                <div className="text-zinc-400 text-sm mt-1">Initialize repository</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Setup</span>
                  <span className="text-zinc-500 text-xs">Low</span>
                </div>
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

export default function Kanban() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Kanban</h1>
          <p className="text-lg text-zinc-400">
            Tableros Kanban para gestión de tareas con drag & drop y filtros.
          </p>
        </header>

        <div className="space-y-8">
          {kanbanVariants.map((variant, index) => (
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