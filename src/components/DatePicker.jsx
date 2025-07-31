import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const datePickerVariants = [
  {
    name: "Basic Date Picker",
    code: `<div className="relative max-w-xs">
  <input 
    type="text" 
    placeholder="Select date..."
    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
  />
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4">
    <div className="flex items-center justify-between mb-4">
      <button className="text-zinc-400 hover:text-white">←</button>
      <span className="text-white font-medium">January 2024</span>
      <button className="text-zinc-400 hover:text-white">→</button>
    </div>
    <div className="grid grid-cols-7 gap-1">
      <div className="text-zinc-400 text-xs text-center py-1">Su</div>
      <div className="text-zinc-400 text-xs text-center py-1">Mo</div>
      <div className="text-zinc-400 text-xs text-center py-1">Tu</div>
      <div className="text-zinc-400 text-xs text-center py-1">We</div>
      <div className="text-zinc-400 text-xs text-center py-1">Th</div>
      <div className="text-zinc-400 text-xs text-center py-1">Fr</div>
      <div className="text-zinc-400 text-xs text-center py-1">Sa</div>
      <div className="text-zinc-600 text-sm text-center py-1">31</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">1</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">2</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">3</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">4</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">5</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">6</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">7</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">8</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">9</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">10</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">11</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">12</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">13</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">14</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">15</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">16</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">17</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">18</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">19</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">20</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">21</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">22</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">23</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">24</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">25</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">26</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">27</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">28</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">29</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">30</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">31</div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative max-w-xs">
        <input 
          type="text" 
          placeholder="Select date..."
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
        />
        <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <button className="text-zinc-400 hover:text-white">←</button>
            <span className="text-white font-medium">January 2024</span>
            <button className="text-zinc-400 hover:text-white">→</button>
          </div>
          <div className="grid grid-cols-7 gap-1">
            <div className="text-zinc-400 text-xs text-center py-1">Su</div>
            <div className="text-zinc-400 text-xs text-center py-1">Mo</div>
            <div className="text-zinc-400 text-xs text-center py-1">Tu</div>
            <div className="text-zinc-400 text-xs text-center py-1">We</div>
            <div className="text-zinc-400 text-xs text-center py-1">Th</div>
            <div className="text-zinc-400 text-xs text-center py-1">Fr</div>
            <div className="text-zinc-400 text-xs text-center py-1">Sa</div>
            <div className="text-zinc-600 text-sm text-center py-1">31</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">1</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">2</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">3</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">4</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">5</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">6</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">7</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">8</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">9</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">10</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">11</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">12</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">13</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">14</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">15</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">16</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">17</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">18</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">19</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">20</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">21</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">22</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">23</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">24</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">25</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">26</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">27</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">28</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">29</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">30</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">31</div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Date Range Picker",
    code: `<div className="space-y-4">
  <div className="flex gap-4">
    <div className="relative max-w-xs">
      <input 
        type="text" 
        placeholder="Start date..."
        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
      />
    </div>
    <div className="relative max-w-xs">
      <input 
        type="text" 
        placeholder="End date..."
        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
      />
    </div>
  </div>
  <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
    <div className="flex items-center justify-between mb-4">
      <button className="text-zinc-400 hover:text-white">←</button>
      <span className="text-white font-medium">January 2024</span>
      <button className="text-zinc-400 hover:text-white">→</button>
    </div>
    <div className="grid grid-cols-7 gap-1">
      <div className="text-zinc-400 text-xs text-center py-1">Su</div>
      <div className="text-zinc-400 text-xs text-center py-1">Mo</div>
      <div className="text-zinc-400 text-xs text-center py-1">Tu</div>
      <div className="text-zinc-400 text-xs text-center py-1">We</div>
      <div className="text-zinc-400 text-xs text-center py-1">Th</div>
      <div className="text-zinc-400 text-xs text-center py-1">Fr</div>
      <div className="text-zinc-400 text-xs text-center py-1">Sa</div>
      <div className="text-zinc-600 text-sm text-center py-1">31</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">1</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">2</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">3</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">4</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">5</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">6</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">7</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">8</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">9</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">10</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">11</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">12</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">13</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">14</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">15</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">16</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">17</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">18</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">19</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">20</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">21</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">22</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">23</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">24</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">25</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">26</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">27</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">28</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">29</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">30</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">31</div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="relative max-w-xs">
            <input 
              type="text" 
              placeholder="Start date..."
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
            />
          </div>
          <div className="relative max-w-xs">
            <input 
              type="text" 
              placeholder="End date..."
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <button className="text-zinc-400 hover:text-white">←</button>
            <span className="text-white font-medium">January 2024</span>
            <button className="text-zinc-400 hover:text-white">→</button>
          </div>
          <div className="grid grid-cols-7 gap-1">
            <div className="text-zinc-400 text-xs text-center py-1">Su</div>
            <div className="text-zinc-400 text-xs text-center py-1">Mo</div>
            <div className="text-zinc-400 text-xs text-center py-1">Tu</div>
            <div className="text-zinc-400 text-xs text-center py-1">We</div>
            <div className="text-zinc-400 text-xs text-center py-1">Th</div>
            <div className="text-zinc-400 text-xs text-center py-1">Fr</div>
            <div className="text-zinc-400 text-xs text-center py-1">Sa</div>
            <div className="text-zinc-600 text-sm text-center py-1">31</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">1</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">2</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">3</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">4</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">5</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">6</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">7</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">8</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">9</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">10</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">11</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">12</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">13</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">14</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">15</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">16</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">17</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">18</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">19</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">20</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">21</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">22</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">23</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">24</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">25</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">26</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">27</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">28</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">29</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">30</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">31</div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Date Picker with Quick Actions",
    code: `<div className="relative max-w-xs">
  <input 
    type="text" 
    placeholder="Select date..."
    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
  />
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4">
    <div className="flex gap-2 mb-4">
      <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">
        Today
      </button>
      <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">
        Yesterday
      </button>
      <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">
        Tomorrow
      </button>
    </div>
    <div className="flex items-center justify-between mb-4">
      <button className="text-zinc-400 hover:text-white">←</button>
      <span className="text-white font-medium">January 2024</span>
      <button className="text-zinc-400 hover:text-white">→</button>
    </div>
    <div className="grid grid-cols-7 gap-1">
      <div className="text-zinc-400 text-xs text-center py-1">Su</div>
      <div className="text-zinc-400 text-xs text-center py-1">Mo</div>
      <div className="text-zinc-400 text-xs text-center py-1">Tu</div>
      <div className="text-zinc-400 text-xs text-center py-1">We</div>
      <div className="text-zinc-400 text-xs text-center py-1">Th</div>
      <div className="text-zinc-400 text-xs text-center py-1">Fr</div>
      <div className="text-zinc-400 text-xs text-center py-1">Sa</div>
      <div className="text-zinc-600 text-sm text-center py-1">31</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">1</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">2</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">3</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">4</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">5</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">6</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">7</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">8</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">9</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">10</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">11</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">12</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">13</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">14</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">15</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">16</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">17</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">18</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">19</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">20</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">21</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">22</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">23</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">24</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">25</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">26</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">27</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">28</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">29</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">30</div>
      <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">31</div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative max-w-xs">
        <input 
          type="text" 
          placeholder="Select date..."
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
        />
        <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4">
          <div className="flex gap-2 mb-4">
            <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">
              Today
            </button>
            <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">
              Yesterday
            </button>
            <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">
              Tomorrow
            </button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <button className="text-zinc-400 hover:text-white">←</button>
            <span className="text-white font-medium">January 2024</span>
            <button className="text-zinc-400 hover:text-white">→</button>
          </div>
          <div className="grid grid-cols-7 gap-1">
            <div className="text-zinc-400 text-xs text-center py-1">Su</div>
            <div className="text-zinc-400 text-xs text-center py-1">Mo</div>
            <div className="text-zinc-400 text-xs text-center py-1">Tu</div>
            <div className="text-zinc-400 text-xs text-center py-1">We</div>
            <div className="text-zinc-400 text-xs text-center py-1">Th</div>
            <div className="text-zinc-400 text-xs text-center py-1">Fr</div>
            <div className="text-zinc-400 text-xs text-center py-1">Sa</div>
            <div className="text-zinc-600 text-sm text-center py-1">31</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">1</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">2</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">3</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">4</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">5</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">6</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">7</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">8</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">9</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">10</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">11</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">12</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">13</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">14</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">15</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">16</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">17</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">18</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">19</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">20</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">21</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">22</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">23</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">24</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">25</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">26</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">27</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">28</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">29</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">30</div>
            <div className="text-white text-sm text-center py-1 hover:bg-zinc-800 rounded cursor-pointer">31</div>
          </div>
        </div>
      </div>
    )
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

export default function DatePicker() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Date Picker</h1>
          <p className="text-lg text-zinc-400">
            Selectores de fecha con calendario para una mejor experiencia de usuario.
          </p>
        </header>

        <div className="space-y-8">
          {datePickerVariants.map((variant, index) => (
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