import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const dataTableVariants = [
  {
    name: "Basic Data Table",
    code: `<div className="max-w-4xl">
  <div className="bg-zinc-900 rounded-lg overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-zinc-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          <tr className="hover:bg-zinc-800">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">John Doe</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">john@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">Admin</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>
            </td>
          </tr>
          <tr className="hover:bg-zinc-800">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Jane Smith</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">jane@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">User</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span>
            </td>
          </tr>
          <tr className="hover:bg-zinc-800">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Bob Johnson</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">bob@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">Editor</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Inactive</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
    preview: (
      <div className="max-w-4xl">
        <div className="bg-zinc-900 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                <tr className="hover:bg-zinc-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">John Doe</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">john@example.com</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">Admin</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Jane Smith</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">jane@example.com</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">User</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span>
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Bob Johnson</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">bob@example.com</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">Editor</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Inactive</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Data Table with Actions",
    code: `<div className="max-w-4xl">
  <div className="bg-zinc-900 rounded-lg overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-zinc-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          <tr className="hover:bg-zinc-800">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">John Doe</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">john@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">Admin</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">
              <div className="flex gap-2">
                <button className="text-blue-400 hover:text-blue-300">Edit</button>
                <button className="text-red-400 hover:text-red-300">Delete</button>
              </div>
            </td>
          </tr>
          <tr className="hover:bg-zinc-800">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Jane Smith</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">jane@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">User</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">
              <div className="flex gap-2">
                <button className="text-blue-400 hover:text-blue-300">Edit</button>
                <button className="text-red-400 hover:text-red-300">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
    preview: (
      <div className="max-w-4xl">
        <div className="bg-zinc-900 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                <tr className="hover:bg-zinc-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">John Doe</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">john@example.com</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">Admin</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300">Edit</button>
                      <button className="text-red-400 hover:text-red-300">Delete</button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Jane Smith</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">jane@example.com</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">User</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300">Edit</button>
                      <button className="text-red-400 hover:text-red-300">Delete</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Data Table with Filters",
    code: `<div className="max-w-4xl">
  <div className="bg-zinc-900 rounded-lg overflow-hidden">
    <div className="p-4 border-b border-zinc-800">
      <div className="flex gap-4">
        <input 
          type="text" 
          placeholder="Search..."
          className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
        />
        <select className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent">
          <option>All Roles</option>
          <option>Admin</option>
          <option>User</option>
          <option>Editor</option>
        </select>
        <select className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent">
          <option>All Status</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Inactive</option>
        </select>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-zinc-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          <tr className="hover:bg-zinc-800">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">John Doe</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">john@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">Admin</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>
            </td>
          </tr>
          <tr className="hover:bg-zinc-800">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Jane Smith</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">jane@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">User</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
    preview: (
      <div className="max-w-4xl">
        <div className="bg-zinc-900 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-zinc-800">
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="Search..."
                className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
              />
              <select className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent">
                <option>All Roles</option>
                <option>Admin</option>
                <option>User</option>
                <option>Editor</option>
              </select>
              <select className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent">
                <option>All Status</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                <tr className="hover:bg-zinc-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">John Doe</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">john@example.com</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">Admin</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>
                  </td>
                </tr>
                <tr className="hover:bg-zinc-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Jane Smith</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">jane@example.com</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">User</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function DataTable() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Data Table</h1>
          <p className="text-lg text-zinc-400">
            Tablas de datos avanzadas con filtros para mostrar información estructurada.
          </p>
        </header>

        <div className="space-y-8">
          {dataTableVariants.map((variant, index) => (
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