import React from 'react';
import Header from '@/components/Header';

export default function RulesPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Rules Configuration" />
      <div className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Rules Configuration</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Manage automation rules for smart categorization and data cleaning.</p>
            </div>
            <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-lg shadow-sm shadow-primary/30 transition-all active:scale-95">
              <span className="material-symbols-outlined text-[20px]">add</span>
              <span className="text-sm font-semibold whitespace-nowrap">New Rule</span>
            </button>
          </div>

          {/* Search and Tabs */}
          <div className="flex flex-col gap-4 bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-1">
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200 dark:border-slate-700 pb-0">
              {/* Tabs */}
              <div className="flex items-center gap-6 overflow-x-auto">
                <button className="relative pb-3 text-sm font-semibold text-primary border-b-2 border-primary transition-colors">
                  Category Mapping
                </button>
                <button className="relative pb-3 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Merchant Rename
                </button>
                <button className="relative pb-3 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Auto Tagging
                </button>
              </div>
            </div>
            {/* Search Bar */}
            <div className="p-3">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
                </div>
                <input className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary sm:text-sm" placeholder="Search rules..." type="text" />
              </div>
            </div>
          </div>

          {/* Rules List */}
          <div className="flex flex-col gap-3">
            {/* Rule Card 1 */}
            <div className="group relative flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
              {/* Drag Handle */}
              <div className="hidden md:flex text-slate-300 dark:text-slate-600 cursor-grab hover:text-slate-500">
                <span className="material-symbols-outlined text-[20px]">drag_indicator</span>
              </div>
              {/* Main Content */}
              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 w-full">
                {/* Conditions */}
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">Merchant</span>
                    <code className="font-mono text-xs md:text-sm text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/20 px-1.5 py-0.5 rounded border border-pink-100 dark:border-pink-900/30">/Starbucks|Costa|Luckin/i</code>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="material-symbols-outlined text-slate-400 text-[16px]">arrow_right_alt</span>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800/30 text-orange-700 dark:text-orange-300 text-xs font-medium">
                      <span className="material-symbols-outlined text-[14px] fill-current">coffee</span>
                      Food - Coffee
                    </div>
                    <span className="ml-2 text-[10px] font-bold text-slate-400 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded uppercase tracking-wide">P0</span>
                  </div>
                </div>
                {/* Actions */}
                <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-700 mt-2 md:mt-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 dark:text-slate-400 hidden md:block">Enabled</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50 dark:peer-focus:ring-primary/80 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-[20px]">edit</span>
                    </button>
                    <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule Card 2 */}
            <div className="group relative flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
              <div className="hidden md:flex text-slate-300 dark:text-slate-600 cursor-grab hover:text-slate-500">
                <span className="material-symbols-outlined text-[20px]">drag_indicator</span>
              </div>
              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 w-full">
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">Description</span>
                    <code className="font-mono text-xs md:text-sm text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-1.5 py-0.5 rounded border border-indigo-100 dark:border-indigo-900/30">/Uber|Didi|Lyft/</code>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="material-symbols-outlined text-slate-400 text-[16px]">arrow_right_alt</span>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-blue-700 dark:text-blue-300 text-xs font-medium">
                      <span className="material-symbols-outlined text-[14px] fill-current">directions_car</span>
                      Transport - Taxi
                    </div>
                    <span className="ml-2 text-[10px] font-bold text-slate-400 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded uppercase tracking-wide">P1</span>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-700 mt-2 md:mt-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 dark:text-slate-400 hidden md:block">Enabled</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50 dark:peer-focus:ring-primary/80 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-[20px]">edit</span>
                    </button>
                    <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule Card 3 (Disabled) */}
            <div className="group relative flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm opacity-75">
              <div className="hidden md:flex text-slate-300 dark:text-slate-600 cursor-grab hover:text-slate-500">
                <span className="material-symbols-outlined text-[20px]">drag_indicator</span>
              </div>
              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 w-full">
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">Amount</span>
                    <code className="font-mono text-xs md:text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-1.5 py-0.5 rounded border border-emerald-100 dark:border-emerald-900/30">&gt; 5000</code>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="material-symbols-outlined text-slate-400 text-[16px]">arrow_right_alt</span>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/30 text-purple-700 dark:text-purple-300 text-xs font-medium">
                      <span className="material-symbols-outlined text-[14px] fill-current">shopping_bag</span>
                      Shopping - Large
                    </div>
                    <span className="ml-2 text-[10px] font-bold text-slate-400 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded uppercase tracking-wide">P2</span>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-700 mt-2 md:mt-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 dark:text-slate-400 hidden md:block">Disabled</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50 dark:peer-focus:ring-primary/80 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-[20px]">edit</span>
                    </button>
                    <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center py-6 text-sm text-slate-500 dark:text-slate-400">
            <span>Showing 4 of 12 rules</span>
          </div>
        </div>
      </div>
    </div>
  );
}
