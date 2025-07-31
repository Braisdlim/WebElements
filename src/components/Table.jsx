import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const tableVariants = [
  {
    name: "Basic Table",
    code: `<div className="overflow-x-auto">
  <table className="w-full bg-zinc-900 border border-zinc-700 rounded-lg">
    <thead>
      <tr className="border-b border-zinc-700">
        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Role</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Status</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-zinc-700">
      <tr className="hover:bg-zinc-800 transition-colors">
        <td className="px-6 py-4 whitespace-nowrap text-white">John Doe</td>
        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">john@example.com</td>
        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">Admin</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 py-1 text-xs font-medium bg-green-900 text-green-300 rounded-full">Active</span>
        </td>
      </tr>
      <tr className="hover:bg-zinc-800 transition-colors">
        <td className="px-6 py-4 whitespace-nowrap text-white">Jane Smith</td>
        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">jane@example.com</td>
        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">User</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 py-1 text-xs font-medium bg-yellow-900 text-yellow-300 rounded-full">Pending</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
    preview: <div className="overflow-x-auto"><table className="w-full bg-zinc-900 border border-zinc-700 rounded-lg"><thead><tr className="border-b border-zinc-700"><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Name</th><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</th><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Role</th><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Status</th></tr></thead><tbody className="divide-y divide-zinc-700"><tr className="hover:bg-zinc-800 transition-colors"><td className="px-6 py-4 whitespace-nowrap text-white">John Doe</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">john@example.com</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">Admin</td><td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-1 text-xs font-medium bg-green-900 text-green-300 rounded-full">Active</span></td></tr><tr className="hover:bg-zinc-800 transition-colors"><td className="px-6 py-4 whitespace-nowrap text-white">Jane Smith</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">jane@example.com</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">User</td><td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-1 text-xs font-medium bg-yellow-900 text-yellow-300 rounded-full">Pending</span></td></tr></tbody></table></div>
  },
  {
    name: "Table with Actions",
    code: `<div className="overflow-x-auto">
  <table className="w-full bg-zinc-900 border border-zinc-700 rounded-lg">
    <thead>
      <tr className="border-b border-zinc-700">
        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Role</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-zinc-700">
      <tr className="hover:bg-zinc-800 transition-colors">
        <td className="px-6 py-4 whitespace-nowrap text-white">John Doe</td>
        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">john@example.com</td>
        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">Admin</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">Edit</button>
            <button className="px-3 py-1 bg-red-900 text-red-300 rounded text-sm hover:bg-red-800 transition-colors">Delete</button>
          </div>
        </td>
      </tr>
      <tr className="hover:bg-zinc-800 transition-colors">
        <td className="px-6 py-4 whitespace-nowrap text-white">Jane Smith</td>
        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">jane@example.com</td>
        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">User</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">Edit</button>
            <button className="px-3 py-1 bg-red-900 text-red-300 rounded text-sm hover:bg-red-800 transition-colors">Delete</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
    preview: <div className="overflow-x-auto"><table className="w-full bg-zinc-900 border border-zinc-700 rounded-lg"><thead><tr className="border-b border-zinc-700"><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Name</th><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</th><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Role</th><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Actions</th></tr></thead><tbody className="divide-y divide-zinc-700"><tr className="hover:bg-zinc-800 transition-colors"><td className="px-6 py-4 whitespace-nowrap text-white">John Doe</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">john@example.com</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">Admin</td><td className="px-6 py-4 whitespace-nowrap"><div className="flex space-x-2"><button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">Edit</button><button className="px-3 py-1 bg-red-900 text-red-300 rounded text-sm hover:bg-red-800 transition-colors">Delete</button></div></td></tr><tr className="hover:bg-zinc-800 transition-colors"><td className="px-6 py-4 whitespace-nowrap text-white">Jane Smith</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">jane@example.com</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">User</td><td className="px-6 py-4 whitespace-nowrap"><div className="flex space-x-2"><button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">Edit</button><button className="px-3 py-1 bg-red-900 text-red-300 rounded text-sm hover:bg-red-800 transition-colors">Delete</button></div></td></tr></tbody></table></div>
  },
  {
    name: "Table with Checkboxes",
    code: `<div className="overflow-x-auto">
  <table className="w-full bg-zinc-900 border border-zinc-700 rounded-lg">
    <thead>
      <tr className="border-b border-zinc-700">
        <th className="px-6 py-3 text-left">
          <input type="checkbox" className="rounded" />
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Role</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-zinc-700">
      <tr className="hover:bg-zinc-800 transition-colors">
        <td className="px-6 py-4 whitespace-nowrap">
          <input type="checkbox" className="rounded" />
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-white">John Doe</td>
        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">john@example.com</td>
        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">Admin</td>
      </tr>
      <tr className="hover:bg-zinc-800 transition-colors">
        <td className="px-6 py-4 whitespace-nowrap">
          <input type="checkbox" className="rounded" />
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-white">Jane Smith</td>
        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">jane@example.com</td>
        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">User</td>
      </tr>
    </tbody>
  </table>
</div>`,
    preview: <div className="overflow-x-auto"><table className="w-full bg-zinc-900 border border-zinc-700 rounded-lg"><thead><tr className="border-b border-zinc-700"><th className="px-6 py-3 text-left"><input type="checkbox" className="rounded" /></th><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Name</th><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</th><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Role</th></tr></thead><tbody className="divide-y divide-zinc-700"><tr className="hover:bg-zinc-800 transition-colors"><td className="px-6 py-4 whitespace-nowrap"><input type="checkbox" className="rounded" /></td><td className="px-6 py-4 whitespace-nowrap text-white">John Doe</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">john@example.com</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">Admin</td></tr><tr className="hover:bg-zinc-800 transition-colors"><td className="px-6 py-4 whitespace-nowrap"><input type="checkbox" className="rounded" /></td><td className="px-6 py-4 whitespace-nowrap text-white">Jane Smith</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">jane@example.com</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">User</td></tr></tbody></table></div>
  },
  {
    name: "Table with Pagination",
    code: `<div className="space-y-4">
  <div className="overflow-x-auto">
    <table className="w-full bg-zinc-900 border border-zinc-700 rounded-lg">
      <thead>
        <tr className="border-b border-zinc-700">
          <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Role</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-zinc-700">
        <tr className="hover:bg-zinc-800 transition-colors">
          <td className="px-6 py-4 whitespace-nowrap text-white">John Doe</td>
          <td className="px-6 py-4 whitespace-nowrap text-zinc-300">john@example.com</td>
          <td className="px-6 py-4 whitespace-nowrap text-zinc-300">Admin</td>
        </tr>
        <tr className="hover:bg-zinc-800 transition-colors">
          <td className="px-6 py-4 whitespace-nowrap text-white">Jane Smith</td>
          <td className="px-6 py-4 whitespace-nowrap text-zinc-300">jane@example.com</td>
          <td className="px-6 py-4 whitespace-nowrap text-zinc-300">User</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="flex items-center justify-between">
    <div className="text-sm text-zinc-400">
      Showing 1 to 2 of 2 results
    </div>
    <div className="flex space-x-2">
      <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors disabled:opacity-50" disabled>
        Previous
      </button>
      <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">
        1
      </button>
      <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors disabled:opacity-50" disabled>
        Next
      </button>
    </div>
  </div>
</div>`,
    preview: <div className="space-y-4"><div className="overflow-x-auto"><table className="w-full bg-zinc-900 border border-zinc-700 rounded-lg"><thead><tr className="border-b border-zinc-700"><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Name</th><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</th><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Role</th></tr></thead><tbody className="divide-y divide-zinc-700"><tr className="hover:bg-zinc-800 transition-colors"><td className="px-6 py-4 whitespace-nowrap text-white">John Doe</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">john@example.com</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">Admin</td></tr><tr className="hover:bg-zinc-800 transition-colors"><td className="px-6 py-4 whitespace-nowrap text-white">Jane Smith</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">jane@example.com</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">User</td></tr></tbody></table></div><div className="flex items-center justify-between"><div className="text-sm text-zinc-400">Showing 1 to 2 of 2 results</div><div className="flex space-x-2"><button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors disabled:opacity-50" disabled>Previous</button><button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">1</button><button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors disabled:opacity-50" disabled>Next</button></div></div></div>
  },
  {
    name: "Table with Search",
    code: `<div className="space-y-4">
  <div className="flex justify-between items-center">
    <h3 className="text-lg font-medium text-white">Users</h3>
    <div className="relative">
      <input 
        type="text" 
        placeholder="Search users..."
        className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
      />
    </div>
  </div>
  <div className="overflow-x-auto">
    <table className="w-full bg-zinc-900 border border-zinc-700 rounded-lg">
      <thead>
        <tr className="border-b border-zinc-700">
          <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Role</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-zinc-700">
        <tr className="hover:bg-zinc-800 transition-colors">
          <td className="px-6 py-4 whitespace-nowrap text-white">John Doe</td>
          <td className="px-6 py-4 whitespace-nowrap text-zinc-300">john@example.com</td>
          <td className="px-6 py-4 whitespace-nowrap text-zinc-300">Admin</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 py-1 text-xs font-medium bg-green-900 text-green-300 rounded-full">Active</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
    preview: <div className="space-y-4"><div className="flex justify-between items-center"><h3 className="text-lg font-medium text-white">Users</h3><div className="relative"><input type="text" placeholder="Search users..." className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent" /></div></div><div className="overflow-x-auto"><table className="w-full bg-zinc-900 border border-zinc-700 rounded-lg"><thead><tr className="border-b border-zinc-700"><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Name</th><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</th><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Role</th><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Status</th></tr></thead><tbody className="divide-y divide-zinc-700"><tr className="hover:bg-zinc-800 transition-colors"><td className="px-6 py-4 whitespace-nowrap text-white">John Doe</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">john@example.com</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">Admin</td><td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-1 text-xs font-medium bg-green-900 text-green-300 rounded-full">Active</span></td></tr></tbody></table></div></div>
  },
  {
    name: "Table with Sorting",
    code: `<div className="overflow-x-auto">
  <table className="w-full bg-zinc-900 border border-zinc-700 rounded-lg">
    <thead>
      <tr className="border-b border-zinc-700">
        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider cursor-pointer hover:text-white transition-colors">
          Name ▼
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider cursor-pointer hover:text-white transition-colors">
          Email
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider cursor-pointer hover:text-white transition-colors">
          Role
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider cursor-pointer hover:text-white transition-colors">
          Status
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-zinc-700">
      <tr className="hover:bg-zinc-800 transition-colors">
        <td className="px-6 py-4 whitespace-nowrap text-white">John Doe</td>
        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">john@example.com</td>
        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">Admin</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 py-1 text-xs font-medium bg-green-900 text-green-300 rounded-full">Active</span>
        </td>
      </tr>
      <tr className="hover:bg-zinc-800 transition-colors">
        <td className="px-6 py-4 whitespace-nowrap text-white">Jane Smith</td>
        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">jane@example.com</td>
        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">User</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 py-1 text-xs font-medium bg-yellow-900 text-yellow-300 rounded-full">Pending</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
    preview: <div className="overflow-x-auto"><table className="w-full bg-zinc-900 border border-zinc-700 rounded-lg"><thead><tr className="border-b border-zinc-700"><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider cursor-pointer hover:text-white transition-colors">Name ▼</th><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider cursor-pointer hover:text-white transition-colors">Email</th><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider cursor-pointer hover:text-white transition-colors">Role</th><th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider cursor-pointer hover:text-white transition-colors">Status</th></tr></thead><tbody className="divide-y divide-zinc-700"><tr className="hover:bg-zinc-800 transition-colors"><td className="px-6 py-4 whitespace-nowrap text-white">John Doe</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">john@example.com</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">Admin</td><td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-1 text-xs font-medium bg-green-900 text-green-300 rounded-full">Active</span></td></tr><tr className="hover:bg-zinc-800 transition-colors"><td className="px-6 py-4 whitespace-nowrap text-white">Jane Smith</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">jane@example.com</td><td className="px-6 py-4 whitespace-nowrap text-zinc-300">User</td><td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-1 text-xs font-medium bg-yellow-900 text-yellow-300 rounded-full">Pending</span></td></tr></tbody></table></div>
  },
  {
    name: "Compact Table",
    code: `<div className="overflow-x-auto">
  <table className="w-full bg-zinc-900 border border-zinc-700 rounded-lg">
    <thead>
      <tr className="border-b border-zinc-700">
        <th className="px-4 py-2 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Name</th>
        <th className="px-4 py-2 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</th>
        <th className="px-4 py-2 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Role</th>
        <th className="px-4 py-2 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Status</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-zinc-700">
      <tr className="hover:bg-zinc-800 transition-colors">
        <td className="px-4 py-2 whitespace-nowrap text-white text-sm">John Doe</td>
        <td className="px-4 py-2 whitespace-nowrap text-zinc-300 text-sm">john@example.com</td>
        <td className="px-4 py-2 whitespace-nowrap text-zinc-300 text-sm">Admin</td>
        <td className="px-4 py-2 whitespace-nowrap">
          <span className="px-2 py-0.5 text-xs font-medium bg-green-900 text-green-300 rounded-full">Active</span>
        </td>
      </tr>
      <tr className="hover:bg-zinc-800 transition-colors">
        <td className="px-4 py-2 whitespace-nowrap text-white text-sm">Jane Smith</td>
        <td className="px-4 py-2 whitespace-nowrap text-zinc-300 text-sm">jane@example.com</td>
        <td className="px-4 py-2 whitespace-nowrap text-zinc-300 text-sm">User</td>
        <td className="px-4 py-2 whitespace-nowrap">
          <span className="px-2 py-0.5 text-xs font-medium bg-yellow-900 text-yellow-300 rounded-full">Pending</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
    preview: <div className="overflow-x-auto"><table className="w-full bg-zinc-900 border border-zinc-700 rounded-lg"><thead><tr className="border-b border-zinc-700"><th className="px-4 py-2 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Name</th><th className="px-4 py-2 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Email</th><th className="px-4 py-2 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Role</th><th className="px-4 py-2 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Status</th></tr></thead><tbody className="divide-y divide-zinc-700"><tr className="hover:bg-zinc-800 transition-colors"><td className="px-4 py-2 whitespace-nowrap text-white text-sm">John Doe</td><td className="px-4 py-2 whitespace-nowrap text-zinc-300 text-sm">john@example.com</td><td className="px-4 py-2 whitespace-nowrap text-zinc-300 text-sm">Admin</td><td className="px-4 py-2 whitespace-nowrap"><span className="px-2 py-0.5 text-xs font-medium bg-green-900 text-green-300 rounded-full">Active</span></td></tr><tr className="hover:bg-zinc-800 transition-colors"><td className="px-4 py-2 whitespace-nowrap text-white text-sm">Jane Smith</td><td className="px-4 py-2 whitespace-nowrap text-zinc-300 text-sm">jane@example.com</td><td className="px-4 py-2 whitespace-nowrap text-zinc-300 text-sm">User</td><td className="px-4 py-2 whitespace-nowrap"><span className="px-2 py-0.5 text-xs font-medium bg-yellow-900 text-yellow-300 rounded-full">Pending</span></td></tr></tbody></table></div>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function TableExamples() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Table</h1>
          <p className="text-lg text-zinc-400">
            Tablas para mostrar datos estructurados. Incluye variantes básicas, con acciones, paginación, búsqueda y ordenamiento.
          </p>
        </header>

        <div className="space-y-8">
          {tableVariants.map((variant, index) => (
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