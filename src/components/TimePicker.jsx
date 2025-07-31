import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";

const timePickerVariants = [
  {
    name: "Basic Time Picker",
    code: `<div className="relative max-w-xs">
  <input 
    type="text" 
    placeholder="Select time..."
    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
  />
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4">
    <div className="flex items-center justify-center gap-4">
      <div className="text-center">
        <div className="text-zinc-400 text-xs mb-2">Hour</div>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">00</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">01</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">02</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">03</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">04</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">05</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">06</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">07</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">08</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">09</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">10</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">11</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">12</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">13</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">14</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">15</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">16</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">17</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">18</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">19</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">20</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">21</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">22</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">23</div>
        </div>
      </div>
      <div className="text-white text-2xl">:</div>
      <div className="text-center">
        <div className="text-zinc-400 text-xs mb-2">Minute</div>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">00</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">05</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">10</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">15</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">20</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">25</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">30</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">35</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">40</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">45</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">50</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">55</div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative max-w-xs">
        <input 
          type="text" 
          placeholder="Select time..."
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
        />
        <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="text-zinc-400 text-xs mb-2">Hour</div>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">00</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">01</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">02</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">03</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">04</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">05</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">06</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">07</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">08</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">09</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">10</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">11</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">12</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">13</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">14</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">15</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">16</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">17</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">18</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">19</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">20</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">21</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">22</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">23</div>
              </div>
            </div>
            <div className="text-white text-2xl">:</div>
            <div className="text-center">
              <div className="text-zinc-400 text-xs mb-2">Minute</div>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">00</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">05</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">10</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">15</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">20</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">25</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">30</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">35</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">40</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">45</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">50</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">55</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Time Picker with AM/PM",
    code: `<div className="relative max-w-xs">
  <input 
    type="text" 
    placeholder="Select time..."
    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
  />
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4">
    <div className="flex items-center justify-center gap-4">
      <div className="text-center">
        <div className="text-zinc-400 text-xs mb-2">Hour</div>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">12</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">01</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">02</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">03</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">04</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">05</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">06</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">07</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">08</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">09</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">10</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">11</div>
        </div>
      </div>
      <div className="text-white text-2xl">:</div>
      <div className="text-center">
        <div className="text-zinc-400 text-xs mb-2">Minute</div>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">00</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">05</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">10</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">15</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">20</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">25</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">30</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">35</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">40</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">45</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">50</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">55</div>
        </div>
      </div>
      <div className="text-center">
        <div className="text-zinc-400 text-xs mb-2">Period</div>
        <div className="space-y-1">
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">AM</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">PM</div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative max-w-xs">
        <input 
          type="text" 
          placeholder="Select time..."
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
        />
        <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="text-zinc-400 text-xs mb-2">Hour</div>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">12</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">01</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">02</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">03</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">04</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">05</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">06</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">07</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">08</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">09</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">10</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">11</div>
              </div>
            </div>
            <div className="text-white text-2xl">:</div>
            <div className="text-center">
              <div className="text-zinc-400 text-xs mb-2">Minute</div>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">00</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">05</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">10</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">15</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">20</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">25</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">30</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">35</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">40</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">45</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">50</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">55</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-zinc-400 text-xs mb-2">Period</div>
              <div className="space-y-1">
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">AM</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "Time Picker with Quick Actions",
    code: `<div className="relative max-w-xs">
  <input 
    type="text" 
    placeholder="Select time..."
    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
  />
  <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4">
    <div className="flex gap-2 mb-4">
      <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">
        Now
      </button>
      <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">
        Morning
      </button>
      <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">
        Afternoon
      </button>
      <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">
        Evening
      </button>
    </div>
    <div className="flex items-center justify-center gap-4">
      <div className="text-center">
        <div className="text-zinc-400 text-xs mb-2">Hour</div>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">00</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">01</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">02</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">03</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">04</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">05</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">06</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">07</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">08</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">09</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">10</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">11</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">12</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">13</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">14</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">15</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">16</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">17</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">18</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">19</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">20</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">21</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">22</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">23</div>
        </div>
      </div>
      <div className="text-white text-2xl">:</div>
      <div className="text-center">
        <div className="text-zinc-400 text-xs mb-2">Minute</div>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">00</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">05</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">10</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">15</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">20</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">25</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">30</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">35</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">40</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">45</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">50</div>
          <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">55</div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative max-w-xs">
        <input 
          type="text" 
          placeholder="Select time..."
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
        />
        <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg p-4">
          <div className="flex gap-2 mb-4">
            <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">
              Now
            </button>
            <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">
              Morning
            </button>
            <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">
              Afternoon
            </button>
            <button className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-zinc-700 transition-colors">
              Evening
            </button>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="text-zinc-400 text-xs mb-2">Hour</div>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">00</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">01</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">02</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">03</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">04</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">05</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">06</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">07</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">08</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">09</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">10</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">11</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">12</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">13</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">14</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">15</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">16</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">17</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">18</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">19</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">20</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">21</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">22</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">23</div>
              </div>
            </div>
            <div className="text-white text-2xl">:</div>
            <div className="text-center">
              <div className="text-zinc-400 text-xs mb-2">Minute</div>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">00</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">05</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">10</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">15</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">20</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">25</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">30</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">35</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">40</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">45</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">50</div>
                <div className="px-3 py-1 text-white hover:bg-zinc-800 rounded cursor-pointer text-sm">55</div>
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

export default function TimePicker() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Time Picker</h1>
          <p className="text-lg text-zinc-400">
            Selectores de hora con formato personalizable para una mejor experiencia de usuario.
          </p>
        </header>

        <div className="space-y-8">
          {timePickerVariants.map((variant, index) => (
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